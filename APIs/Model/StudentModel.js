const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const studentSchema = mongoose.Schema({
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
      validator: function(el) {
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
  },
  mlDataset: {
    data: Buffer, 
    contentType: String
    }
});

studentSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

//method to check the password from the datebase
studentSchema.methods.checkPassword = async function(
  Enteredpassword,
  DBpassword
) {
  return await bcrypt.compare(Enteredpassword, DBpassword);
};

//method for protect middleware
studentSchema.methods.changePasswordAfter = function(JWTtimestamp) {
  if (this.passwordChangeAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangeAt.getTime() / 1000,
      10
    );
    return changedTimeStamp > JWTtimestamp;
  }
};

studentSchema.methods.generateResetToken = function() {
  //1)generate Random String
  const resetToken = crypto.randomBytes(32).toString("hex");
  //2)Encrypting the random String and saveing to DB
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  //3)Setting password resetToken expire time
  this.passwordResetExpires = Date.now() + 600000; // 10 Mins
  //4)Sending non encrpted token  to user
  return resetToken;
};

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
