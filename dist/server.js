/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./APIs/Controllers/ErrorController.js":
/*!*********************************************!*\
  !*** ./APIs/Controllers/ErrorController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
};

/***/ }),

/***/ "./APIs/Controllers/authController.js":
/*!********************************************!*\
  !*** ./APIs/Controllers/authController.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Student = __webpack_require__(/*! ../Model/StudentModel */ "./APIs/Model/StudentModel.js");

var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var {
  promisify
} = __webpack_require__(/*! util */ "util");

var AppErr = __webpack_require__(/*! ../utils/appError */ "./APIs/utils/appError.js");

var catchAsync = __webpack_require__(/*! ../utils/catchErr */ "./APIs/utils/catchErr.js");

var sendEmail = __webpack_require__(/*! ../utils/email */ "./APIs/utils/email.js");

var crypto = __webpack_require__(/*! crypto */ "crypto");

var singleToken = id => {
  return jwt.sign({
    id
  }, process.env.SEC_STR, {
    expiresIn: process.env.TIME_DUR
  });
};

var createSendToken = (student, statusCode, res, str) => {
  var token = singleToken(student._id);
  var cookieOption = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true
  };
  if (false) {}
  res.cookie("jwt", token, cookieOption); //remove the password from the output

  student.password = undefined;
  res.status(statusCode).json({
    status: str,
    token,
    data: {
      student
    }
  });
};

exports.signup = catchAsync( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var newStudent = yield Student.create(req.body);
    createSendToken(newStudent, 201, res, "sign up success !!");
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
exports.login = catchAsync( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    var {
      studentId,
      password
    } = req.body; //1) checking the user and pass is provied or not

    if (!studentId || !password) return next(new AppErr("Enter the Email/password", 400)); //2) checking the pass from DB

    var student = yield Student.findOne({
      studentId
    }).select("+password");

    if (!student || !(yield student.checkPassword(password, student.password))) {
      return next(new AppErr("Incorrect the Email/password", 400));
    } //3)Issue the Token


    createSendToken(student, 201, res, "Login success !!");
  });

  return function (_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());
exports.protect = catchAsync( /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    var token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      //console.log(req.headers.authorization, "protect");
      token = req.headers.authorization.split(" ")[1];
    } //1) check the token


    if (!token) {
      return next(new AppErr("You must login first ..", 403));
    } //2)verification token


    var decoded = yield promisify(jwt.verify)(token, process.env.SEC_STR); //3)check if the user still exist

    var curStudent = yield Student.findById(decoded.id);

    if (!curStudent) {
      return next(new AppErr("Student have been deleted", 404));
    } //4)Check if the user change password after the token was issused


    if (curStudent.changePasswordAfter(decoded.iat)) {
      return next(new AppErr("Student recently changed  the password ", 400));
    } //grant access


    req.student = curStudent;
    console.log(req.student);
    next();
  });

  return function (_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());
exports.passwordForget = catchAsync( /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res, next) {
    //1)Get student based on student ID
    var student = yield Student.findOne({
      studentId: req.body.studentId
    });
    if (!student) return next(new AppErr("No such student found by this ID", 404));
    var resetToken = student.generateResetToken();
    console.log(resetToken); //Logs the restToken
    //2) saveing the reset Token to DB

    yield student.save({
      validateBeforeSave: false
    });
    var reset = "".concat(req.protocol, "://").concat(req.get("host"), "/api/v1/student/resetPassword/").concat(resetToken);
    var message = "Forget Your password ? just click the following link  to  change it ".concat(reset, ".\nif you remember ignore it"); //3)Mail Sending function

    try {
      yield sendEmail({
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
      yield student.save({
        validateBeforeSave: false
      });
      return next(new AppErr("there was a error in mail", 500));
    }
  });

  return function (_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}());
exports.resetPassword = catchAsync( /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res, next) {
    //1) encrypting the token
    var hashedToken = crypto.createHash("sha256").update(req.params.token).digest("hex"); //2)finding the user relavent to the token

    var student = yield Student.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: {
        $gt: Date.now()
      }
    }); //3) if token expired or user not found.

    if (!student) {
      return next(new AppErr("Token is invalid or expired", 400));
    } //4)update change at property for the user


    console.log(req.body.password, req.body.passwordConfirm);
    student.password = req.body.password;
    student.passwordConfirm = req.body.passwordConfirm;
    student.passwordResetExpires = undefined;
    student.passwordResetToken = undefined;
    student.passwordChangeAt = Date.now() - 1000;
    yield student.save(); //5) log the student in ..

    createSendToken(student, 200, res, "Login success !!");
  });

  return function (_x12, _x13, _x14) {
    return _ref5.apply(this, arguments);
  };
}());
exports.updatePassword = catchAsync( /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res, next) {
    //1) Get the user from the collection
    var student = yield Student.findById(req.student._id).select("+password");
    console.log(req.body.password, student.password); //2)Check if posted current password is correct

    if (!(yield student.checkPassword(req.body.passwordCurrent, student.password))) {
      return next(new AppErr("Your Current password is wrong", 401));
    } //3)if so, update password


    student.password = req.body.password;
    student.passwordConfrim = req.body.passwordConfrim;
    console.log("sas");
    yield student.save();
    createSendToken(student, 200, res, "Password updated !!");
  });

  return function (_x15, _x16, _x17) {
    return _ref6.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./APIs/Controllers/mlControllers.js":
/*!*******************************************!*\
  !*** ./APIs/Controllers/mlControllers.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Student = __webpack_require__(/*! ../Model/StudentModel */ "./APIs/Model/StudentModel.js");

var catchAsync = __webpack_require__(/*! ../utils/catchErr */ "./APIs/utils/catchErr.js");

var knn = __webpack_require__(/*! ../../knn/knn */ "./knn/knn.js");

var fs = __webpack_require__(/*! fs */ "fs");

var path = __webpack_require__(/*! path */ "path");

exports.post = catchAsync( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var student = yield Student.findById(req.params.id);
    console.log(req.body); // const body = {
    //   ABC: "4",
    //   D: "3",
    //   C: "5",
    //   AAC: "6",
    //   A: "1",
    //   V: "1",
    //   ABC_T: "5",
    //   D_T: "1",
    //   C_T: "1",
    //   AAC_T: "5",
    //   A_T: "1"
    // };

    student.mlData = _objectSpread({}, student.mlData, {}, req.body);
    yield student.save({
      validateBeforeSave: false
    });
    res.status(200).json({
      message: "Ml Data posted !",
      data: {
        student
      }
    });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
exports.getData = catchAsync( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var student = yield Student.findById(req.params.id);
    var mlData = Object.values(student.mlData).slice(1);
    console.log(mlData);
    var learningStyle = knn.getType(mlData);
    res.status(200).json(learningStyle);
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./APIs/Controllers/studentController.js":
/*!***********************************************!*\
  !*** ./APIs/Controllers/studentController.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Student = __webpack_require__(/*! ../Model/StudentModel */ "./APIs/Model/StudentModel.js");

exports.getAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var allStudents = yield Student.find();
    res.status(200).json({
      message: "Success!",
      data: {
        allStudents
      }
    });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./APIs/Model/StudentModel.js":
/*!************************************!*\
  !*** ./APIs/Model/StudentModel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

var validator = __webpack_require__(/*! validator */ "validator");

var bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");

var crypto = __webpack_require__(/*! crypto */ "crypto");

var studentSchema = mongoose.Schema({
  name: {
    type: String
  },
  class: {
    type: Number,
    min: 5,
    max: 9
  },
  studentId: {
    type: String,
    validate: [validator.isEmail, "Enter valid ID"],
    lowercase: true,
    unique: true,
    required: [true, "say your student ID"]
  },
  photo: String,
  password: {
    type: String,
    minlength: 6,
    required: [true, "password"],
    select: false
  },
  passwordConfrim: {
    type: String,
    required: [true, "Enter Confrim Password "],
    validate: {
      validator: function validator(el) {
        return el === this.password;
      },
      message: "password not match !"
    }
  },
  passwordChangeAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  },
  mlData: {
    ABC: {
      type: Number,
      min: 0,
      max: 9
    },
    D: {
      type: Number,
      min: 0,
      max: 9
    },
    C: {
      type: Number,
      min: 0,
      max: 9
    },
    AAC: {
      type: Number,
      min: 0,
      max: 9
    },
    A: {
      type: Number,
      min: 0,
      max: 9
    },
    V: {
      type: Number,
      min: 0,
      max: 9
    },
    ABC_T: {
      type: Number,
      min: 0,
      max: 9
    },
    D_T: {
      type: Number,
      min: 0,
      max: 9
    },
    C_T: {
      type: Number,
      min: 0,
      max: 9
    },
    AAC_T: {
      type: Number,
      min: 0,
      max: 9
    },
    A_T: {
      type: Number,
      min: 0,
      max: 9
    }
  }
});
studentSchema.pre("save", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (next) {
    if (!this.isModified("password")) return next();
    this.password = yield bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()); //method to check the password from the datebase

studentSchema.methods.checkPassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (Enteredpassword, DBpassword) {
    return yield bcrypt.compare(Enteredpassword, DBpassword);
  });

  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}(); //method for protect middleware


studentSchema.methods.changePasswordAfter = function (JWTtimestamp) {
  if (this.passwordChangeAt) {
    var changedTimeStamp = parseInt(this.passwordChangeAt.getTime() / 1000, 10);
    return changedTimeStamp > JWTtimestamp;
  }
};

studentSchema.methods.generateResetToken = function () {
  //1)generate Random String
  var resetToken = crypto.randomBytes(32).toString("hex"); //2)Encrypting the random String and saveing to DB

  this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex"); //3)Setting password resetToken expire time

  this.passwordResetExpires = Date.now() + 600000; // 10 Mins
  //4)Sending non encrpted token  to user

  return resetToken;
};

var Student = mongoose.model("Student", studentSchema);
module.exports = Student;

/***/ }),

/***/ "./APIs/Routers/studentRouter.js":
/*!***************************************!*\
  !*** ./APIs/Routers/studentRouter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(/*! express */ "express");

var router = express.Router();

var authController = __webpack_require__(/*! ../Controllers/authController */ "./APIs/Controllers/authController.js");

var studentController = __webpack_require__(/*! ../Controllers/studentController */ "./APIs/Controllers/studentController.js");

var mlController = __webpack_require__(/*! ../Controllers/mlControllers */ "./APIs/Controllers/mlControllers.js");

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/forgetPassword").post(authController.passwordForget);
router.route("/resetPassword/:token").post(authController.resetPassword);
router.route("/updatePassword").post(authController.protect, authController.updatePassword);
router.route("/getAll").get(authController.protect, studentController.getAll);
router.route("/ml/post/:id").patch(mlController.post);
router.route("/ml/get/:id").get(mlController.getData);
module.exports = router;

/***/ }),

/***/ "./APIs/utils/appError.js":
/*!********************************!*\
  !*** ./APIs/utils/appError.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = "".concat(statusCode).startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

}

module.exports = AppError;

/***/ }),

/***/ "./APIs/utils/catchErr.js":
/*!********************************!*\
  !*** ./APIs/utils/catchErr.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

/***/ }),

/***/ "./APIs/utils/email.js":
/*!*****************************!*\
  !*** ./APIs/utils/email.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer");

var sendEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (option) {
    console.log(option); //1) create a transfer

    var transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      } //Active in gmail

    }); //2) Define the email option

    var mailOption = {
      from: "Siva prakash  <admin@chillstudies.com>",
      to: option.studentId,
      subject: option.subject,
      text: option.message
    }; //3)Actually send the email

    yield transporter.sendMail(mailOption);
  });

  return function sendEmail(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = sendEmail;

/***/ }),

/***/ "./React/Server/index.js":
/*!*******************************!*\
  !*** ./React/Server/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared_Components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/Components/App */ "./React/Shared/Components/App.js");
/* harmony import */ var _Shared_Components_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/Components/theme */ "./React/Shared/Components/theme.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Shared_Data_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Shared/Data/routes */ "./React/Shared/Data/routes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
router.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static("dist"));
router.route("*").get((req, res, next) => {
  var sheets = new _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ServerStyleSheets"]();
  var activeRoute = _Shared_Data_routes__WEBPACK_IMPORTED_MODULE_8__["default"].find(route => Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["matchPath"])(req.url, route));

  var context = _objectSpread({}, activeRoute);

  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(sheets.collect(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["StaticRouter"], {
    context: context,
    location: req.url
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _Shared_Components_theme__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_Components_App__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
  var css = sheets.toString();
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end("<!DOCTYPE html>\n      <html lang='en'>\n        <head>\n          <title>ChillStudies</title>\n          <style id='jss-server-side'>".concat(css, "</style>\n          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />\n          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />\n          <script>window.__initialData__ = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(JSON.stringify(activeRoute)), "</script>\n        </head>\n        <body>\n          <div id='root'>").concat(markup, "</div>\n          <script src=\"/client.js\" async></script>\n        </body>\n      </html>\n    ")).catch(next);
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./React/Shared/Components/App.js":
/*!****************************************!*\
  !*** ./React/Shared/Components/App.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/routes */ "./React/Shared/Data/routes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _Data_routes__WEBPACK_IMPORTED_MODULE_2__["default"].map((route, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({
      key: i + 1
    }, route)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Activity.js":
/*!*********************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Activity.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Activity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/courses */ "./React/Shared/Data/courses.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIosRounded */ "@material-ui/icons/ArrowForwardIosRounded");
/* harmony import */ var _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props, startTime) {
    e.preventDefault();
    var q1 = document.getElementById("q1").value.toLowerCase(),
        q2 = document.getElementById("q2").value.toLowerCase(),
        q3 = document.getElementById("q3").value.toLowerCase(),
        q4 = document.getElementById("q4").value.toLowerCase(),
        q5 = document.getElementById("q5").value.toLowerCase();
    var score = 0;
    if (q1.includes("java virtual machine")) score++;
    if (q2.includes("import")) score++;
    if (q3.includes("3")) score++;
    if (q4.includes("java runtime environment")) score++;
    if (q5.includes("java development kit")) score++;
    score *= 2;
    var time = Math.round((Date.now() - startTime) / 1000 / 60);
    time = time >= 9 ? 9 : time;
    var authToken = sessionStorage.getItem("auth");

    try {
      var res = yield axios__WEBPACK_IMPORTED_MODULE_4___default.a.patch("http://127.0.0.1:8000/api/v1/student/ml/post/" + authToken, {
        A: score,
        A_T: time * 3
      });

      if (res.status === 200) {
        console.log("Successfully Pushed Activity Data");
      } else {
        alert("Problem While Pushing");
      }
    } catch (err) {
      alert(err);
    }

    console.log("score" + score);
    console.log("time" + time);
    props.history.push("/course/" + props.match.params.course + "/Content");
  });

  return function handleSubmit(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

function Activity(props) {
  var classes = useStyles();
  var startTime = Date.now();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1"
  }, "Lets see if you can find the abbreviation for JVM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "q1",
    label: "Answer"
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1"
  }, "Can you find the keyword used to include java packages ?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "q2",
    label: "Answer"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1"
  }, "what could be the value of 'a++' if 'a=2' ?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "q3",
    label: "Answer"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1"
  }, "Lets see if you can find the abbreviation for JRE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "q4",
    label: "Answer"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1"
  }, "Lets see if you can find the abbreviation for JDK")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "q5",
    label: "Answer"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    variant: "middle"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props, startTime);
    }
  }, "Next"));
}

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Content.js":
/*!********************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Content.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props, startTime) {
    e.preventDefault();
    var time = Math.round((Date.now() - startTime) / 1000 / 60);
    var score = time;
    time = time >= 9 ? 9 : time;
    var authToken = sessionStorage.getItem("auth");

    try {
      var res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("http://127.0.0.1:8000/api/v1/student/ml/post/" + authToken, {
        C: score,
        C_T: time * 3
      });

      if (res.status === 200) {
        console.log("Successfully Pushed Activity Data");
      } else {
        alert("Problem While Pushing");
      }
    } catch (err) {
      alert(err);
    }

    console.log("score" + score);
    console.log("time" + time);
    props.history.push("/course/" + props.match.params.course + "/Visual");
  });

  return function handleSubmit(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

function Content(props) {
  var classes = useStyles();
  var startTime = Date.now();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "This article is about a programming language. For the software platform, see Java (software platform). For the software package downloaded from java.com, see Java Platform, Standard Edition. For other uses, see Java (disambiguation). Not to be confused with JavaScript.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java is a general - purpose programming language that is class - based, object - oriented, and designed to have as few implementation dependencies as possible.It is intended to let application developers write once, run anywhere(WORA), [15] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. [16] Java applications are typically compiled to bytecode that can run on any Java virtual machine(JVM) regardless of the underlying computer architecture.The syntax of Java is similar to C and C++, but it has fewer low - level facilities than either of them.As of 2019, Java was one of the most popular programming languages in use according to GitHub, [17][18] particularly for client - server web applications, with a reported 9 million developers. [19]")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java was originally developed by James Gosling at Sun Microsystems(which has since been acquired by Oracle) and released in 1995 as a core component of Sun Microsystems ' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GNU General Public License. Meanwhile, others have developed alternative implementations of these Sun technologies, such as the GNU Compiler for Java (bytecode compiler), GNU Classpath (standard libraries), and IcedTea-Web (browser plugin for applets).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "The latest versions are Java 13, released in September 2019, and Java 11, a currently supported long-term support (LTS) version, released on September 25, 2018; Oracle released for the legacy Java 8 LTS the last free public update in January 2019 for commercial use, while it will otherwise still support Java 8 with public updates for personal use up to at least December 2020. Oracle (and others) highly recommend uninstalling older versions of Java because of serious risks due to unresolved security issues.[20] Since Java 9 (and 10 and 12) is no longer supported, Oracle advises its users to immediately transition to the latest version (currently Java 13) or an LTS release.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "History")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "James Gosling, Mike Sheridan, and Patrick Naughton initiated the Java language project in June 1991.[21] Java was originally designed for interactive television, but it was too advanced for the digital cable television industry at the time.[22] The language was initially called Oak after an oak tree that stood outside Gosling's office. Later the project went by the name Green and was finally renamed Java, from Java coffee, the coffee from Indonesia.[23] Gosling designed Java with a C/C++-style syntax that system and application programmers would find familiar.[24]")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Sun Microsystems released the first public implementation as Java 1.0 in 1996.[25] It promised Write Once, Run Anywhere (WORA) functionality, providing no-cost run-times on popular platforms. Fairly secure and featuring configurable security, it allowed network- and file-access restrictions. Major web browsers soon incorporated the ability to run Java applets within web pages, and Java quickly became popular. The Java 1.0 compiler was re-written in Java by Arthur van Hoff to comply strictly with the Java 1.0 language specification.[26] With the advent of Java 2 (released initially as J2SE 1.2 in December 1998 \u2013 1999), new versions had multiple configurations built for different types of platforms. J2EE included technologies and APIs for enterprise applications typically run in server environments, while J2ME featured APIs optimized for mobile applications. The desktop version was renamed J2SE. In 2006, for marketing purposes, Sun renamed new J2 versions as Java EE, Java ME, and Java SE, respectively.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Principles")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "1.It must be robust and secure.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "2.It must be architecture-neutral and portable.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "3.It must execute with high performance.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "4.It must be interpreted, threaded, and dynamic.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Versions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*JDK 1.0 (January 23, 1996)[37]")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*JDK 1.1 (February 19, 1996)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*J2SE 1.2 (December 8, 1998)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*J2SE 1.3 (May 8, 2000)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*J2SE 1.4 (February 6, 2002)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*J2SE 5.0 (September 30, 2004)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*Java SE 6 (December 11, 2006)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*Java SE 7 (July 28, 2011)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*Java SE 8 (March 18, 2014)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*Java SE 9 (September 21, 2017)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*Java SE 10 (March 20, 2018)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*Java SE 11 (September 25, 2018)[38]")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "*Java SE 12 (March 19, 2019)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Editions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java Card for smart-cards.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java Platform, Micro Edition (Java ME) \u2013 targeting environments with limited resources.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java Platform, Standard Edition (Java SE) \u2013 targeting workstation environments.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java Platform, Enterprise Edition (Java EE) \u2013 targeting large distributed enterprise or Internet environments.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Execution system")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Java JVM and Bytecode")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "One design goal of Java is portability, which means that programs written for the Java platform must run similarly on any combination of hardware and operating system with adequate run time support. This is achieved by compiling the Java language code to an intermediate representation called Java bytecode, instead of directly to architecture-specific machine code. Java bytecode instructions are analogous to machine code, but they are intended to be executed by a virtual machine (VM) written specifically for the host hardware. End users commonly use a Java Runtime Environment (JRE) installed on their machine for standalone Java applications, or in a web browser for Java applets. Standard libraries provide a generic way to access host-specific features such as graphics, threading, and networking. The use of universal bytecode makes porting simple. However, the overhead of interpreting bytecode into machine instructions made interpreted programs almost always run more slowly than native executables. Just-in-time (JIT) compilers that compile byte-codes to machine code during runtime were introduced from an early stage. Java itself is platform-independent and is adapted to the particular platform it is to run on by a Java virtual machine for it, which translates the Java bytecode into the platform's machine language")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Performance")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Programs written in Java have a reputation for being slower and requiring more memory than those written in C++.[44][45] However, Java programs' execution speed improved significantly with the introduction of just-in-time compilation in 1997/1998 for Java 1.1,[46] the addition of language features supporting better code analysis (such as inner classes, the StringBuilder class, optional assertions, etc.), and optimizations in the Java virtual machine, such as HotSpot becoming the default for Sun's JVM in 2000. With Java 1.5, the performance was improved with the addition of the java.util.concurrent package, including lock free implementations of the ConcurrentMaps and other multi-core collections, and it was improved further with Java 1.6.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Non-JVM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Some platforms offer direct hardware support for Java; there are micro controllers that can run Java bytecode in hardware instead of a software Java virtual machine,[47] and some ARM-based processors could have hardware support for executing Java bytecode through their Jazelle option, though support has mostly been dropped in current implementations of ARM.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Automatic memory management")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java uses an automatic garbage collector to manage memory in the object lifecycle. The programmer determines when objects are created, and the Java runtime is responsible for recovering the memory once objects are no longer in use. Once no references to an object remain, the unreachable memory becomes eligible to be freed automatically by the garbage collector. Something similar to a memory leak may still occur if a programmer's code holds a reference to an object that is no longer needed, typically when objects that are no longer needed are stored in containers that are still in use. If methods for a non-existent object are called, a null pointer exception is thrown.[48][49] One of the ideas behind Java's automatic memory management model is that programmers can be spared the burden of having to perform manual memory management. In some languages, memory for the creation of objects is implicitly allocated on the stack or explicitly allocated and deallocated from the heap. In the latter case, the responsibility of managing memory resides with the programmer. If the program does not deallocate an object, a memory leak occurs. If the program attempts to access or deallocate memory that has already been deallocated, the result is undefined and difficult to predict, and the program is likely to become unstable or crash. This can be partially remedied by the use of smart pointers, but these add overhead and complexity. Note that garbage collection does not prevent logical memory leaks, i.e. those where the memory is still referenced but never used. Garbage collection may happen at any time. Ideally, it will occur when a program is idle. It is guaranteed to be triggered if there is insufficient free memory on the heap to allocate a new object; this can cause a program to stall momentarily. Explicit memory management is not possible in Java. Java does not support C/C++ style pointer arithmetic, where object addresses can be arithmetically manipulated (e.g. by adding or subtracting an offset). This allows the garbage collector to relocate referenced objects and ensures type safety and security. As in C++ and some other object-oriented languages, variables of Java's primitive data types are either stored directly in fields (for objects) or on the stack (for methods) rather than on the heap, as is commonly true for non-primitive data types (but see escape analysis). This was a conscious decision by Java's designers for performance reasons. Java contains multiple types of garbage collectors. By default, HotSpot uses the parallel scavenge garbage collector.[50] However, there are also several other garbage collectors that can be used to manage the heap. For 90% of applications in Java, the Concurrent Mark-Sweep (CMS) garbage collector is sufficient.[51] Oracle aims to replace CMS with the Garbage-First Collector (G1).[52] Having solved the memory management problem does not relieve the programmer of the burden of handling properly other kind of resources, like network or database connections, file handles, etc., especially in the presence of exceptions. Paradoxically, the presence of a garbage collector has faded the necessity of having an explicit destructor method in the classes, thus rendering the management of these other resources more difficult.[citation needed]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props, startTime);
    }
  }, "Next"));
}

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Definitions.js":
/*!************************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Definitions.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Definitions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props, startTime, score) {
    e.preventDefault();
    score *= 2;
    var time = Math.round((Date.now() - startTime) / 1000 / 60);
    var authToken = sessionStorage.getItem("auth");

    try {
      var res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("http://127.0.0.1:8000/api/v1/student/ml/post/" + authToken, {
        D: score,
        D_T: time * 3
      });

      if (res.status === 200) {
        console.log("Successfully Pushed Activity Data");
      } else {
        alert("Problem While Pushing");
      }
    } catch (err) {
      alert(err);
    }

    time = time >= 9 ? 9 : time;
    console.log("score" + score);
    console.log("time" + time);
    props.history.push("/course/" + props.match.params.course + "/Activity");
  });

  return function handleSubmit(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

function Definitions(props) {
  var classes = useStyles();
  var startTime = Date.now();
  var [java, setJava] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleJava = () => {
    setJava(true);
  };

  var [jvm, setJvm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleJvm = () => {
    setJvm(true);
  };

  var [jdk, setJdk] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleJdk = () => {
    setJdk(true);
  };

  var [jre, setJre] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleJre = () => {
    setJre(true);
  };

  var [jar, setJar] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleJar = () => {
    setJar(true);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleJava
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    gutterBottom: true
  }, "Java")), java ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    gutterBottom: true
  }, "Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    gutterBottom: true
  }, "The Java syntax is similar to C++, but is strictly an object-oriented programming language. For example, most Java programs contain classes, which are used to define objects, and methods, which are assigned to individual classes. Java is also known for being more strict than C++, meaning variables and functions must be explicitly defined. This means Java source code may produce errors or \"exceptions\" more easily than other languages, but it also limits other types of errors that may be caused by undefined variables or unassigned types."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleJvm
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "JVM")), jvm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "JVM(Java Virtual Machine) acts as a run-time engine to run Java applications. JVM is the one that actually calls the main method present in a java code. JVM is a part of JRE(Java Runtime Environment).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java applications are called WORA (Write Once Run Anywhere). This means a programmer can develop Java code on one system and can expect it to run on any other Java enabled system without any adjustment. This is all possible because of JVM.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "When we compile a .java file, .class files(contains byte-code) with the same class names present in .java file are generated by the Java compiler. This .class file goes into various steps when we run it. These steps together describe the whole JVM."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleJre
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "JRE")), jre ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "JRE stands for \u201CJava Runtime Environment\u201D and may also be written as \u201CJava RTE.\u201D The Java Runtime Environment provides the minimum requirements for executing a Java application; it consists of the Java Virtual Machine (JVM), core classes, and supporting files.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java Runtime Environment (to say JRE) is an installation package which provides environment to only run(not develop) the java program(or application)onto your machine. JRE is only used by them who only wants to run the Java Programs i.e. end users of your system."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleJdk
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "JDK")), jdk ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "The Java Development Kit (JDK) is a software development environment used for developing Java applications and applets. It includes the Java Runtime Environment (JRE), an interpreter/loader (Java), a compiler (javac), an archiver (jar), a documentation generator (Javadoc) and other tools needed in Java development.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java Development Kit (in short JDK) is Kit which provides the environment to develop and execute(run) the Java program. JDK is a kit(or package) which includes two things Development Tools(to provide an environment to develop your java programs) JRE (to execute your java program). became a popular choice for creating web applications."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleJar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "JAR")), jar ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      var score = 0;
      java ? score++ : score;
      jdk ? score++ : score;
      jre ? score++ : score;
      jar ? score++ : score;
      jvm ? score++ : score;
      handleSubmit(e, props, startTime, score);
    }
  }, "Next")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Overview.js":
/*!*********************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Overview.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Overview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props, startTime, score) {
    e.preventDefault();
    score *= 2;
    var time = Math.round((Date.now() - startTime) / 1000 / 60);
    time = time >= 9 ? 9 : time;
    var authToken = sessionStorage.getItem("auth");

    try {
      var res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("http://127.0.0.1:8000/api/v1/student/ml/post/" + authToken, {
        ABC: score,
        ABC_T: time * 3
      });

      if (res.status === 200) {
        console.log("Successfully Pushed Activity Data");
      } else {
        alert("Problem While Pushing");
      }
    } catch (err) {
      alert(err);
    }

    console.log("score" + score);
    console.log("time" + time);
    props.history.push("/course/" + props.match.params.course + "/Definitons");
  });

  return function handleSubmit(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

function Overview(props) {
  var classes = useStyles();
  var startTime = Date.now();
  var [intro, setIntro] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleIntro = () => {
    setIntro(true);
  };

  var [basics, setBasics] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleBasics = () => {
    setBasics(true);
  };

  var [inter, setInter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleInter = () => {
    setInter(true);
  };

  var [oops, setOops] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleOops = () => {
    setOops(true);
  };

  var [adv, setAdv] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleAdv = () => {
    setAdv(true);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleIntro
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    gutterBottom: true
  }, "Introduction")), intro ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    gutterBottom: true
  }, "In this section we learn the basic & fundamental things about Java"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleBasics
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "Basics")), basics ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Basic programming concepts like contditional statements and loop statements and variables and thier syntax will be covered here."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleInter
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "Intermediatory")), inter ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "concepts like packages classes functions access modifiers will be covered here."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleOops
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "Object Oriented Programming With Java")), oops ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Object Oriented concepts like inheritence and abstracting will be covered here.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java Interface concepts also will take importance phase in this chapter"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleAdv
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "Advanced Java")), adv ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Advanced java concepts like threads and streams and lamda kinda things will take dominance here.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Networking in java also is an important concept to learn."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      var score = 0;
      intro ? score++ : score;
      inter ? score++ : score;
      oops ? score++ : score;
      adv ? score++ : score;
      basics ? score++ : score;
      handleSubmit(e, props, startTime, score);
    }
  }, "Next")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Summary.js":
/*!********************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Summary.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Summary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props, startTime, score) {
    e.preventDefault();
    score *= 2;
    var time = Math.round((Date.now() - startTime) / 1000 / 60);
    time = time >= 9 ? 9 : time;
    var authToken = sessionStorage.getItem("auth");
    console.log("score" + score);
    console.log("time" + time);

    try {
      var res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("http://127.0.0.1:8000/api/v1/student/ml/post/" + authToken, {
        AAC: score,
        AAC_T: time * 3
      });

      if (res.status === 200) {
        console.log("Successfully Pushed Activity Data");
      } else {
        alert("Problem While Pushing");
      }
    } catch (err) {
      alert(err);
    }

    var learnningStyle = "";

    try {
      var _res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://127.0.0.1:8000/api/v1/student/ml/get/" + authToken);

      if (_res.status === 200) {
        console.log("Successfully fetched Activity Data");
        learnningStyle = _res.data;
      } else {
        alert("Problem While Fetching");
      }
    } catch (err) {
      alert(err);
    }

    var coursName = props.match.params.course;
    props.history.push("/course/" + coursName + "/ls" + learnningStyle);
  });

  return function handleSubmit(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

function Summary(props) {
  var classes = useStyles();
  var startTime = Date.now();
  var [java, setJava] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleJava = () => {
    setJava(true);
  };

  var [basics, setBasics] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleBasics = () => {
    setBasics(true);
  };

  var [inter, setInter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleInter = () => {
    setInter(true);
  };

  var [oops, setOops] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleOops = () => {
    setOops(true);
  };

  var [adv, setAdv] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  var handleAdv = () => {
    setAdv(true);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleJava
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    gutterBottom: true
  }, "Java - Summary")), java ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    gutterBottom: true
  }, "Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleBasics
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "Java Basics - Summary")), basics ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "So, the basic concepts of java are, just like any other programming languages, contional statements, loop statements, variables etc."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleInter
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "Concepts In Java - Summary")), inter ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Popular concepts that are used in java are Classes, Interfaces, Packages thess will get u started in Java."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleOops
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "Object Oriented Programming With Java")), oops ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Object oriented concepts are mandatory things you should learn if you wanna use java. It will enable you to work with teams that means you will learn making loosely coupled applications using these concepts"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: classes.heroButtons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    onClick: handleAdv
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "Advanced Java - Summary")), adv ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Concepts like Threads and streams enables you to use Java effectively. With that you could build enterprice applications and applicatoons that runs in network. Also, Networking in java will help you build networking modules such as Gateways."))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      var score = 0;
      java ? score++ : score;
      inter ? score++ : score;
      oops ? score++ : score;
      adv ? score++ : score;
      basics ? score++ : score;
      handleSubmit(e, props, startTime, score);
    }
  }, "Finish")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Visual.js":
/*!*******************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Visual.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Visual; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/CheckCircleSharp */ "@material-ui/icons/CheckCircleSharp");
/* harmony import */ var _material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props, startTime, score) {
    e.preventDefault();
    var time = (Date.now() - startTime) / 1000 / 60;
    score *= 2;
    score = score >= 9 ? 9 : score;
    time = time >= 9 ? 9 : time;
    time = Math.round(time);
    var authToken = sessionStorage.getItem("auth");

    try {
      var res = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch("http://127.0.0.1:8000/api/v1/student/ml/post/" + authToken, {
        V: score // "V_T" :  time

      });

      if (res.status === 200) {
        console.log("Successfully Pushed Activity Data");
      } else {
        alert("Problem While Pushing");
      }
    } catch (err) {
      alert(err);
    }

    console.log("score" + score);
    console.log("time" + time);
    props.history.push("/course/" + props.match.params.course + "/Summary");
  });

  return function handleSubmit(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

function Visual(props) {
  var classes = useStyles();
  var startTime = Date.now();
  var [inheritance, setInheritance] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  var [single, setSingle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  var [multi, setMulti] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  var [hybrid, setHybrid] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  var [hierarchical, setHierarchical] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);

  var handleInheritance = () => {
    setInheritance(false);
  };

  var handleSingle = () => {
    setSingle(false);
  };

  var handleMulti = () => {
    setMulti(false);
  };

  var handleHybrid = () => {
    setHybrid(false);
  };

  var handleHierarchical = () => {
    setHierarchical(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5"
  }, "Inheritance")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root,
    raised: inheritance
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile" // height="250"
    ,
    image: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Inheritance-types-java.png",
    title: "Inheritance"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Inheritance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "Inheritance is a widely used OOPs concept which is used to implemet abstraction and coupling in our application. Also, it will be used full if we work with a team or a group of people."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: classes.handleButton
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: inheritance ? "secondary" : "primary",
    onClick: handleInheritance
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default.a, null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root,
    raised: single
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile",
    height: "500",
    image: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Single-Inheritance-144x180.png",
    title: "Single Inheritance"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Single Inheritance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "In single inheritance, one class inherits the properties of another. It enables a derived class to inherit the properties and behavior from a single parent class. This will in turn enable code reusability as well as add new features to the existing code. Here, Class A is your parent class and Class B is your child class which inherits the properties and behavior of the parent class."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: classes.handleButton
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: single ? "secondary" : "primary",
    onClick: handleSingle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default.a, null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root,
    raised: multi
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile",
    height: "500",
    image: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Multilevel-Inheritance-204x300.png",
    title: " Multilevel Inheritance"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Multilevel Inheritance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "When a class is derived from a class which is also derived from another class, i.e. a class having more than one parent class but at different levels, such type of inheritance is called Multilevel Inheritance. If we talk about the flowchart, class B inherits the properties and behavior of class A and class C inherits the properties of class B. Here A is the parent class for B and class B is the parent class for C. So in this case class C implicitly inherits the properties and methods of class A along with Class B. That\u2019s what is multilevel inheritance."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: classes.handleButton
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: multi ? "secondary" : "primary",
    onClick: handleMulti
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default.a, null)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root,
    raised: hybrid
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile" // height="500"
    ,
    image: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Hybrid-Inheritance-186x180.png",
    title: "Hybrid Inheritance"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Hybrid Inheritance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "Hybrid inheritance is a combination of multiple inheritance and multilevel inheritance. Since multiple inheritance is not supported in Java as it leads to ambiguity, so this type of inheritance can only be achieved through the use of the interfaces. If we talk about the flowchart, class A is a parent class for class B and C, whereas Class B and C are the parent class of D which is the only child class"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: classes.handleButton
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: hybrid ? "secondary" : "primary",
    onClick: handleHybrid
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default.a, null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root,
    raised: hierarchical
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile" // height="500"
    ,
    image: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Hierarchical-Inheritance-300x178.png",
    title: "Hierarchical  Inheritance"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Hierarchical Inheritance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "When a class has more than one child classes (sub classes) o r in other words, more than one child classes have the same parent class, then such kind of inheritance is known as hierarchical. If we talk about the flowchart, Class B and C are the child classes which are inheriting from the parent class i.e Class A. Let\u2019s see the syntax for hierarchical inheritance in Java:"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: classes.handleButton
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: hierarchical ? "secondary" : "primary",
    onClick: handleHierarchical
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default.a, null)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      var score = 0;
      inheritance ? score : score++;
      single ? score : score++;
      multi ? score : score++;
      hybrid ? score : score++;
      hierarchical ? score : score++;
      handleSubmit(e, props, startTime, score);
    }
  }, "Next")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/Home.js":
/*!************************************************!*\
  !*** ./React/Shared/Components/Course/Home.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Data_courses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Data/courses */ "./React/Shared/Data/courses.js");
/* harmony import */ var _Shared_Data_learningStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








function Copyright() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright © ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    className: classes.link
  }, "Chill Studies"), " ", new Date().getFullYear(), ".");
}

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  HomeButton: {
    float: "right"
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "left"
  },
  title: {
    flexGrow: 1
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

var handleRoute = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (props, card, course, lsType) {
    var path = props.history.location.pathname + "";
    var to = "";
    lsType = path.includes("/home") ? (yield axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("http://127.0.0.1:8000/api/v1/student/ml/get/" + sessionStorage.getItem("auth"))).data : lsType;
    to = path === "/dashboard" ? "/course/".concat(card.name, "/home") : to = path.includes("/ls") ? "/course/".concat(course.name, "/ls/").concat(lsType, "/").concat(card) : to = path.includes("/home") ? card.includes("1") ? "/course/".concat(course.name) : "/course/".concat(course.name, "/ls/").concat(lsType) : to = "/course/".concat(course.name, "/").concat(card);
    props.history.push(to);
  });

  return function handleRoute(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

function Home(props) {
  var classes = useStyles();
  var path = props.history.location.pathname + "";
  var chapters = ["Chapter-1", "Chapter-2"];
  var lsType = props.match.params.ls_type;
  var cards = path.startsWith("/dashboard") ? _Data_courses__WEBPACK_IMPORTED_MODULE_3__["default"] // its dhashboard
  : path.includes("/home") ? chapters // Its Course Home that includes Chapters
  : path.includes("/ls") ? _Shared_Data_learningStyles__WEBPACK_IMPORTED_MODULE_4__["default"].find(style => lsType === style.type).contents // Its the LS Predicted Course Chapter Home
  : ["Overview", "Definitons", "Activity", "Content", "Visual", "Summary"]; // Its the default Course Chapter Home

  var course = path === "/dashboard" ? "valid" : _Data_courses__WEBPACK_IMPORTED_MODULE_3__["default"].find(course => props.match.params.course === course.name);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, course ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], null, path === "/dashboard" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.title
  }, "Dashboard") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.title
  }, course.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    edge: "start",
    className: classes.HomeButton,
    color: "inherit",
    "aria-label": "home",
    onClick: e => {
      e.preventDefault();
      props.history.push("/dashboard");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "body1"
  }, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    edge: "start",
    color: "inherit",
    "aria-label": "home",
    onClick: e => {
      e.preventDefault();
      sessionStorage.clear();
      props.history.push("/");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "body1"
  }, "Log Out"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.heroContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h1",
    variant: "h2",
    align: "center",
    color: "textPrimary",
    gutterBottom: true
  }, path === "/dashboard" ? "Welcome to your Dashboard !" : "Welcome to ".concat(course.name, "!")), path === "/dashboard" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    paragraph: true
  }, "You can find your subscribed courses below.") : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    align: "center",
    color: "textSecondary",
    paragraph: true
  }, "Happy Learning"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: classes.cardGrid,
    maxWidth: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2
  }, cards.map((card, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    key: card,
    xs: 12,
    sm: 6,
    md: path.includes("/ls") || path.includes("/home") ? 6 : 4
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: e => {
      handleRoute(props, card, course, lsType);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.cardMedia,
    image: path === "/dashboard" ? card.image : course.image,
    title: path === "/dashboard" ? card.name : "".concat(course.name, " ").concat(card)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    className: classes.cardContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, path === "/dashboard" ? card.name : card), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, path === "/dashboard" ? card.desc : course.desc))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: classes.footer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    align: "center",
    gutterBottom: true
  }, "\u201CStudy hard what interests you the most in the most undisciplined, irreverent and original manner possible.\u201D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle1",
    align: "center",
    color: "textSecondary",
    component: "p"
  }, "Richard P. Feynman"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " 404 Error "));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LS/LS.js":
/*!*************************************************!*\
  !*** ./React/Shared/Components/Course/LS/LS.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");



var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
function LS(props) {
  var classes = useStyles();
  var lsTypeParam = props.match.params.ls_type + "";
  var ls = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(ls => lsTypeParam === ls.type);
  var [hide, setHide] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
    position: "relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6",
    color: "inherit",
    noWrap: true
  }, "Learning Styles"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    className: classes.cardContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "body2",
    color: "secondary"
  }, "Hello there, to improve your ease of study, we use FLSM mapping techiques to asses your learning style and will give study materials according to that.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h4"
  }, ls.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "body1"
  }, ls.type.charAt(0) === "a" ? "You like activites rathar than boring theories" : "You learn from what you study")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "body1"
  }, ls.type.charAt(1) === "s" ? "You think before approching a problem" : "You give preference to you intuitions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "body1"
  }, ls.type.charAt(2) === "v" ? "You like graphical stuff and illustrations" : "You are good with reading ( verbal )")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "body1"
  }, ls.type.charAt(0) === "s" ? "You study sequencially (step by step)" : "You prefer global view about the things")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "body1"
  }, "In the upcomming chapters you will get the learning materials that matches your interests. Happly Learning !"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      props.history.push("/course/" + props.match.params.course + "/ls/" + ls.type);
    }
  }, "Proceed !"))))));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/AcivityVerbal.js":
/*!*********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/AcivityVerbal.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OverviewVerbal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function OverviewVerbal(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body1"
  }, "1) Primitive data types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body1"
  }, "2) Non - Primitive data types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, "Primitive data types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "In Java, we have eight primitive data types: boolean, char, byte, short, int, long, float and double. Java developers included these data types to maintain the portability of java as the size of these primitive data types do not change from one operating system to another.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "This can hold whole number between -128 and 127.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Short")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "This is greater than byte in terms of size and less than integer. Its range is -32,768 to 32767. Default size of this data type: 2 byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Long")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Used when int is not large enough to hold the value, it has wider range than int data type, ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. size: 8 bytes Default value: 0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Double")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Sufficient for holding 15 decimal digits size: 8 bytes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Float")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Sufficient for holding 6 to 7 decimal digits size: 4 bytes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Boolean")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "holds either true of false.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3"
  }, "Non - Primitive data types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "String")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Arrays")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Classes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Interface"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next"));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/ActivityVisual.js":
/*!**********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/ActivityVisual.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SummaryVisual; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function SummaryVisual(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    width: "720",
    height: "480",
    src: "https://www.youtube.com/embed/vhV97hyV0fc",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Java Data Types"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "We Summaries The Java Variabled In The Above Video")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/ContentVerbalDetailed.js":
/*!*****************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/ContentVerbalDetailed.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentVerbalDetailed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function ContentVerbalDetailed(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "There are majorly two types of languages.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "1 . First one is Statically typed language where each variable and expression type is already known at compile time. Once a variable is declared to be of a certain data type, it cannot hold values of other data types. Example: C, C++, Java.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "2 . The other is Dynamically typed languages. These languages can receive different data types over time. Example: Ruby, Python")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Java is statically typed and also a strongly typed language because in Java, each type of data (such as integer, character, hexadecimal, packed decimal, and so forth) is predefined as part of the programming language and all constants or variables defined for a given program must be described with one of the data types.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Java has two categories of data:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Primitive Data Type: such as boolean, char, int, short, byte, long, float and double")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Non-Primitive Data Type or Object Data type: such as String, Array, etc.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Primitive Data Type")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Primitive data are only single values and have no special capabilities.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "There are 8 primitive data types:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "1.boolean : boolean data type represents only one bit of information either true or false, but the size of boolean data type is virtual machine-dependent. Values of type boolean are not converted implicitly or explicitly (with casts) to any other type. But the programmer can easily write conversion code.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Syntax :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "boolean booleanVar;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Size :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "Virtual Machine dependent"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Values :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "true, false"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Default Value :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "false"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "2.byte : The byte data type is an 8-bit signed two\u2019s complement integer. The byte data type is useful for saving memory in large arrays.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Syntax :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "byte byteVar;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Size :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "1 byte ( 8 bits )"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Values :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "-128 to 127"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Default Value :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "3.short : The short data type is a 16-bit signed two\u2019s complement integer. Similar to byte, use a short to save memory in large arrays, in situations where the memory savings actually matters.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Syntax :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "short shortVar;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Size :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "2 byte ( 16 bits )"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Values :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "-32, 768 to 32, 767 (inclusive)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Default Value :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "4.int : It is a 32-bit signed two\u2019s complement integer.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Syntax :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "int intVar;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Size :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "4 byte ( 32 bits )"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Values :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "-2, 147, 483, 648 to 2, 147, 483, 647 (inclusive)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Default Value :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "5.long : The long data type is a 64-bit two\u2019s complement integer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Syntax :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "long longVar;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Size :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "8 byte ( 64 bits )"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Values :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "-9, 223, 372, 036, 854, 775, 808 to 9, 223, 372, 036, 854, 775, 807 (inclusive)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Default Value :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "6.float : The float data type is a single-precision 32-bit IEEE 754 floating point. Use a float (instead of double) if you need to save memory in large arrays of floating point numbers.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Syntax :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "float floatVar;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Size :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "4 byte ( 32 bits )"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Values :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "upto 7 decimal digits"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Default Value :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "0.0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "7.double : The double data type is a double-precision 64-bit IEEE 754 floating point. For decimal values, this data type is generally the default choice.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Syntax :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "double doubleVar;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Size :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "8 byte ( 64 bits )"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Values :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "upto 16 decimal digits"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Default Value :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "0.0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "8.char : The char data type is a single 16-bit Unicode character.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Syntax :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "char charVar;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Size :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "2 byte ( 16 bits )"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Values :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "'\\u0000' (0) to '\\uffff' (65535)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Default Value :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "'\\u0000'"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Non-Primitive Data Type or Reference Data Types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "The Reference Data Types will contain a memory address of variable value because the reference types won\u2019t store the variable value directly in memory. They are strings, objects, arrays, etc.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "String : Strings are defined as an array of characters. The difference between a character array and a string is the string is terminated with a special character \u2018\\0\u2019. Below is the basic syntax for declaring a string in Java programming language.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Syntax :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "<String_Type> <string_variable> = \u201C<sequence_of_string>\u201D;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Class: A class is a user-defined blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type. In general, class declarations can include these components, in order:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "1. Modifiers : A class can be public or has default access (Refer this for details).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "2. Class name: The name should begin with a initial letter (capitalized by convention).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "3. Superclass(if any): The name of the class\u2019s parent (superclass), if any, preceded by the keyword extends. A class can only extend (subclass) one parent.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "4. Interfaces(if any): A comma-separated list of interfaces implemented by the class, if any, preceded by the keyword implements. A class can implement more than one interface.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "5. Body: The class body surrounded by braces, ", ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Object: It is a basic unit of Object-Oriented Programming and represents the real-life entities. A typical Java program creates many objects, which as you know, interact by invoking methods. An object consists of :")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "1. State : It is represented by attributes of an object. It also reflects the properties of an object.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "2. Behavior : It is represented by methods of an object. It also reflects the response of an object with other objects.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "3. Identity : It gives a unique name to an object and enables one object to interact with other objects.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Interface: Like a class, an interface can have methods and variables, but the methods declared in an interface are by default abstract (only method signature, no body).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "1. Interfaces specify what a class must do and not how. It is the blueprint of the class.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "2. An Interface is about capabilities like a Player may be an interface and any class implementing Player must be able to (or must implement) move(). So it specifies a set of methods that the class has to implement.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "3. If a class implements an interface and does not provide method bodies for all functions specified in the interface, then class must be declared abstract.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "4. A Java library example is, Comparator Interface. If a class implements this interface, then it can be used to sort a collection.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Array: An array is a group of like-typed variables that are referred to by a common name.Arrays in Java work differently than they do in C/C++. Following are some important point about Java arrays.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "1. In Java all arrays are dynamically allocated.(discussed below)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "2. Since arrays are objects in Java, we can find their length using member length. This is different from C/C++ where we find length using sizeof.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "3. A Java array variable can also be declared like other variables with [] after the data type.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "4. The variables in the array are ordered and each have an index beginning from 0.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "5. A Java library example is, Comparator Interface. If a class implements this interface, then it can be used to sort a collection.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "6. Java array can be also be used as a static field, a local variable or a method parameter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "7. The size of an array must be specified by an int value and not long or short.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "8. The direct superclass of an array type is Object.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2"
  }, "9. Every array type implements the interfaces Cloneable and java.io.Serializable."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next"));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/ContentVerbalOverview.js":
/*!*****************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/ContentVerbalOverview.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentVerbalOverview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function ContentVerbalOverview(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body1"
  }, "1) Primitive data types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body1"
  }, "2) Non - Primitive data types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, "Primitive data types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "In Java, we have eight primitive data types: boolean, char, byte, short, int, long, float and double. Java developers included these data types to maintain the portability of java as the size of these primitive data types do not change from one operating system to another.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "This can hold whole number between -128 and 127. Mostly used to save memory and when you are certain that the numbers would be in the limit specified by byte data type. Default size of this data type: 1 byte. Default value: 0 another.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "byte num; num = 113;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Short")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "This is greater than byte in terms of size and less than integer. Its range is -32,768 to 32767. Default size of this data type: 2 byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, " short num; num = 150;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Long")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Used when int is not large enough to hold the value, it has wider range than int data type, ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. size: 8 bytes Default value: 0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, " long num = -12332252626L;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Double")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Sufficient for holding 15 decimal digits size: 8 bytes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "double num = -42937737.9d;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Float")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Sufficient for holding 6 to 7 decimal digits size: 4 bytes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "float num = 19.98f;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Boolean")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "holds either true of false.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", null, "float num = 19.98f;"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, "Non - Primitive data types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "String")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "String is a sequence of characters")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Arrays")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Arrays in Java are homogeneous data structures implemented in Java as objects.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Classes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "A class in Java is a blueprint which includes all your data")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Interface")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Like a class, an interface can have methods and variables, but the methods declared in interface are by default abstract (only method signature, no body)."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next"));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/ContentVisualDetailed.js":
/*!*****************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/ContentVisualDetailed.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentVisualDetailed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function ContentVisualDetailed(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    width: "720",
    height: "480",
    src: "https://www.youtube.com/embed/bqPIWlnjWbA",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Java Data Types"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "Java Data Types are explained in the above video")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/ContentVisualOverview.js":
/*!*****************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/ContentVisualOverview.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentVisualDetailed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function ContentVisualDetailed(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    width: "720",
    height: "480",
    src: "https://www.youtube.com/embed/snIUtdg0K30",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Java Data Types"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "The Overview of Java Data Types are given in the above video")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/DefinitionVerbalDetailed.js":
/*!********************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/DefinitionVerbalDetailed.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefinitionVerbalDetailed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
/* harmony import */ var _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIosRounded */ "@material-ui/icons/ArrowForwardIosRounded");
/* harmony import */ var _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRightOutlined */ "@material-ui/icons/KeyboardArrowRightOutlined");
/* harmony import */ var _material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    console.log("Vijay");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function DefinitionVerbalDetailed(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, " Primitive Data Types ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, " ", "There are eight primitive datatypes supported by Java. Primitive datatypes are predefined by the language and named by a keyword. Let us now look into the eight primitive data types in detail.", " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Byte data type is an 8-bit signed two's complement integer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Minimum value is -128 (-2^7)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Maximum value is 127 (inclusive)(2^7 -1)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "short")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Short data type is a 16-bit signed two's complement integer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Minimum value is -32,768 (-2^15)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Maximum value is 32,767 (inclusive) (2^15 -1)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "int")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Int data type is a 32-bit signed two's complement integer.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Minimum value is - 2,147,483,648 (-2^31)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Maximum value is 2,147,483,647(inclusive) (2^31 -1)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "float")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Float data type is a single-precision 32-bit IEEE 754 floating point")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Float is mainly used to save memory in large arrays of floating point numbers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "double")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "double data type is a double-precision 64-bit IEEE 754 floating point")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "This data type is generally used as the default data type for decimal values, generally the default choice")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Float data type is never used for precise values such as currency")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "double")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "double data type is a double-precision 64-bit IEEE 754 floating point")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "This data type is generally used as the default data type for decimal values, generally the default choice")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Double data type should never be used for precise values such as currency")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "boolean")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "boolean data type represents one bit of information")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "There are only two possible values: true and false")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "This data type is used for simple flags that track true/false conditions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "char")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "char data type is a single 16-bit Unicode character")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, " Reference Datatypes ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Reference variables are created using defined constructors of the classes. They are used to access objects. These variables are declared to be of a specific type that cannot be changed. For example, Employee, Puppy, etc.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Class objects and various type of array variables come under reference datatype.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Default value of any reference variable is null.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "A reference variable can be used to refer any object of the declared type or any compatible type.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Example: Animal animal = new Animal(\"giraffe\");"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next"));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/DefinitionVerbalOverview.js":
/*!********************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/DefinitionVerbalOverview.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefinitionVerbalOverview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
/* harmony import */ var _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIosRounded */ "@material-ui/icons/ArrowForwardIosRounded");
/* harmony import */ var _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRightOutlined */ "@material-ui/icons/KeyboardArrowRightOutlined");
/* harmony import */ var _material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    console.log("Vijay");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function DefinitionVerbalOverview(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, " Primitive Data Types ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, " ", "There are eight primitive datatypes supported by Java. Primitive datatypes are predefined by the language and named by a keyword. Let us now look into the eight primitive data types in detail.", " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Byte data type is an 8-bit signed two's complement integer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "short")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Short data type is a 16-bit signed two's complement integer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "int")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Int data type is a 32-bit signed two's complement integer.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "float")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Float data type is a single-precision 32-bit IEEE 754 floating point")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "double")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "double data type is a double-precision 64-bit IEEE 754 floating point")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "boolean")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "boolean data type represents one bit of information")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "char")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "char data type is a single 16-bit Unicode character")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4"
  }, " Reference Datatypes ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRightOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "Reference variables are created using defined constructors of the classes. They are used to access objects. These variables are declared to be of a specific type that cannot be changed. For example, Employee, Puppy, etc."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next"));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/DefinitionVisualDetailed.js":
/*!********************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/DefinitionVisualDetailed.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefinitionVisualDetailed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  },
  root: {
    width: "100%"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function DefinitionVisualDetailed(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile" // height="250"
    ,
    image: "https://1.bp.blogspot.com/-E_tUghZLenM/XW_qJ7IEg4I/AAAAAAAAC7I/NInngU0p89gCgpn1hdlaETa1zC4QvE6_ACLcBGAs/s1600/java-data-types.png",
    title: "Variables"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Java Data Types"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "The Above Diagram Shows the classification of variables in Java"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile" // height="250"
    ,
    image: "https://1.bp.blogspot.com/-Lx36U7N4DP0/XXCP8TOCkaI/AAAAAAAAC7U/R2MJbpwF6Ao6mek4simcY4e04f0aWSYPQCLcBGAs/s1600/integer-data-types.png",
    title: "Variables"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Java Data Types"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "The Above Diagram Shows the classification of Integer datatypes in Java"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableContainer"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: classes.table,
    "aria-label": "simple table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Minimum value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Maximum value"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "byte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "One byte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "-128"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "127")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "short"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, " Two bytes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, " -32, 768"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "32, 767")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "int"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Four bytes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "-2, 147, 483, 648"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "2, 147, 483, 647")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "long"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Eight bytes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "-9, 223, 372, 036, 854, 775, 808"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "9, 223, 372, 036, 854, 775, 807")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile" // height="250"
    ,
    image: "https://1.bp.blogspot.com/-7yTep7sMX-k/XXI_z9QZnpI/AAAAAAAAC7g/F-usnpO8rpk99e7cWEGj92gZjBy69hoywCLcBGAs/s1600/floating-point-data-types.png",
    title: "Variables"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Java Data Types"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "The Above Diagram Shows the classification of floatingpoint datatypes in Java"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableContainer"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: classes.table,
    "aria-label": "simple table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Minimum value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Maximum value"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "float"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Four byte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "3.4e-038"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "3.4e+038")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "double"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, " Eight bytes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, " 1.7e-308"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "1.7e+308"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/DefinitionVisualOverview.js":
/*!********************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/DefinitionVisualOverview.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefinitionVisualOverview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  },
  root: {
    width: "100%"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function DefinitionVisualOverview(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile" // height="250"
    ,
    image: "https://static.javatpoint.com/images/java-data-types.png",
    title: "Variables"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Java Data Types"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "The Above Diagram Shows the classification of variables in Java"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableContainer"], {
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    className: classes.table,
    "aria-label": "simple table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableHead"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Data Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Default Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "Default size"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "boolean"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "false"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "1 bit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "char"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, " '\\u0000'"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, " 2 byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "byte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "1 byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "short"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "2 bit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "int"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "4 byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "long"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "0L"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "8 byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "float"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "0.0f"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "4 byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "double"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "0.0d"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TableCell"], {
    align: "centre"
  }, "8 byte"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/OverviewVerbal.js":
/*!**********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/OverviewVerbal.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OverviewVerbal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function OverviewVerbal(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "There are two data types available in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Primitive Data Types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "* byte")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "* short")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "* int")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "* long")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "* float")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "* double")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "* boolean")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "* char")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    variant: "middle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h6"
  }, "Reference/Object Data Types")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1"
  }, "* Reference variables are created using defined constructors of the classes. They are used to access objects. These variables are declared to be of a specific type that cannot be changed."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next"));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/OverviewVisual.js":
/*!**********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/OverviewVisual.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OverviewVerbal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function OverviewVerbal(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile" // height="250"
    ,
    image: "https://1.bp.blogspot.com/-E_tUghZLenM/XW_qJ7IEg4I/AAAAAAAAC7I/NInngU0p89gCgpn1hdlaETa1zC4QvE6_ACLcBGAs/s1600/java-data-types.png",
    title: "Variables"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Java Data Types"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "The Above Diagram Shows the classification of variables in Java")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/SummaryVerbal.js":
/*!*********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/SummaryVerbal.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OverviewVerbal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function OverviewVerbal(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body2"
  }, "So that was all about the non-primitive data types. Now let\u2019s understand the difference between primitive and non-primitive data types.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "h4"
  }, "The difference between primitive and non-primitive data types are as follows:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body2"
  }, "Primitive types are predefined in Java.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body2"
  }, "Non-primitive types are created by the programmer and is not defined by Java.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body2"
  }, "Non-primitive types are created by the programmer and is not defined by Java.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body2"
  }, "Non Primitive types can be used to call methods to perform certain operations, while primitive types cannot.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body2"
  }, "A primitive type always has a value, whereas non-primitive types can be null.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    varient: "body2"
  }, "A primitive type always has a value, whereas non-primitive types can be null. A primitive type starts with a lowercase letter, while non-primitive types start with an uppercase letter. The size of a primitive type depends on the data type, while non-primitive types have all the same size."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next"));
}

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/SummaryVisual.js":
/*!*********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/SummaryVisual.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SummaryVisual; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ "./React/Shared/Data/learningStyles.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Text: {
    display: "block"
  }
}));

var handleSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var category = props.match.params.category;
    var lsType = props.match.params.ls_type;
    var course = props.match.params.course;
    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__["default"].find(style => lsType === style.type).contents;
    var path = lsContents.indexOf(category) + 1 < lsContents.length ? "/course/".concat(course, "/ls/").concat(lsType, "/").concat(lsContents[lsContents.indexOf(category) + 1]) : "/course/".concat(course, "/home");
    props.history.push(path);
  });

  return function handleSubmit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function SummaryVisual(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    autoComplete: "off",
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Data Types in Java")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    component: "img",
    alt: "Contemplative Reptile" // height="250"
    ,
    image: "https://i1.wp.com/www.guffo.in/wp-content/uploads/2018/03/3.png?ssl=1",
    title: "Variables"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Java Data Types"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "The Above Diagram Shows the summary of Java Data Types")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.handleButton,
    onClick: e => {
      handleSubmit(e, props);
    }
  }, "Next")));
}

/***/ }),

/***/ "./React/Shared/Components/Course/Page.js":
/*!************************************************!*\
  !*** ./React/Shared/Components/Course/Page.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/courses */ "./React/Shared/Data/courses.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Data_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Data/categories */ "./React/Shared/Data/categories.js");




var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  handleButton: {
    margin: theme.spacing(4),
    float: "right"
  },
  link: {
    textDecoration: "none"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    margin: theme.spacing(4)
  },
  title: {
    flexGrow: 1
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9

  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
function Page(props) {
  var classes = useStyles();
  var course = _Data_courses__WEBPACK_IMPORTED_MODULE_1__["default"].find(course => props.match.params.course === course.name);
  var category = _Data_categories__WEBPACK_IMPORTED_MODULE_3__["default"].find(category => props.match.params.category === category.name);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, course ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "relative"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.title,
    color: "inherit",
    noWrap: true
  }, course.name + " " + category.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    edge: "start",
    color: "inherit",
    "aria-label": "home",
    onClick: e => {
      e.preventDefault();
      props.history.push("/course/" + course.name + "/home");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "body1"
  }, "Course Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    edge: "start",
    color: "inherit",
    "aria-label": "home",
    onClick: e => {
      e.preventDefault();
      sessionStorage.clear();
      props.history.push("/");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "body1"
  }, "Log Out")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: classes.card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    className: classes.cardContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, category.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(category.component, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, " 404 Error "));
}

/***/ }),

/***/ "./React/Shared/Components/Login.js":
/*!******************************************!*\
  !*** ./React/Shared/Components/Login.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "@material-ui/icons/LockOutlined");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Signup */ "./React/Shared/Components/Signup.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








function Copyright() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright © ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    className: classes.link
  }, "Chill Studies"), " ", new Date().getFullYear(), ".");
}

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  root: {
    height: "100vh"
  },
  link: {
    textDecoration: "none",
    marginTop: "5px%"
  },
  image: {
    backgroundImage: "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.type === "dark" ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function handleClick(_x, _x2) {
  return _handleClick.apply(this, arguments);
}

function _handleClick() {
  _handleClick = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    try {
      var res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://127.0.0.1:8000/api/v1/student/login", {
        studentId: email,
        password: password
      });

      if (res.status === 201) {
        sessionStorage.setItem("auth", res.data.data.student._id);
        props.history.push("/dashboard");
      } else {
        alert("Pls Enter Valid Details");
      }
    } catch (err) {
      alert(err);
    }
  });
  return _handleClick.apply(this, arguments);
}

function Login(props) {
  var classes = useStyles();
  var [signIn, setSingIn] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);

  var handleSignup = () => {
    signIn ? setSingIn(false) : setSingIn(true);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    component: "main",
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: false,
    sm: 4,
    md: 7,
    className: classes.image
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    md: 5,
    component: _material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"]
  }, signIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    component: "main",
    maxWidth: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
    className: classes.avatar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_1___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    component: "h1",
    variant: "h5"
  }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.form,
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: e => {
      handleClick(e, props);
    }
  }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    fullWidth: true,
    variant: "outlined",
    color: "primary",
    className: classes.submit,
    onClick: e => {
      e.preventDefault();
      handleSignup();
    }
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    mt: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleSignup: handleSignup
  })));
}

/***/ }),

/***/ "./React/Shared/Components/Signup.js":
/*!*******************************************!*\
  !*** ./React/Shared/Components/Signup.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "@material-ui/icons/LockOutlined");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








function Copyright() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright © ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    color: "inherit"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/",
    className: classes.link
  }, "Chill Studies")), " ", new Date().getFullYear(), ".");
}

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function handleClick(_x, _x2) {
  return _handleClick.apply(this, arguments);
}

function _handleClick() {
  _handleClick = _asyncToGenerator(function* (e, props) {
    e.preventDefault();
    var name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        password = document.getElementById("password").value,
        confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      alert("Provide Valid Informations");
    } else {
      var data = {
        name: name,
        studentId: email,
        password: password,
        passwordConfrim: confirmPassword
      };

      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("http://127.0.0.1:8000/api/v1/student/signup", data);

        if (res.status === 201) {
          alert("You Successfully Signed Up !!! \n Now Sign In To Continue");
        }
      } catch (err) {
        alert(err);
        console.log(err);
      }

      props.handleSignup();
    }
  });
  return _handleClick.apply(this, arguments);
}

function SignUp(props) {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "main",
    maxWidth: "xs"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    className: classes.avatar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_1___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "h1",
    variant: "h5"
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.form,
    noValidate: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "name",
    label: "Name",
    name: "name",
    autoComplete: "name",
    autoFocus: true,
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    id: "confirmPassword",
    autoComplete: "current-password"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    onClick: e => handleClick(e, props)
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    fullWidth: true,
    variant: "outlined",
    color: "primary",
    className: classes.submit,
    onClick: e => {
      props.handleSignup();
    }
  }, "Sign In"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null)));
}

/***/ }),

/***/ "./React/Shared/Components/theme.js":
/*!******************************************!*\
  !*** ./React/Shared/Components/theme.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);

 // Create a theme instance.

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: "#fff"
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./React/Shared/Data/categories.js":
/*!*****************************************!*\
  !*** ./React/Shared/Data/categories.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Course_GeneralMaterials_Activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Activity */ "./React/Shared/Components/Course/GeneralMaterials/Activity.js");
/* harmony import */ var _Components_Course_GeneralMaterials_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Content */ "./React/Shared/Components/Course/GeneralMaterials/Content.js");
/* harmony import */ var _Components_Course_GeneralMaterials_Definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Definitions */ "./React/Shared/Components/Course/GeneralMaterials/Definitions.js");
/* harmony import */ var _Components_Course_GeneralMaterials_Summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Summary */ "./React/Shared/Components/Course/GeneralMaterials/Summary.js");
/* harmony import */ var _Components_Course_GeneralMaterials_Visual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Visual */ "./React/Shared/Components/Course/GeneralMaterials/Visual.js");
/* harmony import */ var _Components_Course_GeneralMaterials_Overview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Overview */ "./React/Shared/Components/Course/GeneralMaterials/Overview.js");
/* harmony import */ var _Components_Course_LSMaterials_ActivityVisual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Course/LSMaterials/ActivityVisual */ "./React/Shared/Components/Course/LSMaterials/ActivityVisual.js");
/* harmony import */ var _Components_Course_LSMaterials_AcivityVerbal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Course/LSMaterials/AcivityVerbal */ "./React/Shared/Components/Course/LSMaterials/AcivityVerbal.js");
/* harmony import */ var _Components_Course_LSMaterials_ContentVerbalOverview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Course/LSMaterials/ContentVerbalOverview */ "./React/Shared/Components/Course/LSMaterials/ContentVerbalOverview.js");
/* harmony import */ var _Components_Course_LSMaterials_ContentVerbalDetailed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Course/LSMaterials/ContentVerbalDetailed */ "./React/Shared/Components/Course/LSMaterials/ContentVerbalDetailed.js");
/* harmony import */ var _Components_Course_LSMaterials_ContentVisualDetailed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Course/LSMaterials/ContentVisualDetailed */ "./React/Shared/Components/Course/LSMaterials/ContentVisualDetailed.js");
/* harmony import */ var _Components_Course_LSMaterials_ContentVisualOverview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Course/LSMaterials/ContentVisualOverview */ "./React/Shared/Components/Course/LSMaterials/ContentVisualOverview.js");
/* harmony import */ var _Components_Course_LSMaterials_DefinitionVerbalDetailed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/Course/LSMaterials/DefinitionVerbalDetailed */ "./React/Shared/Components/Course/LSMaterials/DefinitionVerbalDetailed.js");
/* harmony import */ var _Components_Course_LSMaterials_DefinitionVerbalOverview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/Course/LSMaterials/DefinitionVerbalOverview */ "./React/Shared/Components/Course/LSMaterials/DefinitionVerbalOverview.js");
/* harmony import */ var _Components_Course_LSMaterials_DefinitionVisualOverview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/Course/LSMaterials/DefinitionVisualOverview */ "./React/Shared/Components/Course/LSMaterials/DefinitionVisualOverview.js");
/* harmony import */ var _Components_Course_LSMaterials_DefinitionVisualDetailed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Components/Course/LSMaterials/DefinitionVisualDetailed */ "./React/Shared/Components/Course/LSMaterials/DefinitionVisualDetailed.js");
/* harmony import */ var _Components_Course_LSMaterials_OverviewVerbal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/Course/LSMaterials/OverviewVerbal */ "./React/Shared/Components/Course/LSMaterials/OverviewVerbal.js");
/* harmony import */ var _Components_Course_LSMaterials_OverviewVisual__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Components/Course/LSMaterials/OverviewVisual */ "./React/Shared/Components/Course/LSMaterials/OverviewVisual.js");
/* harmony import */ var _Components_Course_LSMaterials_SummaryVerbal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Components/Course/LSMaterials/SummaryVerbal */ "./React/Shared/Components/Course/LSMaterials/SummaryVerbal.js");
/* harmony import */ var _Components_Course_LSMaterials_SummaryVisual__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Components/Course/LSMaterials/SummaryVisual */ "./React/Shared/Components/Course/LSMaterials/SummaryVisual.js");




















var categories = [{
  name: "Activity",
  component: _Components_Course_GeneralMaterials_Activity__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  name: "Content",
  component: _Components_Course_GeneralMaterials_Content__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  name: "Definitons",
  component: _Components_Course_GeneralMaterials_Definitions__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  name: "Summary",
  component: _Components_Course_GeneralMaterials_Summary__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: "Visual",
  component: _Components_Course_GeneralMaterials_Visual__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: "Overview",
  component: _Components_Course_GeneralMaterials_Overview__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: "Overview-Verbal",
  component: _Components_Course_LSMaterials_OverviewVerbal__WEBPACK_IMPORTED_MODULE_16__["default"]
}, {
  name: "Overview-Visual",
  component: _Components_Course_LSMaterials_OverviewVisual__WEBPACK_IMPORTED_MODULE_17__["default"]
}, {
  name: "Summary-Visual",
  component: _Components_Course_LSMaterials_SummaryVisual__WEBPACK_IMPORTED_MODULE_19__["default"]
}, {
  name: "Summary-Verbal",
  component: _Components_Course_LSMaterials_SummaryVerbal__WEBPACK_IMPORTED_MODULE_18__["default"]
}, {
  name: "Activity-Verbal",
  component: _Components_Course_LSMaterials_AcivityVerbal__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  name: "Activity-Visual",
  component: _Components_Course_LSMaterials_ActivityVisual__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  name: "Content-Verbal-Detailed",
  component: _Components_Course_LSMaterials_ContentVerbalOverview__WEBPACK_IMPORTED_MODULE_8__["default"]
}, {
  name: "Content-Verbal-Overview",
  component: _Components_Course_LSMaterials_ContentVerbalDetailed__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  name: "Content-Visual-Detailed",
  component: _Components_Course_LSMaterials_ContentVisualDetailed__WEBPACK_IMPORTED_MODULE_10__["default"]
}, {
  name: "Content-Visual-Overview",
  component: _Components_Course_LSMaterials_ContentVisualOverview__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  name: "Definition-Verbal-Detailed",
  component: _Components_Course_LSMaterials_DefinitionVerbalDetailed__WEBPACK_IMPORTED_MODULE_12__["default"]
}, {
  name: "Definition-Verbal-Overview",
  component: _Components_Course_LSMaterials_DefinitionVerbalOverview__WEBPACK_IMPORTED_MODULE_13__["default"]
}, {
  name: "Definition-Visual-Detailed",
  component: _Components_Course_LSMaterials_DefinitionVisualDetailed__WEBPACK_IMPORTED_MODULE_15__["default"]
}, {
  name: "Definition-Visual-Overview",
  component: _Components_Course_LSMaterials_DefinitionVisualOverview__WEBPACK_IMPORTED_MODULE_14__["default"]
}, {
  name: "Summary-Verbal",
  component: _Components_Course_LSMaterials_SummaryVerbal__WEBPACK_IMPORTED_MODULE_18__["default"]
}, {
  name: "Summary-Visual",
  component: _Components_Course_LSMaterials_SummaryVisual__WEBPACK_IMPORTED_MODULE_19__["default"]
}];
/* harmony default export */ __webpack_exports__["default"] = (categories);

/***/ }),

/***/ "./React/Shared/Data/courses.js":
/*!**************************************!*\
  !*** ./React/Shared/Data/courses.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var courses = [{
  name: "Java",
  image: "https://c4.wallpaperflare.com/wallpaper/510/989/208/web-development-development-java-wallpaper-preview.jpg",
  desc: "Java Beginner Pack"
}, {
  name: "JavaScript",
  image: "https://i1.wp.com/www.nishantvaity.com/wp-content/uploads/2019/05/javascript.jpg?fit=650%2C400&ssl=1",
  desc: "JavaScript Beginner Pack"
}, {
  name: "HTML",
  image: "https://dinesh-ghimire.com.np/wp-content/uploads/2019/02/html5.png",
  desc: "HTML Beginner Pack"
}, {
  name: "CSS",
  image: "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
  desc: "CSS Beginner Pack"
}, {
  name: "ReactJs",
  image: "https://embedwistia-a.akamaihd.net/deliveries/bdfbccc31132d5f0a48bbf0caacced1e.webp?image_crop_resized=1280x800",
  desc: "ReactJs Beginner Pack"
}, {
  name: "NodeJs",
  image: "https://cdnblog.natrocdn.com/wp-content/uploads/2019/10/node-js-nedir-768x427.jpg",
  desc: "NodeJs Beginner Pack"
}];
/* harmony default export */ __webpack_exports__["default"] = (courses);

/***/ }),

/***/ "./React/Shared/Data/learningStyles.js":
/*!*********************************************!*\
  !*** ./React/Shared/Data/learningStyles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "rirs",
  name: "Reflective Intuitive Reading Sequential",
  contents: ["Overview-Verbal", "Content-Verbal-Detailed", "Summary-Verbal", "Activity-Verbal"]
}, {
  type: "rsrs",
  name: "Reflective Sensing Reading Sequential",
  contents: ["Overview-Verbal", "Definition-Verbal-Detailed", "Summary-Verbal", "Activity-Verbal"]
}, {
  type: "rivs",
  name: "Reflective Intuitive Visual Sequential",
  contents: ["Overview-Visual", "Content-Visual-Detailed", "Summary-Visual", "Activity-Visual"]
}, {
  type: "rsvs",
  name: "Reflective Sensing Visual Sequential",
  contents: ["Overview-Visual", "Content-Visual-Detailed", "Summary-Visual", "Activity-Visual"]
}, {
  type: "rirg",
  name: "Reflective Intuitive Reading Global",
  contents: ["Overview-Verbal", "Definition-Verbal-Overview", "Summary-Verbal", "Activity-Verbal"]
}, {
  type: "rsrg",
  name: "Reflective Sensing Reading Global",
  contents: ["Overview-Verbal", "Definition-Verbal-Overview", "Summary-Verbal", "Activity-Verbal"]
}, {
  type: "rivg",
  name: "Reflective  Intuitive  Visual Global",
  contents: ["Overview-Visual", "Content-Visual-Overview", "Summary-Visual", "Activity-Visual"]
}, {
  type: "rsvg",
  name: "Reflective Sensing Visual Global",
  contents: ["Overview-Visual", "Definition-Visual-Overview", "Summary-Visual", "Activity-Visual"]
}, {
  type: "asrs",
  name: "Active Sensing Reading Sequential",
  contents: ["Overview-Verbal", "Definition-Verbal-Detailed", "Activity-Verbal", "Summary-Verbal"]
}, {
  type: "airg",
  name: "Active Intuitive Reading Global",
  contents: ["Overview-Verbal", "Content-Verbal-Overview", "Activity-Verbal", "Summary-Verbal"]
}, {
  type: "airs",
  name: "Active Intuitive Reading Sequential",
  contents: ["Overview-Verbal", "Content-Verbal-Detailed", "Activity-Verbal", "Summary-Verbal"]
}, {
  type: "asrg",
  name: "Active Sensing Reading Global",
  contents: ["Overview-Verbal", "Definition-Verbal-Overview", "Activity-Verbal", "Summary-Verbal"]
}, {
  type: "aivg",
  name: "Active Intuitive Visual Global",
  contents: ["Overview-Visual", "Definition-Visual-Overview", "Activity-Visual", "Summary-Visual"]
}, {
  type: "aivs",
  name: "Active Intuitive Visual Sequential",
  contents: ["Overview-Visual", "Definition-Visual-Detailed", "Activity-Visual", "Summary-Visual"]
}, {
  type: "asvg",
  name: "Active Sensing Visual Global",
  contents: ["Overview-Visual", "Content-Visual-Overview", "Activity-Visual", "Summary-Visual"]
}, {
  type: "asvs",
  name: "Active Sensing Visual Sequential",
  contents: ["Overview-Visual", "Content-Visual-Detailed", "Activity-Visual", "Summary-Visual"]
}]);

/***/ }),

/***/ "./React/Shared/Data/routes.js":
/*!*************************************!*\
  !*** ./React/Shared/Data/routes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Login */ "./React/Shared/Components/Login.js");
/* harmony import */ var _Components_Signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Signup */ "./React/Shared/Components/Signup.js");
/* harmony import */ var _Components_Course_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Course/Home */ "./React/Shared/Components/Course/Home.js");
/* harmony import */ var _Components_Course_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Course/Page */ "./React/Shared/Components/Course/Page.js");
/* harmony import */ var _Components_Course_LS_LS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Course/LS/LS */ "./React/Shared/Components/Course/LS/LS.js");





var routes = [{
  path: "/",
  component: _Components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true
}, {
  path: "/signup",
  component: _Components_Signup__WEBPACK_IMPORTED_MODULE_1__["default"],
  exact: true
}, {
  path: "/course/:course/ls:ls_type",
  component: _Components_Course_LS_LS__WEBPACK_IMPORTED_MODULE_4__["default"],
  exact: true
}, {
  path: "/course/:course/home",
  component: _Components_Course_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
  exact: true
}, {
  path: "/course/:course/ls/:ls_type",
  component: _Components_Course_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
  exact: true
}, {
  path: "/course/:course/ls/:ls_type/:category",
  component: _Components_Course_Page__WEBPACK_IMPORTED_MODULE_3__["default"],
  exact: true
}, {
  path: "/dashboard",
  component: _Components_Course_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
  exact: true
}, {
  path: "/course/:course",
  component: _Components_Course_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
  exact: true
}, {
  path: "/course/:course/:category",
  component: _Components_Course_Page__WEBPACK_IMPORTED_MODULE_3__["default"],
  exact: true
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _React_Server_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./React/Server/index */ "./React/Server/index.js");


var cors = __webpack_require__(/*! cors */ "cors");

var morgan = __webpack_require__(/*! morgan */ "morgan");

var globalErrorHandler = __webpack_require__(/*! ./APIs/Controllers/ErrorController */ "./APIs/Controllers/ErrorController.js");

var AppErr = __webpack_require__(/*! ./APIs/utils/appError */ "./APIs/utils/appError.js");

var studentRouter = __webpack_require__(/*! ./APIs/Routers/studentRouter */ "./APIs/Routers/studentRouter.js");


var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(morgan("dev"));
app.use(cors()); //===============Routers=====================

app.use("/api/v1/student", studentRouter);
app.use("/", _React_Server_index__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.all("*", (req, res, next) => {
  next(new AppErr("Can't find a route - BAD URL", 404));
});
app.use(globalErrorHandler);
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./knn/knn.js":
/*!********************!*\
  !*** ./knn/knn.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var KNN = __webpack_require__(/*! ml-knn */ "ml-knn");

var fs = __webpack_require__(/*! fs */ "fs");

function csvJSON(csv) {
  var lines = csv.split("\n");
  var result = [];
  var headers = lines[0].trim().split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].trim().split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  } //return result; //JavaScript object


  return JSON.parse(JSON.stringify(result)); //JSON
}

exports.getType = input => {
  var knn;
  var type;
  var csvFilePath = __dirname + "/../knn/dataset.csv"; // Data

  var names = ["ABC_%", "D_%", "C_%", "AAC_%", "A_%", "V_%", "ABC_T", "D_T", "C_T", "AAC_T", "A_T", "LS"];
  var data = [],
      X = [],
      Y = [];
  var csv = fs.readFileSync(csvFilePath, "utf-8");
  data = csvJSON(csv);
  var types = new Set();
  data.forEach(row => {
    if (row.LS === undefined) console.log(row);
    types.add(row.LS);
  });
  typesArray = [...types]; // console.log(typesArray)

  data.forEach(row => {
    var rowArray, typeNumber;
    rowArray = Object.values(row).map(key => parseFloat(key)).slice(0, 11); // typeNumber = typesArray.indexOf(row.LS);

    type = row.LS;
    X.push(rowArray);
    Y.push(type);
  });
  knn = new KNN(X, Y, {
    k: 1
  });
  type = knn.predict(input);
  return type;
};

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app.js");


var dotenv = __webpack_require__(/*! dotenv */ "dotenv");

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

dotenv.config({
  path: "./config.env"
});
var DB = process.env.DB_CON.replace("<password>", process.env.DB_PASS);
console.log(DB);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connection Done !");
}).catch(err => {
  console.log(err);
});
var port = process.env.CON_PORT;
_app__WEBPACK_IMPORTED_MODULE_0__["default"].listen(port, () => {
  console.log("Server Started at http://localhost:8000");
});

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/ArrowForwardIosRounded":
/*!************************************************************!*\
  !*** external "@material-ui/icons/ArrowForwardIosRounded" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowForwardIosRounded");

/***/ }),

/***/ "@material-ui/icons/CheckCircleSharp":
/*!******************************************************!*\
  !*** external "@material-ui/icons/CheckCircleSharp" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CheckCircleSharp");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowRightOutlined":
/*!****************************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowRightOutlined" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRightOutlined");

/***/ }),

/***/ "@material-ui/icons/LockOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LockOutlined" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LockOutlined");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "ml-knn":
/*!*************************!*\
  !*** external "ml-knn" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ml-knn");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map