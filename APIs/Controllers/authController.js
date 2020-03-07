const Student = require("../Model/StudentModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const AppErr = require("../utils/appError");
const catchAsync = require("../utils/catchErr");
const sendEmail = require("../utils/email");
const crypto = require("crypto");

const singleToken = id => {
  return jwt.sign({ id }, process.env.SEC_STR, {
    expiresIn: process.env.TIME_DUR
  });
};

const createSendToken = (student, statusCode, res, str) => {
  const token = singleToken(student._id);
  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),

    httpOnly: true
  };

  if (process.env.NODE_ENV === "production") cookieOption.secure = true;

  res.cookie("jwt", token, cookieOption);

  //remove the password from the output
  student.password = undefined;

  res.status(statusCode).json({
    status: str,
    token,
    data: {
      student
    }
  });
};

exports.signup = catchAsync(async (req, res) => {
  const newStudent = await Student.create(req.body);

  createSendToken(newStudent, 201, res, "sign up success !!");
});

exports.login = catchAsync(async (req, res, next) => {
  const { studentId, password } = req.body;

  //1) checking the user and pass is provied or not
  if (!studentId || !password)
    return next(new AppErr("Enter the Email/password", 400));
  //2) checking the pass from DB
  const student = await Student.findOne({ studentId }).select("+password");

  if (!student || !(await student.checkPassword(password, student.password))) {
    return next(new AppErr("Incorrect the Email/password", 400));
  }

  //3)Issue the Token
  createSendToken(student, 201, res, "Login success !!");
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    //console.log(req.headers.authorization, "protect");
    token = req.headers.authorization.split(" ")[1];
  }

  //1) check the token
  if (!token) {
    return next(new AppErr("You must login first ..", 403));
  }

  //2)verification token
  const decoded = await promisify(jwt.verify)(token, process.env.SEC_STR);

  //3)check if the user still exist
  const curStudent = await Student.findById(decoded.id);

  if (!curStudent) {
    return next(new AppErr("Student have been deleted", 404));
  }

  //4)Check if the user change password after the token was issused
  if (curStudent.changePasswordAfter(decoded.iat)) {
    return next(new AppErr("Student recently changed  the password ", 400));
  }

  //grant access
  req.student = curStudent;
  console.log(req.student);
  next();
});

exports.passwordForget = catchAsync(async (req, res, next) => {
  //1)Get student based on student ID
  const student = await Student.findOne({ studentId: req.body.studentId });

  if (!student)
    return next(new AppErr("No such student found by this ID", 404));

  const resetToken = student.generateResetToken();
  console.log(resetToken); //Logs the restToken
  //2) saveing the reset Token to DB
  await student.save({ validateBeforeSave: false });

  const reset = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/student/resetPassword/${resetToken}`;

  const message = `Forget Your password ? just click the following link  to  change it ${reset}.\nif you remember ignore it`;

  //3)Mail Sending function
  try {
    await sendEmail({
      studentId: student.studentId,
      subject: "your password reset link vaild for 10 min",
      message
    });

    res.status(200).json({
      status: "success",
      message: "token sent to email"
    });
  } catch (err) {
    student.passwordResetToken = undefined;
    student.passwordResetExpires = undefined;

    await student.save({ validateBeforeSave: false });

    return next(new AppErr("there was a error in mail", 500));
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  //1) encrypting the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  //2)finding the user relavent to the token
  const student = await Student.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });
  //3) if token expired or user not found.
  if (!student) {
    return next(new AppErr("Token is invalid or expired", 400));
  }

  //4)update change at property for the user
  console.log(req.body.password, req.body.passwordConfirm);
  student.password = req.body.password;
  student.passwordConfirm = req.body.passwordConfirm;
  student.passwordResetExpires = undefined;
  student.passwordResetToken = undefined;
  student.passwordChangeAt = Date.now() - 1000;
  await student.save();

  //5) log the student in ..
  createSendToken(student, 200, res, "Login success !!");
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  //1) Get the user from the collection

  const student = await Student.findById(req.student._id).select("+password");

  console.log(req.body.password, student.password);
  //2)Check if posted current password is correct
  if (
    !(await student.checkPassword(req.body.passwordCurrent, student.password))
  ) {
    return next(new AppErr("Your Current password is wrong", 401));
  }

  //3)if so, update password
  student.password = req.body.password;
  student.passwordConfrim = req.body.passwordConfrim;
  console.log("sas");
  await student.save();

  createSendToken(student, 200, res, "Password updated !!");
});
