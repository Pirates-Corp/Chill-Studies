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

eval("module.exports = (err, req, res, next) => {\n  err.statusCode = err.statusCode || 500;\n  err.status = err.status || \"fail\";\n  res.status(err.statusCode).json({\n    status: err.status,\n    message: err.message\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUElzL0NvbnRyb2xsZXJzL0Vycm9yQ29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FQSXMvQ29udHJvbGxlcnMvRXJyb3JDb250cm9sbGVyLmpzPzZlMjgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICBlcnIuc3RhdHVzQ29kZSA9IGVyci5zdGF0dXNDb2RlIHx8IDUwMDtcbiAgZXJyLnN0YXR1cyA9IGVyci5zdGF0dXMgfHwgXCJmYWlsXCI7XG5cbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzQ29kZSkuanNvbih7XG4gICAgc3RhdHVzOiBlcnIuc3RhdHVzLFxuICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlXG4gIH0pO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./APIs/Controllers/ErrorController.js\n");

/***/ }),

/***/ "./APIs/Controllers/authController.js":
/*!********************************************!*\
  !*** ./APIs/Controllers/authController.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Student = __webpack_require__(/*! ../Model/StudentModel */ \"./APIs/Model/StudentModel.js\");\n\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar {\n  promisify\n} = __webpack_require__(/*! util */ \"util\");\n\nvar AppErr = __webpack_require__(/*! ../utils/appError */ \"./APIs/utils/appError.js\");\n\nvar catchAsync = __webpack_require__(/*! ../utils/catchErr */ \"./APIs/utils/catchErr.js\");\n\nvar sendEmail = __webpack_require__(/*! ../utils/email */ \"./APIs/utils/email.js\");\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar singleToken = id => {\n  return jwt.sign({\n    id\n  }, process.env.SEC_STR, {\n    expiresIn: process.env.TIME_DUR\n  });\n};\n\nvar createSendToken = (student, statusCode, res, str) => {\n  var token = singleToken(student._id);\n  var cookieOption = {\n    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),\n    httpOnly: true\n  };\n  if (false) {}\n  res.cookie(\"jwt\", token, cookieOption); //remove the password from the output\n\n  student.password = undefined;\n  res.status(statusCode).json({\n    status: str,\n    token,\n    data: {\n      student\n    }\n  });\n};\n\nexports.signup = catchAsync( /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (req, res) {\n    var newStudent = yield Student.create(req.body);\n    createSendToken(newStudent, 201, res, \"sign up success !!\");\n  });\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nexports.login = catchAsync( /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(function* (req, res, next) {\n    var {\n      studentId,\n      password\n    } = req.body; //1) checking the user and pass is provied or not\n\n    if (!studentId || !password) return next(new AppErr(\"Enter the Email/password\", 400)); //2) checking the pass from DB\n\n    var student = yield Student.findOne({\n      studentId\n    }).select(\"+password\");\n\n    if (!student || !(yield student.checkPassword(password, student.password))) {\n      return next(new AppErr(\"Incorrect the Email/password\", 400));\n    } //3)Issue the Token\n\n\n    createSendToken(student, 201, res, \"Login success !!\");\n  });\n\n  return function (_x3, _x4, _x5) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nexports.protect = catchAsync( /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator(function* (req, res, next) {\n    var token;\n\n    if (req.headers.authorization && req.headers.authorization.startsWith(\"Bearer\")) {\n      //console.log(req.headers.authorization, \"protect\");\n      token = req.headers.authorization.split(\" \")[1];\n    } //1) check the token\n\n\n    if (!token) {\n      return next(new AppErr(\"You must login first ..\", 403));\n    } //2)verification token\n\n\n    var decoded = yield promisify(jwt.verify)(token, process.env.SEC_STR); //3)check if the user still exist\n\n    var curStudent = yield Student.findById(decoded.id);\n\n    if (!curStudent) {\n      return next(new AppErr(\"Student have been deleted\", 404));\n    } //4)Check if the user change password after the token was issused\n\n\n    if (curStudent.changePasswordAfter(decoded.iat)) {\n      return next(new AppErr(\"Student recently changed  the password \", 400));\n    } //grant access\n\n\n    req.student = curStudent;\n    console.log(req.student);\n    next();\n  });\n\n  return function (_x6, _x7, _x8) {\n    return _ref3.apply(this, arguments);\n  };\n}());\nexports.passwordForget = catchAsync( /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator(function* (req, res, next) {\n    //1)Get student based on student ID\n    var student = yield Student.findOne({\n      studentId: req.body.studentId\n    });\n    if (!student) return next(new AppErr(\"No such student found by this ID\", 404));\n    var resetToken = student.generateResetToken();\n    console.log(resetToken); //Logs the restToken\n    //2) saveing the reset Token to DB\n\n    yield student.save({\n      validateBeforeSave: false\n    });\n    var reset = \"\".concat(req.protocol, \"://\").concat(req.get(\"host\"), \"/api/v1/student/resetPassword/\").concat(resetToken);\n    var message = \"Forget Your password ? just click the following link  to  change it \".concat(reset, \".\\nif you remember ignore it\"); //3)Mail Sending function\n\n    try {\n      yield sendEmail({\n        studentId: student.studentId,\n        subject: \"your password reset link vaild for 10 min\",\n        message\n      });\n      res.status(200).json({\n        status: \"success\",\n        message: \"token sent to email\"\n      });\n    } catch (err) {\n      student.passwordResetToken = undefined;\n      student.passwordResetExpires = undefined;\n      yield student.save({\n        validateBeforeSave: false\n      });\n      return next(new AppErr(\"there was a error in mail\", 500));\n    }\n  });\n\n  return function (_x9, _x10, _x11) {\n    return _ref4.apply(this, arguments);\n  };\n}());\nexports.resetPassword = catchAsync( /*#__PURE__*/function () {\n  var _ref5 = _asyncToGenerator(function* (req, res, next) {\n    //1) encrypting the token\n    var hashedToken = crypto.createHash(\"sha256\").update(req.params.token).digest(\"hex\"); //2)finding the user relavent to the token\n\n    var student = yield Student.findOne({\n      passwordResetToken: hashedToken,\n      passwordResetExpires: {\n        $gt: Date.now()\n      }\n    }); //3) if token expired or user not found.\n\n    if (!student) {\n      return next(new AppErr(\"Token is invalid or expired\", 400));\n    } //4)update change at property for the user\n\n\n    console.log(req.body.password, req.body.passwordConfirm);\n    student.password = req.body.password;\n    student.passwordConfirm = req.body.passwordConfirm;\n    student.passwordResetExpires = undefined;\n    student.passwordResetToken = undefined;\n    student.passwordChangeAt = Date.now() - 1000;\n    yield student.save(); //5) log the student in ..\n\n    createSendToken(student, 200, res, \"Login success !!\");\n  });\n\n  return function (_x12, _x13, _x14) {\n    return _ref5.apply(this, arguments);\n  };\n}());\nexports.updatePassword = catchAsync( /*#__PURE__*/function () {\n  var _ref6 = _asyncToGenerator(function* (req, res, next) {\n    //1) Get the user from the collection\n    var student = yield Student.findById(req.student._id).select(\"+password\");\n    console.log(req.body.password, student.password); //2)Check if posted current password is correct\n\n    if (!(yield student.checkPassword(req.body.passwordCurrent, student.password))) {\n      return next(new AppErr(\"Your Current password is wrong\", 401));\n    } //3)if so, update password\n\n\n    student.password = req.body.password;\n    student.passwordConfrim = req.body.passwordConfrim;\n    console.log(\"sas\");\n    yield student.save();\n    createSendToken(student, 200, res, \"Password updated !!\");\n  });\n\n  return function (_x15, _x16, _x17) {\n    return _ref6.apply(this, arguments);\n  };\n}());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUElzL0NvbnRyb2xsZXJzL2F1dGhDb250cm9sbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQVBJcy9Db250cm9sbGVycy9hdXRoQ29udHJvbGxlci5qcz9iOGM4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN0dWRlbnQgPSByZXF1aXJlKFwiLi4vTW9kZWwvU3R1ZGVudE1vZGVsXCIpO1xuY29uc3Qgand0ID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKFwidXRpbFwiKTtcbmNvbnN0IEFwcEVyciA9IHJlcXVpcmUoXCIuLi91dGlscy9hcHBFcnJvclwiKTtcbmNvbnN0IGNhdGNoQXN5bmMgPSByZXF1aXJlKFwiLi4vdXRpbHMvY2F0Y2hFcnJcIik7XG5jb25zdCBzZW5kRW1haWwgPSByZXF1aXJlKFwiLi4vdXRpbHMvZW1haWxcIik7XG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5jb25zdCBzaW5nbGVUb2tlbiA9IGlkID0+IHtcbiAgcmV0dXJuIGp3dC5zaWduKHsgaWQgfSwgcHJvY2Vzcy5lbnYuU0VDX1NUUiwge1xuICAgIGV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuVElNRV9EVVJcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVTZW5kVG9rZW4gPSAoc3R1ZGVudCwgc3RhdHVzQ29kZSwgcmVzLCBzdHIpID0+IHtcbiAgY29uc3QgdG9rZW4gPSBzaW5nbGVUb2tlbihzdHVkZW50Ll9pZCk7XG4gIGNvbnN0IGNvb2tpZU9wdGlvbiA9IHtcbiAgICBleHBpcmVzOiBuZXcgRGF0ZShcbiAgICAgIERhdGUubm93KCkgKyBwcm9jZXNzLmVudi5KV1RfQ09PS0lFX0VYUElSRVNfSU4gKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgKSxcblxuICAgIGh0dHBPbmx5OiB0cnVlXG4gIH07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikgY29va2llT3B0aW9uLnNlY3VyZSA9IHRydWU7XG5cbiAgcmVzLmNvb2tpZShcImp3dFwiLCB0b2tlbiwgY29va2llT3B0aW9uKTtcblxuICAvL3JlbW92ZSB0aGUgcGFzc3dvcmQgZnJvbSB0aGUgb3V0cHV0XG4gIHN0dWRlbnQucGFzc3dvcmQgPSB1bmRlZmluZWQ7XG5cbiAgcmVzLnN0YXR1cyhzdGF0dXNDb2RlKS5qc29uKHtcbiAgICBzdGF0dXM6IHN0cixcbiAgICB0b2tlbixcbiAgICBkYXRhOiB7XG4gICAgICBzdHVkZW50XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydHMuc2lnbnVwID0gY2F0Y2hBc3luYyhhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgbmV3U3R1ZGVudCA9IGF3YWl0IFN0dWRlbnQuY3JlYXRlKHJlcS5ib2R5KTtcblxuICBjcmVhdGVTZW5kVG9rZW4obmV3U3R1ZGVudCwgMjAxLCByZXMsIFwic2lnbiB1cCBzdWNjZXNzICEhXCIpO1xufSk7XG5cbmV4cG9ydHMubG9naW4gPSBjYXRjaEFzeW5jKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCB7IHN0dWRlbnRJZCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuXG4gIC8vMSkgY2hlY2tpbmcgdGhlIHVzZXIgYW5kIHBhc3MgaXMgcHJvdmllZCBvciBub3RcbiAgaWYgKCFzdHVkZW50SWQgfHwgIXBhc3N3b3JkKVxuICAgIHJldHVybiBuZXh0KG5ldyBBcHBFcnIoXCJFbnRlciB0aGUgRW1haWwvcGFzc3dvcmRcIiwgNDAwKSk7XG4gIC8vMikgY2hlY2tpbmcgdGhlIHBhc3MgZnJvbSBEQlxuICBjb25zdCBzdHVkZW50ID0gYXdhaXQgU3R1ZGVudC5maW5kT25lKHsgc3R1ZGVudElkIH0pLnNlbGVjdChcIitwYXNzd29yZFwiKTtcblxuICBpZiAoIXN0dWRlbnQgfHwgIShhd2FpdCBzdHVkZW50LmNoZWNrUGFzc3dvcmQocGFzc3dvcmQsIHN0dWRlbnQucGFzc3dvcmQpKSkge1xuICAgIHJldHVybiBuZXh0KG5ldyBBcHBFcnIoXCJJbmNvcnJlY3QgdGhlIEVtYWlsL3Bhc3N3b3JkXCIsIDQwMCkpO1xuICB9XG5cbiAgLy8zKUlzc3VlIHRoZSBUb2tlblxuICBjcmVhdGVTZW5kVG9rZW4oc3R1ZGVudCwgMjAxLCByZXMsIFwiTG9naW4gc3VjY2VzcyAhIVwiKTtcbn0pO1xuXG5leHBvcnRzLnByb3RlY3QgPSBjYXRjaEFzeW5jKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBsZXQgdG9rZW47XG5cbiAgaWYgKFxuICAgIHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gJiZcbiAgICByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnN0YXJ0c1dpdGgoXCJCZWFyZXJcIilcbiAgKSB7XG4gICAgLy9jb25zb2xlLmxvZyhyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLCBcInByb3RlY3RcIik7XG4gICAgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIC8vMSkgY2hlY2sgdGhlIHRva2VuXG4gIGlmICghdG9rZW4pIHtcbiAgICByZXR1cm4gbmV4dChuZXcgQXBwRXJyKFwiWW91IG11c3QgbG9naW4gZmlyc3QgLi5cIiwgNDAzKSk7XG4gIH1cblxuICAvLzIpdmVyaWZpY2F0aW9uIHRva2VuXG4gIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBwcm9taXNpZnkoand0LnZlcmlmeSkodG9rZW4sIHByb2Nlc3MuZW52LlNFQ19TVFIpO1xuXG4gIC8vMyljaGVjayBpZiB0aGUgdXNlciBzdGlsbCBleGlzdFxuICBjb25zdCBjdXJTdHVkZW50ID0gYXdhaXQgU3R1ZGVudC5maW5kQnlJZChkZWNvZGVkLmlkKTtcblxuICBpZiAoIWN1clN0dWRlbnQpIHtcbiAgICByZXR1cm4gbmV4dChuZXcgQXBwRXJyKFwiU3R1ZGVudCBoYXZlIGJlZW4gZGVsZXRlZFwiLCA0MDQpKTtcbiAgfVxuXG4gIC8vNClDaGVjayBpZiB0aGUgdXNlciBjaGFuZ2UgcGFzc3dvcmQgYWZ0ZXIgdGhlIHRva2VuIHdhcyBpc3N1c2VkXG4gIGlmIChjdXJTdHVkZW50LmNoYW5nZVBhc3N3b3JkQWZ0ZXIoZGVjb2RlZC5pYXQpKSB7XG4gICAgcmV0dXJuIG5leHQobmV3IEFwcEVycihcIlN0dWRlbnQgcmVjZW50bHkgY2hhbmdlZCAgdGhlIHBhc3N3b3JkIFwiLCA0MDApKTtcbiAgfVxuXG4gIC8vZ3JhbnQgYWNjZXNzXG4gIHJlcS5zdHVkZW50ID0gY3VyU3R1ZGVudDtcbiAgY29uc29sZS5sb2cocmVxLnN0dWRlbnQpO1xuICBuZXh0KCk7XG59KTtcblxuZXhwb3J0cy5wYXNzd29yZEZvcmdldCA9IGNhdGNoQXN5bmMoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIC8vMSlHZXQgc3R1ZGVudCBiYXNlZCBvbiBzdHVkZW50IElEXG4gIGNvbnN0IHN0dWRlbnQgPSBhd2FpdCBTdHVkZW50LmZpbmRPbmUoeyBzdHVkZW50SWQ6IHJlcS5ib2R5LnN0dWRlbnRJZCB9KTtcblxuICBpZiAoIXN0dWRlbnQpXG4gICAgcmV0dXJuIG5leHQobmV3IEFwcEVycihcIk5vIHN1Y2ggc3R1ZGVudCBmb3VuZCBieSB0aGlzIElEXCIsIDQwNCkpO1xuXG4gIGNvbnN0IHJlc2V0VG9rZW4gPSBzdHVkZW50LmdlbmVyYXRlUmVzZXRUb2tlbigpO1xuICBjb25zb2xlLmxvZyhyZXNldFRva2VuKTsgLy9Mb2dzIHRoZSByZXN0VG9rZW5cbiAgLy8yKSBzYXZlaW5nIHRoZSByZXNldCBUb2tlbiB0byBEQlxuICBhd2FpdCBzdHVkZW50LnNhdmUoeyB2YWxpZGF0ZUJlZm9yZVNhdmU6IGZhbHNlIH0pO1xuXG4gIGNvbnN0IHJlc2V0ID0gYCR7cmVxLnByb3RvY29sfTovLyR7cmVxLmdldChcbiAgICBcImhvc3RcIlxuICApfS9hcGkvdjEvc3R1ZGVudC9yZXNldFBhc3N3b3JkLyR7cmVzZXRUb2tlbn1gO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBgRm9yZ2V0IFlvdXIgcGFzc3dvcmQgPyBqdXN0IGNsaWNrIHRoZSBmb2xsb3dpbmcgbGluayAgdG8gIGNoYW5nZSBpdCAke3Jlc2V0fS5cXG5pZiB5b3UgcmVtZW1iZXIgaWdub3JlIGl0YDtcblxuICAvLzMpTWFpbCBTZW5kaW5nIGZ1bmN0aW9uXG4gIHRyeSB7XG4gICAgYXdhaXQgc2VuZEVtYWlsKHtcbiAgICAgIHN0dWRlbnRJZDogc3R1ZGVudC5zdHVkZW50SWQsXG4gICAgICBzdWJqZWN0OiBcInlvdXIgcGFzc3dvcmQgcmVzZXQgbGluayB2YWlsZCBmb3IgMTAgbWluXCIsXG4gICAgICBtZXNzYWdlXG4gICAgfSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxuICAgICAgbWVzc2FnZTogXCJ0b2tlbiBzZW50IHRvIGVtYWlsXCJcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3R1ZGVudC5wYXNzd29yZFJlc2V0VG9rZW4gPSB1bmRlZmluZWQ7XG4gICAgc3R1ZGVudC5wYXNzd29yZFJlc2V0RXhwaXJlcyA9IHVuZGVmaW5lZDtcblxuICAgIGF3YWl0IHN0dWRlbnQuc2F2ZSh7IHZhbGlkYXRlQmVmb3JlU2F2ZTogZmFsc2UgfSk7XG5cbiAgICByZXR1cm4gbmV4dChuZXcgQXBwRXJyKFwidGhlcmUgd2FzIGEgZXJyb3IgaW4gbWFpbFwiLCA1MDApKTtcbiAgfVxufSk7XG5cbmV4cG9ydHMucmVzZXRQYXNzd29yZCA9IGNhdGNoQXN5bmMoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIC8vMSkgZW5jcnlwdGluZyB0aGUgdG9rZW5cbiAgY29uc3QgaGFzaGVkVG9rZW4gPSBjcnlwdG9cbiAgICAuY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgIC51cGRhdGUocmVxLnBhcmFtcy50b2tlbilcbiAgICAuZGlnZXN0KFwiaGV4XCIpO1xuXG4gIC8vMilmaW5kaW5nIHRoZSB1c2VyIHJlbGF2ZW50IHRvIHRoZSB0b2tlblxuICBjb25zdCBzdHVkZW50ID0gYXdhaXQgU3R1ZGVudC5maW5kT25lKHtcbiAgICBwYXNzd29yZFJlc2V0VG9rZW46IGhhc2hlZFRva2VuLFxuICAgIHBhc3N3b3JkUmVzZXRFeHBpcmVzOiB7ICRndDogRGF0ZS5ub3coKSB9XG4gIH0pO1xuICAvLzMpIGlmIHRva2VuIGV4cGlyZWQgb3IgdXNlciBub3QgZm91bmQuXG4gIGlmICghc3R1ZGVudCkge1xuICAgIHJldHVybiBuZXh0KG5ldyBBcHBFcnIoXCJUb2tlbiBpcyBpbnZhbGlkIG9yIGV4cGlyZWRcIiwgNDAwKSk7XG4gIH1cblxuICAvLzQpdXBkYXRlIGNoYW5nZSBhdCBwcm9wZXJ0eSBmb3IgdGhlIHVzZXJcbiAgY29uc29sZS5sb2cocmVxLmJvZHkucGFzc3dvcmQsIHJlcS5ib2R5LnBhc3N3b3JkQ29uZmlybSk7XG4gIHN0dWRlbnQucGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcbiAgc3R1ZGVudC5wYXNzd29yZENvbmZpcm0gPSByZXEuYm9keS5wYXNzd29yZENvbmZpcm07XG4gIHN0dWRlbnQucGFzc3dvcmRSZXNldEV4cGlyZXMgPSB1bmRlZmluZWQ7XG4gIHN0dWRlbnQucGFzc3dvcmRSZXNldFRva2VuID0gdW5kZWZpbmVkO1xuICBzdHVkZW50LnBhc3N3b3JkQ2hhbmdlQXQgPSBEYXRlLm5vdygpIC0gMTAwMDtcbiAgYXdhaXQgc3R1ZGVudC5zYXZlKCk7XG5cbiAgLy81KSBsb2cgdGhlIHN0dWRlbnQgaW4gLi5cbiAgY3JlYXRlU2VuZFRva2VuKHN0dWRlbnQsIDIwMCwgcmVzLCBcIkxvZ2luIHN1Y2Nlc3MgISFcIik7XG59KTtcblxuZXhwb3J0cy51cGRhdGVQYXNzd29yZCA9IGNhdGNoQXN5bmMoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIC8vMSkgR2V0IHRoZSB1c2VyIGZyb20gdGhlIGNvbGxlY3Rpb25cblxuICBjb25zdCBzdHVkZW50ID0gYXdhaXQgU3R1ZGVudC5maW5kQnlJZChyZXEuc3R1ZGVudC5faWQpLnNlbGVjdChcIitwYXNzd29yZFwiKTtcblxuICBjb25zb2xlLmxvZyhyZXEuYm9keS5wYXNzd29yZCwgc3R1ZGVudC5wYXNzd29yZCk7XG4gIC8vMilDaGVjayBpZiBwb3N0ZWQgY3VycmVudCBwYXNzd29yZCBpcyBjb3JyZWN0XG4gIGlmIChcbiAgICAhKGF3YWl0IHN0dWRlbnQuY2hlY2tQYXNzd29yZChyZXEuYm9keS5wYXNzd29yZEN1cnJlbnQsIHN0dWRlbnQucGFzc3dvcmQpKVxuICApIHtcbiAgICByZXR1cm4gbmV4dChuZXcgQXBwRXJyKFwiWW91ciBDdXJyZW50IHBhc3N3b3JkIGlzIHdyb25nXCIsIDQwMSkpO1xuICB9XG5cbiAgLy8zKWlmIHNvLCB1cGRhdGUgcGFzc3dvcmRcbiAgc3R1ZGVudC5wYXNzd29yZCA9IHJlcS5ib2R5LnBhc3N3b3JkO1xuICBzdHVkZW50LnBhc3N3b3JkQ29uZnJpbSA9IHJlcS5ib2R5LnBhc3N3b3JkQ29uZnJpbTtcbiAgY29uc29sZS5sb2coXCJzYXNcIik7XG4gIGF3YWl0IHN0dWRlbnQuc2F2ZSgpO1xuXG4gIGNyZWF0ZVNlbmRUb2tlbihzdHVkZW50LCAyMDAsIHJlcywgXCJQYXNzd29yZCB1cGRhdGVkICEhXCIpO1xufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBTEE7QUFRQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBQUE7QUFBQTtBQUFBO0FBcUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBQUE7QUFBQTtBQUFBO0FBd0NBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUFBO0FBOEJBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./APIs/Controllers/authController.js\n");

/***/ }),

/***/ "./APIs/Controllers/mlControllers.js":
/*!*******************************************!*\
  !*** ./APIs/Controllers/mlControllers.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Student = __webpack_require__(/*! ../Model/StudentModel */ \"./APIs/Model/StudentModel.js\");\n\nvar catchAsync = __webpack_require__(/*! ../utils/catchErr */ \"./APIs/utils/catchErr.js\");\n\nvar knn = __webpack_require__(/*! ../../knn/knn */ \"./knn/knn.js\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nexports.post = catchAsync( /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (req, res) {\n    var student = yield Student.findById(req.params.id);\n    console.log(req.body); // const body = {\n    //   ABC: \"4\",\n    //   D: \"3\",\n    //   C: \"5\",\n    //   AAC: \"6\",\n    //   A: \"1\",\n    //   V: \"1\",\n    //   ABC_T: \"5\",\n    //   D_T: \"1\",\n    //   C_T: \"1\",\n    //   AAC_T: \"5\",\n    //   A_T: \"1\"\n    // };\n\n    student.mlData = _objectSpread({}, student.mlData, {}, req.body);\n    yield student.save({\n      validateBeforeSave: false\n    });\n    res.status(200).json({\n      message: \"Ml Data posted !\",\n      data: {\n        student\n      }\n    });\n  });\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nexports.getData = catchAsync( /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(function* (req, res) {\n    var student = yield Student.findById(req.params.id);\n    var mlData = Object.values(student.mlData).slice(1);\n    console.log(mlData);\n    var learningStyle = knn.getType(mlData);\n    res.status(200).json(learningStyle);\n  });\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUElzL0NvbnRyb2xsZXJzL21sQ29udHJvbGxlcnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BUElzL0NvbnRyb2xsZXJzL21sQ29udHJvbGxlcnMuanM/YmVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTdHVkZW50ID0gcmVxdWlyZShcIi4uL01vZGVsL1N0dWRlbnRNb2RlbFwiKTtcbmNvbnN0IGNhdGNoQXN5bmMgPSByZXF1aXJlKFwiLi4vdXRpbHMvY2F0Y2hFcnJcIik7XG5jb25zdCBrbm4gPSByZXF1aXJlKFwiLi4vLi4va25uL2tublwiKTtcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5leHBvcnRzLnBvc3QgPSBjYXRjaEFzeW5jKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBzdHVkZW50ID0gYXdhaXQgU3R1ZGVudC5maW5kQnlJZChyZXEucGFyYW1zLmlkKTtcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xuXG4gIC8vIGNvbnN0IGJvZHkgPSB7XG4gIC8vICAgQUJDOiBcIjRcIixcbiAgLy8gICBEOiBcIjNcIixcbiAgLy8gICBDOiBcIjVcIixcbiAgLy8gICBBQUM6IFwiNlwiLFxuICAvLyAgIEE6IFwiMVwiLFxuICAvLyAgIFY6IFwiMVwiLFxuICAvLyAgIEFCQ19UOiBcIjVcIixcbiAgLy8gICBEX1Q6IFwiMVwiLFxuICAvLyAgIENfVDogXCIxXCIsXG4gIC8vICAgQUFDX1Q6IFwiNVwiLFxuICAvLyAgIEFfVDogXCIxXCJcbiAgLy8gfTtcblxuICBzdHVkZW50Lm1sRGF0YSA9IHtcbiAgICAuLi5zdHVkZW50Lm1sRGF0YSxcbiAgICAuLi5yZXEuYm9keVxuICB9O1xuXG4gIGF3YWl0IHN0dWRlbnQuc2F2ZSh7IHZhbGlkYXRlQmVmb3JlU2F2ZTogZmFsc2UgfSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBtZXNzYWdlOiBcIk1sIERhdGEgcG9zdGVkICFcIixcbiAgICBkYXRhOiB7XG4gICAgICBzdHVkZW50XG4gICAgfVxuICB9KTtcbn0pO1xuXG5leHBvcnRzLmdldERhdGEgPSBjYXRjaEFzeW5jKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBzdHVkZW50ID0gYXdhaXQgU3R1ZGVudC5maW5kQnlJZChyZXEucGFyYW1zLmlkKTtcblxuICBjb25zdCBtbERhdGEgPSBPYmplY3QudmFsdWVzKHN0dWRlbnQubWxEYXRhKS5zbGljZSgxKTtcblxuICBjb25zb2xlLmxvZyhtbERhdGEpO1xuXG4gIGxldCBsZWFybmluZ1N0eWxlID0ga25uLmdldFR5cGUobWxEYXRhKTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbihsZWFybmluZ1N0eWxlKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./APIs/Controllers/mlControllers.js\n");

/***/ }),

/***/ "./APIs/Controllers/studentController.js":
/*!***********************************************!*\
  !*** ./APIs/Controllers/studentController.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar Student = __webpack_require__(/*! ../Model/StudentModel */ \"./APIs/Model/StudentModel.js\");\n\nexports.getAll = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (req, res) {\n    var allStudents = yield Student.find();\n    res.status(200).json({\n      message: \"Success!\",\n      data: {\n        allStudents\n      }\n    });\n  });\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUElzL0NvbnRyb2xsZXJzL3N0dWRlbnRDb250cm9sbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQVBJcy9Db250cm9sbGVycy9zdHVkZW50Q29udHJvbGxlci5qcz9kZjcwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN0dWRlbnQgPSByZXF1aXJlKFwiLi4vTW9kZWwvU3R1ZGVudE1vZGVsXCIpO1xuXG5leHBvcnRzLmdldEFsbCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBhbGxTdHVkZW50cyA9IGF3YWl0IFN0dWRlbnQuZmluZCgpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBtZXNzYWdlOiBcIlN1Y2Nlc3MhXCIsXG4gICAgZGF0YTogeyBhbGxTdHVkZW50cyB9XG4gIH0pO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./APIs/Controllers/studentController.js\n");

/***/ }),

/***/ "./APIs/Model/StudentModel.js":
/*!************************************!*\
  !*** ./APIs/Model/StudentModel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar studentSchema = mongoose.Schema({\n  name: {\n    type: String\n  },\n  class: {\n    type: Number,\n    min: 5,\n    max: 9\n  },\n  studentId: {\n    type: String,\n    validate: [validator.isEmail, \"Enter valid ID\"],\n    lowercase: true,\n    unique: true,\n    required: [true, \"say your student ID\"]\n  },\n  photo: String,\n  password: {\n    type: String,\n    minlength: 6,\n    required: [true, \"password\"],\n    select: false\n  },\n  passwordConfrim: {\n    type: String,\n    required: [true, \"Enter Confrim Password \"],\n    validate: {\n      validator: function validator(el) {\n        return el === this.password;\n      },\n      message: \"password not match !\"\n    }\n  },\n  passwordChangeAt: Date,\n  passwordResetToken: String,\n  passwordResetExpires: Date,\n  active: {\n    type: Boolean,\n    default: true,\n    select: false\n  },\n  mlData: {\n    ABC: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    },\n    D: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    },\n    C: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    },\n    AAC: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    },\n    A: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    },\n    V: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    },\n    ABC_T: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    },\n    D_T: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    },\n    C_T: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    },\n    AAC_T: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    },\n    A_T: {\n      type: Number,\n      min: 0,\n      max: 9,\n      default: 0\n    }\n  }\n});\nstudentSchema.pre(\"save\", /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (next) {\n    if (!this.isModified(\"password\")) return next();\n    this.password = yield bcrypt.hash(this.password, 12);\n    this.passwordConfirm = undefined;\n    next();\n  });\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}()); //method to check the password from the datebase\n\nstudentSchema.methods.checkPassword = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(function* (Enteredpassword, DBpassword) {\n    return yield bcrypt.compare(Enteredpassword, DBpassword);\n  });\n\n  return function (_x2, _x3) {\n    return _ref2.apply(this, arguments);\n  };\n}(); //method for protect middleware\n\n\nstudentSchema.methods.changePasswordAfter = function (JWTtimestamp) {\n  if (this.passwordChangeAt) {\n    var changedTimeStamp = parseInt(this.passwordChangeAt.getTime() / 1000, 10);\n    return changedTimeStamp > JWTtimestamp;\n  }\n};\n\nstudentSchema.methods.generateResetToken = function () {\n  //1)generate Random String\n  var resetToken = crypto.randomBytes(32).toString(\"hex\"); //2)Encrypting the random String and saveing to DB\n\n  this.passwordResetToken = crypto.createHash(\"sha256\").update(resetToken).digest(\"hex\"); //3)Setting password resetToken expire time\n\n  this.passwordResetExpires = Date.now() + 600000; // 10 Mins\n  //4)Sending non encrpted token  to user\n\n  return resetToken;\n};\n\nvar Student = mongoose.model(\"Student\", studentSchema);\nmodule.exports = Student;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUElzL01vZGVsL1N0dWRlbnRNb2RlbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FQSXMvTW9kZWwvU3R1ZGVudE1vZGVsLmpzP2NkZjQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5jb25zdCB2YWxpZGF0b3IgPSByZXF1aXJlKFwidmFsaWRhdG9yXCIpO1xuY29uc3QgYmNyeXB0ID0gcmVxdWlyZShcImJjcnlwdFwiKTtcbmNvbnN0IGNyeXB0byA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5cbmNvbnN0IHN0dWRlbnRTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nXG4gIH0sXG4gIGNsYXNzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIG1pbjogNSxcbiAgICBtYXg6IDlcbiAgfSxcbiAgc3R1ZGVudElkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHZhbGlkYXRlOiBbdmFsaWRhdG9yLmlzRW1haWwsIFwiRW50ZXIgdmFsaWQgSURcIl0sXG4gICAgbG93ZXJjYXNlOiB0cnVlLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICByZXF1aXJlZDogW3RydWUsIFwic2F5IHlvdXIgc3R1ZGVudCBJRFwiXVxuICB9LFxuICBwaG90bzogU3RyaW5nLFxuICBwYXNzd29yZDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBtaW5sZW5ndGg6IDYsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcInBhc3N3b3JkXCJdLFxuICAgIHNlbGVjdDogZmFsc2VcbiAgfSxcbiAgcGFzc3dvcmRDb25mcmltOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJFbnRlciBDb25mcmltIFBhc3N3b3JkIFwiXSxcbiAgICB2YWxpZGF0ZToge1xuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihlbCkge1xuICAgICAgICByZXR1cm4gZWwgPT09IHRoaXMucGFzc3dvcmQ7XG4gICAgICB9LFxuICAgICAgbWVzc2FnZTogXCJwYXNzd29yZCBub3QgbWF0Y2ggIVwiXG4gICAgfVxuICB9LFxuICBwYXNzd29yZENoYW5nZUF0OiBEYXRlLFxuICBwYXNzd29yZFJlc2V0VG9rZW46IFN0cmluZyxcbiAgcGFzc3dvcmRSZXNldEV4cGlyZXM6IERhdGUsXG4gIGFjdGl2ZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgICBzZWxlY3Q6IGZhbHNlXG4gIH0sXG4gIG1sRGF0YToge1xuICAgIEFCQzoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiA5LFxuICAgICAgZGVmYXVsdCA6IDBcbiAgICB9LFxuICAgIEQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogOSxcbiAgICAgIGRlZmF1bHQgOiAwXG4gICAgfSxcbiAgICBDOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDksXG4gICAgICBkZWZhdWx0IDogMFxuICAgIH0sXG4gICAgQUFDOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDksXG4gICAgICBkZWZhdWx0IDogMFxuICAgIH0sXG4gICAgQToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiA5LFxuICAgICAgZGVmYXVsdCA6IDBcbiAgICB9LFxuICAgIFY6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogOSxcbiAgICAgIGRlZmF1bHQgOiAwXG4gICAgfSxcbiAgICBBQkNfVDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiA5LFxuICAgICAgZGVmYXVsdCA6IDBcbiAgICB9LFxuICAgIERfVDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiA5LFxuICAgICAgZGVmYXVsdCA6IDBcbiAgICB9LFxuICAgIENfVDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiA5LFxuICAgICAgZGVmYXVsdCA6IDBcbiAgICB9LFxuICAgIEFBQ19UOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDksXG4gICAgICBkZWZhdWx0IDogMFxuICAgIH0sXG4gICAgQV9UOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDksXG4gICAgICBkZWZhdWx0IDogMFxuICAgIH1cbiAgfVxufSk7XG5cbnN0dWRlbnRTY2hlbWEucHJlKFwic2F2ZVwiLCBhc3luYyBmdW5jdGlvbihuZXh0KSB7XG4gIGlmICghdGhpcy5pc01vZGlmaWVkKFwicGFzc3dvcmRcIikpIHJldHVybiBuZXh0KCk7XG4gIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCAxMik7XG4gIHRoaXMucGFzc3dvcmRDb25maXJtID0gdW5kZWZpbmVkO1xuICBuZXh0KCk7XG59KTtcblxuLy9tZXRob2QgdG8gY2hlY2sgdGhlIHBhc3N3b3JkIGZyb20gdGhlIGRhdGViYXNlXG5zdHVkZW50U2NoZW1hLm1ldGhvZHMuY2hlY2tQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uKFxuICBFbnRlcmVkcGFzc3dvcmQsXG4gIERCcGFzc3dvcmRcbikge1xuICByZXR1cm4gYXdhaXQgYmNyeXB0LmNvbXBhcmUoRW50ZXJlZHBhc3N3b3JkLCBEQnBhc3N3b3JkKTtcbn07XG5cbi8vbWV0aG9kIGZvciBwcm90ZWN0IG1pZGRsZXdhcmVcbnN0dWRlbnRTY2hlbWEubWV0aG9kcy5jaGFuZ2VQYXNzd29yZEFmdGVyID0gZnVuY3Rpb24oSldUdGltZXN0YW1wKSB7XG4gIGlmICh0aGlzLnBhc3N3b3JkQ2hhbmdlQXQpIHtcbiAgICBjb25zdCBjaGFuZ2VkVGltZVN0YW1wID0gcGFyc2VJbnQoXG4gICAgICB0aGlzLnBhc3N3b3JkQ2hhbmdlQXQuZ2V0VGltZSgpIC8gMTAwMCxcbiAgICAgIDEwXG4gICAgKTtcbiAgICByZXR1cm4gY2hhbmdlZFRpbWVTdGFtcCA+IEpXVHRpbWVzdGFtcDtcbiAgfVxufTtcblxuc3R1ZGVudFNjaGVtYS5tZXRob2RzLmdlbmVyYXRlUmVzZXRUb2tlbiA9IGZ1bmN0aW9uKCkge1xuICAvLzEpZ2VuZXJhdGUgUmFuZG9tIFN0cmluZ1xuICBjb25zdCByZXNldFRva2VuID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDMyKS50b1N0cmluZyhcImhleFwiKTtcbiAgLy8yKUVuY3J5cHRpbmcgdGhlIHJhbmRvbSBTdHJpbmcgYW5kIHNhdmVpbmcgdG8gREJcbiAgdGhpcy5wYXNzd29yZFJlc2V0VG9rZW4gPSBjcnlwdG9cbiAgICAuY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgIC51cGRhdGUocmVzZXRUb2tlbilcbiAgICAuZGlnZXN0KFwiaGV4XCIpO1xuICAvLzMpU2V0dGluZyBwYXNzd29yZCByZXNldFRva2VuIGV4cGlyZSB0aW1lXG4gIHRoaXMucGFzc3dvcmRSZXNldEV4cGlyZXMgPSBEYXRlLm5vdygpICsgNjAwMDAwOyAvLyAxMCBNaW5zXG4gIC8vNClTZW5kaW5nIG5vbiBlbmNycHRlZCB0b2tlbiAgdG8gdXNlclxuICByZXR1cm4gcmVzZXRUb2tlbjtcbn07XG5cbmNvbnN0IFN0dWRlbnQgPSBtb25nb29zZS5tb2RlbChcIlN0dWRlbnRcIiwgc3R1ZGVudFNjaGVtYSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3R1ZGVudDtcbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUE3REE7QUF6Q0E7QUErR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./APIs/Model/StudentModel.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./APIs/Routers/studentRouter.js":
/*!***************************************!*\
  !*** ./APIs/Routers/studentRouter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar authController = __webpack_require__(/*! ../Controllers/authController */ \"./APIs/Controllers/authController.js\");\n\nvar studentController = __webpack_require__(/*! ../Controllers/studentController */ \"./APIs/Controllers/studentController.js\");\n\nvar mlController = __webpack_require__(/*! ../Controllers/mlControllers */ \"./APIs/Controllers/mlControllers.js\");\n\nrouter.route(\"/signup\").post(authController.signup);\nrouter.route(\"/login\").post(authController.login);\nrouter.route(\"/forgetPassword\").post(authController.passwordForget);\nrouter.route(\"/resetPassword/:token\").post(authController.resetPassword);\nrouter.route(\"/updatePassword\").post(authController.protect, authController.updatePassword);\nrouter.route(\"/getAll\").get(authController.protect, studentController.getAll);\nrouter.route(\"/ml/post/:id\").patch(mlController.post);\nrouter.route(\"/ml/get/:id\").get(mlController.getData);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUElzL1JvdXRlcnMvc3R1ZGVudFJvdXRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FQSXMvUm91dGVycy9zdHVkZW50Um91dGVyLmpzP2ZhMjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbmNvbnN0IGF1dGhDb250cm9sbGVyID0gcmVxdWlyZShcIi4uL0NvbnRyb2xsZXJzL2F1dGhDb250cm9sbGVyXCIpO1xuY29uc3Qgc3R1ZGVudENvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi4vQ29udHJvbGxlcnMvc3R1ZGVudENvbnRyb2xsZXJcIik7XG5jb25zdCBtbENvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi4vQ29udHJvbGxlcnMvbWxDb250cm9sbGVyc1wiKTtcblxucm91dGVyLnJvdXRlKFwiL3NpZ251cFwiKS5wb3N0KGF1dGhDb250cm9sbGVyLnNpZ251cCk7XG5yb3V0ZXIucm91dGUoXCIvbG9naW5cIikucG9zdChhdXRoQ29udHJvbGxlci5sb2dpbik7XG5yb3V0ZXIucm91dGUoXCIvZm9yZ2V0UGFzc3dvcmRcIikucG9zdChhdXRoQ29udHJvbGxlci5wYXNzd29yZEZvcmdldCk7XG5yb3V0ZXIucm91dGUoXCIvcmVzZXRQYXNzd29yZC86dG9rZW5cIikucG9zdChhdXRoQ29udHJvbGxlci5yZXNldFBhc3N3b3JkKTtcbnJvdXRlclxuICAucm91dGUoXCIvdXBkYXRlUGFzc3dvcmRcIilcbiAgLnBvc3QoYXV0aENvbnRyb2xsZXIucHJvdGVjdCwgYXV0aENvbnRyb2xsZXIudXBkYXRlUGFzc3dvcmQpO1xucm91dGVyLnJvdXRlKFwiL2dldEFsbFwiKS5nZXQoYXV0aENvbnRyb2xsZXIucHJvdGVjdCwgc3R1ZGVudENvbnRyb2xsZXIuZ2V0QWxsKTtcblxucm91dGVyLnJvdXRlKFwiL21sL3Bvc3QvOmlkXCIpLnBhdGNoKG1sQ29udHJvbGxlci5wb3N0KTtcbnJvdXRlci5yb3V0ZShcIi9tbC9nZXQvOmlkXCIpLmdldChtbENvbnRyb2xsZXIuZ2V0RGF0YSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./APIs/Routers/studentRouter.js\n");

/***/ }),

/***/ "./APIs/utils/appError.js":
/*!********************************!*\
  !*** ./APIs/utils/appError.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.statusCode = statusCode;\n    this.status = \"\".concat(statusCode).startsWith(\"4\") ? \"fail\" : \"error\";\n    this.isOperational = true;\n    Error.captureStackTrace(this, this.constructor);\n  }\n\n}\n\nmodule.exports = AppError;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUElzL3V0aWxzL2FwcEVycm9yLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQVBJcy91dGlscy9hcHBFcnJvci5qcz9lZGQ3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgIHRoaXMuc3RhdHVzID0gYCR7c3RhdHVzQ29kZX1gLnN0YXJ0c1dpdGgoXCI0XCIpID8gXCJmYWlsXCIgOiBcImVycm9yXCI7XG4gICAgdGhpcy5pc09wZXJhdGlvbmFsID0gdHJ1ZTtcblxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwRXJyb3I7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFXQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./APIs/utils/appError.js\n");

/***/ }),

/***/ "./APIs/utils/catchErr.js":
/*!********************************!*\
  !*** ./APIs/utils/catchErr.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = fn => {\n  return (req, res, next) => {\n    fn(req, res, next).catch(next);\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUElzL3V0aWxzL2NhdGNoRXJyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQVBJcy91dGlscy9jYXRjaEVyci5qcz85NDI0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZm4gPT4ge1xuICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgZm4ocmVxLCByZXMsIG5leHQpLmNhdGNoKG5leHQpO1xuICB9O1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./APIs/utils/catchErr.js\n");

/***/ }),

/***/ "./APIs/utils/email.js":
/*!*****************************!*\
  !*** ./APIs/utils/email.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nvar sendEmail = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (option) {\n    console.log(option); //1) create a transfer\n\n    var transporter = nodemailer.createTransport({\n      host: process.env.MAIL_HOST,\n      port: process.env.MAIL_PORT,\n      auth: {\n        user: process.env.MAIL_USER,\n        pass: process.env.MAIL_PASS\n      } //Active in gmail\n\n    }); //2) Define the email option\n\n    var mailOption = {\n      from: \"Siva prakash  <admin@chillstudies.com>\",\n      to: option.studentId,\n      subject: option.subject,\n      text: option.message\n    }; //3)Actually send the email\n\n    yield transporter.sendMail(mailOption);\n  });\n\n  return function sendEmail(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmodule.exports = sendEmail;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BUElzL3V0aWxzL2VtYWlsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQVBJcy91dGlscy9lbWFpbC5qcz8wNzk0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vZGVtYWlsZXIgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTtcblxuY29uc3Qgc2VuZEVtYWlsID0gYXN5bmMgb3B0aW9uID0+IHtcbiAgY29uc29sZS5sb2cob3B0aW9uKTtcbiAgLy8xKSBjcmVhdGUgYSB0cmFuc2ZlclxuICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5NQUlMX0hPU1QsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuTUFJTF9QT1JULFxuICAgIGF1dGg6IHtcbiAgICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1BSUxfVVNFUixcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52Lk1BSUxfUEFTU1xuICAgIH1cbiAgICAvL0FjdGl2ZSBpbiBnbWFpbFxuICB9KTtcblxuICAvLzIpIERlZmluZSB0aGUgZW1haWwgb3B0aW9uXG4gIGNvbnN0IG1haWxPcHRpb24gPSB7XG4gICAgZnJvbTogXCJTaXZhIHByYWthc2ggIDxhZG1pbkBjaGlsbHN0dWRpZXMuY29tPlwiLFxuICAgIHRvOiBvcHRpb24uc3R1ZGVudElkLFxuICAgIHN1YmplY3Q6IG9wdGlvbi5zdWJqZWN0LFxuICAgIHRleHQ6IG9wdGlvbi5tZXNzYWdlXG4gIH07XG5cbiAgLy8zKUFjdHVhbGx5IHNlbmQgdGhlIGVtYWlsXG5cbiAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwobWFpbE9wdGlvbik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbmRFbWFpbDtcbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFKQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXlCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./APIs/utils/email.js\n");

/***/ }),

/***/ "./React/Server/index.js":
/*!*******************************!*\
  !*** ./React/Server/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Shared_Components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/Components/App */ \"./React/Shared/Components/App.js\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Shared_Components_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/Components/theme */ \"./React/Shared/Components/theme.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _Shared_Data_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Shared/Data/routes */ \"./React/Shared/Data/routes.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('dist'));\nrouter.route('*').get((req, res, next) => {\n  var sheets = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"ServerStyleSheets\"]();\n  var activeRoute = _Shared_Data_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].find(route => Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"matchPath\"])(req.url, route));\n\n  var context = _objectSpread({}, activeRoute);\n\n  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(sheets.collect(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"StaticRouter\"], {\n    context: context,\n    location: req.url\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: _Shared_Components_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_Components_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)))));\n  var css = sheets.toString();\n  res.writeHead(200, {\n    'Content-Type': 'text/html'\n  });\n  res.end(\"<!DOCTYPE html>\\n      <html lang='en'>\\n        <head>\\n          <title>ChillStudies</title>\\n          <style id='jss-server-side'>\".concat(css, \"</style>\\n          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />\\n          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />\\n          <script>window.__initialData__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_8___default()(JSON.stringify(activeRoute)), \"</script>\\n        </head>\\n        <body>\\n          <div id='root'>\").concat(markup, \"</div>\\n          <script src=\\\"/client.js\\\" async></script>\\n        </body>\\n      </html>\\n    \")).catch(next);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TZXJ2ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZWFjdC9TZXJ2ZXIvaW5kZXguanM/Njc4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldHMsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge3JlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCBBcHAgZnJvbSAnLi4vU2hhcmVkL0NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9TaGFyZWQvQ29tcG9uZW50cy90aGVtZSdcbmltcG9ydCB7IFN0YXRpY1JvdXRlciwgbWF0Y2hQYXRoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc2VyaWFsaXplIGZyb20gXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9TaGFyZWQvRGF0YS9yb3V0ZXMnXG5cbmNvbnN0IHJvdXRlciA9ZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIudXNlKGV4cHJlc3Muc3RhdGljKCdkaXN0JykpXG5cbnJvdXRlci5yb3V0ZSgnKicpLmdldCgocmVxLCByZXMsIG5leHQpID0+IHtcblxuICAgIGNvbnN0IHNoZWV0cyA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0cygpXG5cbiAgICBjb25zdCBhY3RpdmVSb3V0ZSA9IHJvdXRlcy5maW5kKHJvdXRlID0+IG1hdGNoUGF0aChyZXEudXJsLCByb3V0ZSkpO1xuICBcbiAgICBjb25zdCBjb250ZXh0ID0geyAuLi5hY3RpdmVSb3V0ZSB9O1xuICBcbiAgICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyggIFxuICAgICAgc2hlZXRzLmNvbGxlY3QoXG4gICAgICAgICAgPFN0YXRpY1JvdXRlciBjb250ZXh0PXsgY29udGV4dCB9IGxvY2F0aW9uPXsgcmVxLnVybCB9PlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICAgICAgPEFwcC8+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgPC9TdGF0aWNSb3V0ZXI+IFxuICAgICAgKVxuICAgIClcbiAgXG4gICAgY29uc3QgY3NzICA9IHNoZWV0cy50b1N0cmluZygpXG4gIFxuICAgIHJlcy53cml0ZUhlYWQoIDIwMCwgeyAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCcgfSApO1xuICAgIHJlcy5lbmQoXG4gICAgICBgPCFET0NUWVBFIGh0bWw+XG4gICAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT5DaGlsbFN0dWRpZXM8L3RpdGxlPlxuICAgICAgICAgIDxzdHlsZSBpZD0nanNzLXNlcnZlci1zaWRlJz4ke2Nzc308L3N0eWxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwJyAvPlxuICAgICAgICAgIDxzY3JpcHQ+d2luZG93Ll9faW5pdGlhbERhdGFfXyA9ICR7c2VyaWFsaXplKEpTT04uc3RyaW5naWZ5KGFjdGl2ZVJvdXRlKSl9PC9zY3JpcHQ+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPGRpdiBpZD0ncm9vdCc+JHttYXJrdXB9PC9kaXY+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvY2xpZW50LmpzXCIgYXN5bmM+PC9zY3JpcHQ+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICBgKS5jYXRjaChuZXh0KVxuICB9KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQVFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFnQkE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Server/index.js\n");
=======
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
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeProvider, {
    theme: _Shared_Components_theme__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CssBaseline"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_Components_App__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
  var css = sheets.toString();
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end("<!DOCTYPE html>\n      <html lang='en'>\n        <head>\n          <title>ChillStudies</title>\n          <style id='jss-server-side'>".concat(css, "</style>\n          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />\n          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />\n          <script>window.__initialData__ = ").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(JSON.stringify(activeRoute)), "</script>\n        </head>\n        <body>\n          <div id='root'>").concat(markup, "</div>\n          <script src=\"/client.js\" async></script>\n        </body>\n      </html>\n    ")).catch(next);
});
/* harmony default export */ __webpack_exports__["default"] = (router);
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/App.js":
/*!****************************************!*\
  !*** ./React/Shared/Components/App.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/routes */ \"./React/Shared/Data/routes.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _Data_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((route, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({\n      key: i + 1\n    }, route)))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9BcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9BcHAuanM/OTQzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vRGF0YS9yb3V0ZXMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICB7cm91dGVzLm1hcCgocm91dGUsIGkpID0+IDxSb3V0ZSBrZXk9e2krMX0gey4uLnJvdXRlfSAvPil9XG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFJQTtBQUNBO0FBVkE7QUFDQTtBQVdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./React/Shared/Components/App.js\n");

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Activity.js":
/*!*********************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Activity.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Activity; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Data_courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/courses */ \"./React/Shared/Data/courses.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIosRounded */ \"@material-ui/icons/ArrowForwardIosRounded\");\n/* harmony import */ var _material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props, startTime) {\n    e.preventDefault();\n    var q1 = document.getElementById('q1').value.toLowerCase(),\n        q2 = document.getElementById('q2').value.toLowerCase(),\n        q3 = document.getElementById('q3').value.toLowerCase(),\n        q4 = document.getElementById('q4').value.toLowerCase(),\n        q5 = document.getElementById('q5').value.toLowerCase();\n    var score = 0;\n    if (q1.includes('java virtual machine')) score++;\n    if (q2.includes('import')) score++;\n    if (q3.includes('3')) score++;\n    if (q4.includes('java runtime environment')) score++;\n    if (q5.includes('java development kit')) score++;\n    score *= 2;\n    var time = Math.round((Date.now() - startTime) / 1000 / 60);\n    time = time >= 9 ? 9 : time;\n    var authToken = sessionStorage.getItem('auth');\n\n    try {\n      var res = yield axios__WEBPACK_IMPORTED_MODULE_4___default.a.patch('http://127.0.0.1:8000/api/v1/student/ml/post/' + authToken, {\n        \"A\": score,\n        \"A_T\": time\n      });\n\n      if (res.status === 200) {\n        console.log('Successfully Pushed Activity Data');\n      } else {\n        alert(\"Problem While Pushing\");\n      }\n    } catch (err) {\n      alert(err);\n    }\n\n    console.log(\"score\" + score);\n    console.log(\"time\" + time);\n    props.history.push('/course/' + props.match.params.course + '/Content');\n  });\n\n  return function handleSubmit(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction Activity(props) {\n  var classes = useStyles();\n  var startTime = Date.now();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"List\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItemIcon\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"subtitle1\"\n  }, \"Lets see if you can find the abbreviation for JVM\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, \"  \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n    id: \"q1\",\n    label: \"Answer\"\n  }), \" \")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItemIcon\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"subtitle1\"\n  }, \"Can you find the keyword used to include java packages ?\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n    id: \"q2\",\n    label: \"Answer\"\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItemIcon\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"subtitle1\"\n  }, \"what could be the value of 'a++' if 'a=2' ?\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n    id: \"q3\",\n    label: \"Answer\"\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItemIcon\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"subtitle1\"\n  }, \"Lets see if you can find the abbreviation for JRE\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n    id: \"q4\",\n    label: \"Answer\"\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItemIcon\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForwardIosRounded__WEBPACK_IMPORTED_MODULE_3___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"subtitle1\"\n  }, \"Lets see if you can find the abbreviation for JDK\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n    id: \"q5\",\n    label: \"Answer\"\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    variant: \"middle\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props, startTime);\n    }\n  }, \"Next\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvR2VuZXJhbE1hdGVyaWFscy9BY3Rpdml0eS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9Db21wb25lbnRzL0NvdXJzZS9HZW5lcmFsTWF0ZXJpYWxzL0FjdGl2aXR5LmpzPzUxYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY291cnNlcyBmcm9tICcuLi8uLi8uLi9EYXRhL2NvdXJzZXMnXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBcbiAgICBQYXBlciwgXG4gICAgbWFrZVN0eWxlcywgXG4gICAgVGV4dEZpZWxkLFxuICAgIEJ1dHRvbixcbiAgICBBcHBCYXIsIFxuICAgIENhcmRDb250ZW50LCBcbiAgICBDYXJkTWVkaWEsIFxuICAgIENhcmQsXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBMaXN0SXRlbUljb24sXG4gICAgRGl2aWRlcixcbiAgICBUb29sYmFyLHdpdGhTdHlsZXMsIENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IEFycm93Rm9yd2FyZElvc1JvdW5kZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd0ZvcndhcmRJb3NSb3VuZGVkJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gICAgaWNvbjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgIGZsb2F0OidyaWdodCdcbiAgICB9LFxuICAgIGxpbmsgOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbiA6ICdub25lJyxcbiAgICB9LFxuICAgIGhlcm9Db250ZW50OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNiksXG4gICAgfSxcbiAgICBoZXJvQnV0dG9uczoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIH0sXG4gICAgY2FyZEdyaWQ6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIGNhcmRNZWRpYToge1xuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcbiAgICB9LFxuICAgIGNhcmRDb250ZW50OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgIH0sXG4gIH0pKTtcblxuY29uc3QgaGFuZGxlU3VibWl0ID1hc3luYyAoZSxwcm9wcyxzdGFydFRpbWUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHExID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxMScpLnZhbHVlKS50b0xvd2VyQ2FzZSgpLFxuICBxMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxMicpLnZhbHVlLnRvTG93ZXJDYXNlKCksXG4gIHEzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3EzJykudmFsdWUudG9Mb3dlckNhc2UoKSxcbiAgcTQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncTQnKS52YWx1ZS50b0xvd2VyQ2FzZSgpLFxuICBxNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxNScpLnZhbHVlLnRvTG93ZXJDYXNlKClcblxuICBsZXQgc2NvcmUgPSAwXG5cbiAgaWYocTEuaW5jbHVkZXMoJ2phdmEgdmlydHVhbCBtYWNoaW5lJykpIHNjb3JlKytcbiAgaWYocTIuaW5jbHVkZXMoJ2ltcG9ydCcpKSBzY29yZSsrXG4gIGlmKHEzLmluY2x1ZGVzKCczJykpIHNjb3JlKytcbiAgaWYocTQuaW5jbHVkZXMoJ2phdmEgcnVudGltZSBlbnZpcm9ubWVudCcpKSBzY29yZSsrXG4gIGlmKHE1LmluY2x1ZGVzKCdqYXZhIGRldmVsb3BtZW50IGtpdCcpKSBzY29yZSsrXG5cbiAgc2NvcmUqPTJcbiAgbGV0IHRpbWUgPSBNYXRoLnJvdW5kKCgoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSkvMTAwMCkvNjApXG4gIHRpbWUgPSB0aW1lID49IDkgPyA5IDogdGltZVxuXG4gIGNvbnN0IGF1dGhUb2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucGF0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdjEvc3R1ZGVudC9tbC9wb3N0LycrYXV0aFRva2VuLFxuICAgIHtcbiAgICAgIFwiQVwiIDogc2NvcmUsXG4gICAgICBcIkFfVFwiIDogIHRpbWVcbiAgICB9KVxuXG4gICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IFB1c2hlZCBBY3Rpdml0eSBEYXRhJylcbiAgICB9XG4gICAgXG4gICAgZWxzZSB7XG4gICAgICBhbGVydChcIlByb2JsZW0gV2hpbGUgUHVzaGluZ1wiKTtcbiAgICB9XG4gIH0gY2F0Y2goZXJyICl7XG4gICAgYWxlcnQoZXJyKVxuICB9XG5cbiAgY29uc29sZS5sb2coXCJzY29yZVwiK3Njb3JlKVxuICBjb25zb2xlLmxvZyhcInRpbWVcIit0aW1lKVxuICBwcm9wcy5oaXN0b3J5LnB1c2goJy9jb3Vyc2UvJysgcHJvcHMubWF0Y2gucGFyYW1zLmNvdXJzZSArJy9Db250ZW50JylcbiBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aXZpdHkgKHByb3BzKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICByZXR1cm4oXG5cbiAgICAgICAgPGZvcm0gIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICA8TGlzdCA+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NSb3VuZGVkSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSA+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgICAgIExldHMgc2VlIGlmIHlvdSBjYW4gZmluZCB0aGUgYWJicmV2aWF0aW9uIGZvciBKVk1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPiAgPFRleHRGaWVsZCBpZD1cInExXCIgbGFiZWw9XCJBbnN3ZXJcIi8+IDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NSb3VuZGVkSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSA+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgICAgIENhbiB5b3UgZmluZCB0aGUga2V5d29yZCB1c2VkIHRvIGluY2x1ZGUgamF2YSBwYWNrYWdlcyA/XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT48VGV4dEZpZWxkIGlkPVwicTJcIiBsYWJlbD1cIkFuc3dlclwiLz48L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NSb3VuZGVkSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSA+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgICAgIHdoYXQgY291bGQgYmUgdGhlIHZhbHVlIG9mICdhKysnIGlmICdhPTInID8gXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT4gXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+PFRleHRGaWVsZCBpZD1cInEzXCIgbGFiZWw9XCJBbnN3ZXJcIi8+PC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zUm91bmRlZEljb24gLz5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnPlxuICAgICAgICAgICAgICAgICAgICBMZXRzIHNlZSBpZiB5b3UgY2FuIGZpbmQgdGhlIGFiYnJldmlhdGlvbiBmb3IgSlJFXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT48VGV4dEZpZWxkIGlkPVwicTRcIiBsYWJlbD1cIkFuc3dlclwiLz48L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NSb3VuZGVkSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSA+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMSc+XG4gICAgICAgICAgICAgICAgICAgIExldHMgc2VlIGlmIHlvdSBjYW4gZmluZCB0aGUgYWJicmV2aWF0aW9uIGZvciBKREtcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPjxUZXh0RmllbGQgaWQ9XCJxNVwiIGxhYmVsPVwiQW5zd2VyXCIvPjwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwibWlkZGxlXCIgLz5cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlQnV0dG9ufSBvbkNsaWNrPXsoZSk9PnsgaGFuZGxlU3VibWl0KGUscHJvcHMsc3RhcnRUaW1lKSB9fT5cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQWpDQTtBQUNBO0FBc0NBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQTdDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBNkNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/GeneralMaterials/Activity.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Content.js":
/*!********************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Content.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Content; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Data_courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/courses */ \"./React/Shared/Data/courses.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props, startTime) {\n    e.preventDefault();\n    var time = Math.round((Date.now() - startTime) / 1000 / 60);\n    var score = time;\n    time = time >= 9 ? 9 : time;\n    var authToken = sessionStorage.getItem('auth');\n\n    try {\n      var res = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch('http://127.0.0.1:8000/api/v1/student/ml/post/' + authToken, {\n        \"C\": score,\n        \"C_T\": time\n      });\n\n      if (res.status === 200) {\n        console.log('Successfully Pushed Activity Data');\n      } else {\n        alert(\"Problem While Pushing\");\n      }\n    } catch (err) {\n      alert(err);\n    }\n\n    console.log(\"score\" + score);\n    console.log(\"time\" + time);\n    props.history.push('/course/' + props.match.params.course + '/Visual');\n  });\n\n  return function handleSubmit(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction Content(props) {\n  var classes = useStyles();\n  var startTime = Date.now();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"List\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h2\"\n  }, \"Java\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"This article is about a programming language. For the software platform, see Java (software platform). For the software package downloaded from java.com, see Java Platform, Standard Edition. For other uses, see Java (disambiguation). Not to be confused with JavaScript.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java is a general - purpose programming language that is class - based, object - oriented, and designed to have as few implementation dependencies as possible.It is intended to let application developers write once, run anywhere(WORA), [15] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. [16] Java applications are typically compiled to bytecode that can run on any Java virtual machine(JVM) regardless of the underlying computer architecture.The syntax of Java is similar to C and C++, but it has fewer low - level facilities than either of them.As of 2019, Java was one of the most popular programming languages in use according to GitHub, [17][18] particularly for client - server web applications, with a reported 9 million developers. [19]\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java was originally developed by James Gosling at Sun Microsystems(which has since been acquired by Oracle) and released in 1995 as a core component of Sun Microsystems ' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GNU General Public License. Meanwhile, others have developed alternative implementations of these Sun technologies, such as the GNU Compiler for Java (bytecode compiler), GNU Classpath (standard libraries), and IcedTea-Web (browser plugin for applets).\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"The latest versions are Java 13, released in September 2019, and Java 11, a currently supported long-term support (LTS) version, released on September 25, 2018; Oracle released for the legacy Java 8 LTS the last free public update in January 2019 for commercial use, while it will otherwise still support Java 8 with public updates for personal use up to at least December 2020. Oracle (and others) highly recommend uninstalling older versions of Java because of serious risks due to unresolved security issues.[20] Since Java 9 (and 10 and 12) is no longer supported, Oracle advises its users to immediately transition to the latest version (currently Java 13) or an LTS release.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    variant: \"middle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h2\"\n  }, \"History\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"James Gosling, Mike Sheridan, and Patrick Naughton initiated the Java language project in June 1991.[21] Java was originally designed for interactive television, but it was too advanced for the digital cable television industry at the time.[22] The language was initially called Oak after an oak tree that stood outside Gosling's office. Later the project went by the name Green and was finally renamed Java, from Java coffee, the coffee from Indonesia.[23] Gosling designed Java with a C/C++-style syntax that system and application programmers would find familiar.[24]\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Sun Microsystems released the first public implementation as Java 1.0 in 1996.[25] It promised Write Once, Run Anywhere (WORA) functionality, providing no-cost run-times on popular platforms. Fairly secure and featuring configurable security, it allowed network- and file-access restrictions. Major web browsers soon incorporated the ability to run Java applets within web pages, and Java quickly became popular. The Java 1.0 compiler was re-written in Java by Arthur van Hoff to comply strictly with the Java 1.0 language specification.[26] With the advent of Java 2 (released initially as J2SE 1.2 in December 1998 \\u2013 1999), new versions had multiple configurations built for different types of platforms. J2EE included technologies and APIs for enterprise applications typically run in server environments, while J2ME featured APIs optimized for mobile applications. The desktop version was renamed J2SE. In 2006, for marketing purposes, Sun renamed new J2 versions as Java EE, Java ME, and Java SE, respectively.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    variant: \"middle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h2\"\n  }, \"Principles\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"1.It must be robust and secure.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"2.It must be architecture-neutral and portable.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"3.It must execute with high performance.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"4.It must be interpreted, threaded, and dynamic.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    variant: \"middle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h2\"\n  }, \"Versions\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*JDK 1.0 (January 23, 1996)[37]\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*JDK 1.1 (February 19, 1996)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*J2SE 1.2 (December 8, 1998)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*J2SE 1.3 (May 8, 2000)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*J2SE 1.4 (February 6, 2002)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*J2SE 5.0 (September 30, 2004)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*Java SE 6 (December 11, 2006)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*Java SE 7 (July 28, 2011)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*Java SE 8 (March 18, 2014)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*Java SE 9 (September 21, 2017)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*Java SE 10 (March 20, 2018)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*Java SE 11 (September 25, 2018)[38]\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"*Java SE 12 (March 19, 2019)\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    variant: \"middle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h2\"\n  }, \"Editions\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java Card for smart-cards.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java Platform, Micro Edition (Java ME) \\u2013 targeting environments with limited resources.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java Platform, Standard Edition (Java SE) \\u2013 targeting workstation environments.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java Platform, Enterprise Edition (Java EE) \\u2013 targeting large distributed enterprise or Internet environments.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h2\"\n  }, \"Execution system\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Java JVM and Bytecode\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"One design goal of Java is portability, which means that programs written for the Java platform must run similarly on any combination of hardware and operating system with adequate run time support. This is achieved by compiling the Java language code to an intermediate representation called Java bytecode, instead of directly to architecture-specific machine code. Java bytecode instructions are analogous to machine code, but they are intended to be executed by a virtual machine (VM) written specifically for the host hardware. End users commonly use a Java Runtime Environment (JRE) installed on their machine for standalone Java applications, or in a web browser for Java applets. Standard libraries provide a generic way to access host-specific features such as graphics, threading, and networking. The use of universal bytecode makes porting simple. However, the overhead of interpreting bytecode into machine instructions made interpreted programs almost always run more slowly than native executables. Just-in-time (JIT) compilers that compile byte-codes to machine code during runtime were introduced from an early stage. Java itself is platform-independent and is adapted to the particular platform it is to run on by a Java virtual machine for it, which translates the Java bytecode into the platform's machine language\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Performance\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Programs written in Java have a reputation for being slower and requiring more memory than those written in C++.[44][45] However, Java programs' execution speed improved significantly with the introduction of just-in-time compilation in 1997/1998 for Java 1.1,[46] the addition of language features supporting better code analysis (such as inner classes, the StringBuilder class, optional assertions, etc.), and optimizations in the Java virtual machine, such as HotSpot becoming the default for Sun's JVM in 2000. With Java 1.5, the performance was improved with the addition of the java.util.concurrent package, including lock free implementations of the ConcurrentMaps and other multi-core collections, and it was improved further with Java 1.6.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Non-JVM\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Some platforms offer direct hardware support for Java; there are micro controllers that can run Java bytecode in hardware instead of a software Java virtual machine,[47] and some ARM-based processors could have hardware support for executing Java bytecode through their Jazelle option, though support has mostly been dropped in current implementations of ARM.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Automatic memory management\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java uses an automatic garbage collector to manage memory in the object lifecycle. The programmer determines when objects are created, and the Java runtime is responsible for recovering the memory once objects are no longer in use. Once no references to an object remain, the unreachable memory becomes eligible to be freed automatically by the garbage collector. Something similar to a memory leak may still occur if a programmer's code holds a reference to an object that is no longer needed, typically when objects that are no longer needed are stored in containers that are still in use. If methods for a non-existent object are called, a null pointer exception is thrown.[48][49] One of the ideas behind Java's automatic memory management model is that programmers can be spared the burden of having to perform manual memory management. In some languages, memory for the creation of objects is implicitly allocated on the stack or explicitly allocated and deallocated from the heap. In the latter case, the responsibility of managing memory resides with the programmer. If the program does not deallocate an object, a memory leak occurs. If the program attempts to access or deallocate memory that has already been deallocated, the result is undefined and difficult to predict, and the program is likely to become unstable or crash. This can be partially remedied by the use of smart pointers, but these add overhead and complexity. Note that garbage collection does not prevent logical memory leaks, i.e. those where the memory is still referenced but never used. Garbage collection may happen at any time. Ideally, it will occur when a program is idle. It is guaranteed to be triggered if there is insufficient free memory on the heap to allocate a new object; this can cause a program to stall momentarily. Explicit memory management is not possible in Java. Java does not support C/C++ style pointer arithmetic, where object addresses can be arithmetically manipulated (e.g. by adding or subtracting an offset). This allows the garbage collector to relocate referenced objects and ensures type safety and security. As in C++ and some other object-oriented languages, variables of Java's primitive data types are either stored directly in fields (for objects) or on the stack (for methods) rather than on the heap, as is commonly true for non-primitive data types (but see escape analysis). This was a conscious decision by Java's designers for performance reasons. Java contains multiple types of garbage collectors. By default, HotSpot uses the parallel scavenge garbage collector.[50] However, there are also several other garbage collectors that can be used to manage the heap. For 90% of applications in Java, the Concurrent Mark-Sweep (CMS) garbage collector is sufficient.[51] Oracle aims to replace CMS with the Garbage-First Collector (G1).[52] Having solved the memory management problem does not relieve the programmer of the burden of handling properly other kind of resources, like network or database connections, file handles, etc., especially in the presence of exceptions. Paradoxically, the presence of a garbage collector has faded the necessity of having an explicit destructor method in the classes, thus rendering the management of these other resources more difficult.[citation needed]\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props, startTime);\n    }\n  }, \"Next\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvR2VuZXJhbE1hdGVyaWFscy9Db250ZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0NvbXBvbmVudHMvQ291cnNlL0dlbmVyYWxNYXRlcmlhbHMvQ29udGVudC5qcz85YmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY291cnNlcyBmcm9tICcuLi8uLi8uLi9EYXRhL2NvdXJzZXMnXG5pbXBvcnQge1xuICAgIFR5cG9ncmFwaHksXG4gICAgbWFrZVN0eWxlcyxcbiAgICBCdXR0b24sXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBEaXZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGljb246IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICBmbG9hdDoncmlnaHQnXG4gICAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB9LFxuICAgIGhlcm9Db250ZW50OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDAsIDYpLFxuICAgIH0sXG4gICAgaGVyb0J1dHRvbnM6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIH0sXG4gICAgY2FyZEdyaWQ6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg4KSxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBjYXJkTWVkaWE6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcbiAgICB9LFxuICAgIGNhcmRDb250ZW50OiB7XG4gICAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgIH0sXG59KSk7XG5cblxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUsIHByb3BzLCBzdGFydFRpbWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgdGltZSA9IE1hdGgucm91bmQoKChEYXRlLm5vdygpIC0gc3RhcnRUaW1lKS8xMDAwKS82MClcbiAgICBsZXQgc2NvcmUgPSB0aW1lXG4gICAgdGltZSA9IHRpbWUgPj0gOSA/IDkgOiB0aW1lXG5cbiAgICBjb25zdCBhdXRoVG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhdXRoJylcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBhdGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL3N0dWRlbnQvbWwvcG9zdC8nK2F1dGhUb2tlbixcbiAgICAgICAge1xuICAgICAgICAgIFwiQ1wiIDogc2NvcmUsXG4gICAgICAgICAgXCJDX1RcIiA6ICB0aW1lXG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgUHVzaGVkIEFjdGl2aXR5IERhdGEnKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlByb2JsZW0gV2hpbGUgUHVzaGluZ1wiKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlcnIgKXtcbiAgICAgICAgYWxlcnQoZXJyKVxuICAgICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJzY29yZVwiK3Njb3JlKVxuICAgIGNvbnNvbGUubG9nKFwidGltZVwiK3RpbWUpXG4gICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvY291cnNlLycgKyBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlICsgJy9WaXN1YWwnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50KHByb3BzKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgPExpc3QgPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInPlxuICAgICAgICAgICAgICAgICAgICAgICAgSmF2YVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBhcnRpY2xlIGlzIGFib3V0IGEgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuIEZvciB0aGUgc29mdHdhcmUgcGxhdGZvcm0sIHNlZSBKYXZhIChzb2Z0d2FyZSBwbGF0Zm9ybSkuXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3IgdGhlIHNvZnR3YXJlIHBhY2thZ2UgZG93bmxvYWRlZCBmcm9tIGphdmEuY29tLCBzZWUgSmF2YSBQbGF0Zm9ybSwgU3RhbmRhcmQgRWRpdGlvbi4gRm9yIG90aGVyIHVzZXMsIHNlZSBKYXZhIChkaXNhbWJpZ3VhdGlvbikuXG4gICAgICAgICAgICAgICAgICAgICAgICBOb3QgdG8gYmUgY29uZnVzZWQgd2l0aCBKYXZhU2NyaXB0LlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgSmF2YSBpcyBhIGdlbmVyYWwgLSBwdXJwb3NlIHByb2dyYW1taW5nIGxhbmd1YWdlIHRoYXQgaXMgY2xhc3MgLSBiYXNlZCwgb2JqZWN0IC0gb3JpZW50ZWQsIGFuZCBkZXNpZ25lZCB0byBoYXZlIGFzIGZldyBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbmNpZXMgYXMgcG9zc2libGUuSXQgaXMgaW50ZW5kZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcHBsaWNhdGlvbiBkZXZlbG9wZXJzIHdyaXRlIG9uY2UsIHJ1biBhbnl3aGVyZShXT1JBKSwgWzE1XSBtZWFuaW5nIHRoYXQgY29tcGlsZWQgSmF2YSBjb2RlIGNhbiBydW4gb24gYWxsIHBsYXRmb3JtcyB0aGF0IHN1cHBvcnQgSmF2YSB3aXRob3V0IHRoZSBuZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgcmVjb21waWxhdGlvbi4gWzE2XSBKYXZhIGFwcGxpY2F0aW9ucyBhcmUgdHlwaWNhbGx5IGNvbXBpbGVkIHRvIGJ5dGVjb2RlIHRoYXQgY2FuIHJ1biBvbiBhbnkgSmF2YSB2aXJ0dWFsIG1hY2hpbmUoSlZNKSByZWdhcmRsZXNzIG9mIHRoZSB1bmRlcmx5aW5nIGNvbXB1dGVyIGFyY2hpdGVjdHVyZS5UaGUgc3ludGF4IG9mIEphdmEgaXMgc2ltaWxhciB0byBDIGFuZCBDKyssIGJ1dCBpdCBoYXMgZmV3ZXIgbG93IC0gbGV2ZWwgZmFjaWxpdGllcyB0aGFuIGVpdGhlciBvZiB0aGVtLkFzIG9mIDIwMTksIEphdmEgd2FzIG9uZSBvZiB0aGUgbW9zdCBwb3B1bGFyIHByb2dyYW1taW5nIGxhbmd1YWdlcyBpbiB1c2UgYWNjb3JkaW5nIHRvIEdpdEh1YiwgWzE3XVsxOF0gcGFydGljdWxhcmx5XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgY2xpZW50IC0gc2VydmVyIHdlYiBhcHBsaWNhdGlvbnMsIHdpdGggYSByZXBvcnRlZCA5IG1pbGxpb24gZGV2ZWxvcGVycy4gWzE5XVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEphdmEgd2FzIG9yaWdpbmFsbHkgZGV2ZWxvcGVkIGJ5IEphbWVzIEdvc2xpbmcgYXQgU3VuIE1pY3Jvc3lzdGVtcyh3aGljaCBoYXMgc2luY2UgYmVlbiBhY3F1aXJlZCBieSBPcmFjbGUpIGFuZCByZWxlYXNlZCBpbiAxOTk1IGFzIGEgY29yZSBjb21wb25lbnQgb2YgU3VuIE1pY3Jvc3lzdGVtcyAnIEphdmEgcGxhdGZvcm0uIFRoZSBvcmlnaW5hbCBhbmQgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uIEphdmEgY29tcGlsZXJzLCB2aXJ0dWFsIG1hY2hpbmVzLCBhbmQgY2xhc3MgbGlicmFyaWVzIHdlcmUgb3JpZ2luYWxseSByZWxlYXNlZCBieSBTdW4gdW5kZXIgcHJvcHJpZXRhcnkgbGljZW5zZXMuIEFzIG9mIE1heSAyMDA3LCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIHNwZWNpZmljYXRpb25zIG9mIHRoZSBKYXZhIENvbW11bml0eSBQcm9jZXNzLCBTdW4gaGFkIHJlbGljZW5zZWQgbW9zdCBvZiBpdHMgSmF2YSB0ZWNobm9sb2dpZXMgdW5kZXIgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlLiBNZWFud2hpbGUsIG90aGVycyBoYXZlIGRldmVsb3BlZCBhbHRlcm5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlc2UgU3VuIHRlY2hub2xvZ2llcywgc3VjaCBhcyB0aGUgR05VIENvbXBpbGVyIGZvciBKYXZhIChieXRlY29kZSBjb21waWxlciksIEdOVSBDbGFzc3BhdGggKHN0YW5kYXJkIGxpYnJhcmllcyksIGFuZCBJY2VkVGVhLVdlYiAoYnJvd3NlciBwbHVnaW4gZm9yIGFwcGxldHMpLlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBsYXRlc3QgdmVyc2lvbnMgYXJlIEphdmEgMTMsIHJlbGVhc2VkIGluIFNlcHRlbWJlciAyMDE5LCBhbmQgSmF2YSAxMSwgYSBjdXJyZW50bHkgc3VwcG9ydGVkIGxvbmctdGVybSBzdXBwb3J0IChMVFMpIHZlcnNpb24sIHJlbGVhc2VkIG9uIFNlcHRlbWJlciAyNSwgMjAxODsgT3JhY2xlIHJlbGVhc2VkIGZvciB0aGUgbGVnYWN5IEphdmEgOCBMVFMgdGhlIGxhc3QgZnJlZSBwdWJsaWMgdXBkYXRlIGluIEphbnVhcnkgMjAxOSBmb3IgY29tbWVyY2lhbCB1c2UsIHdoaWxlIGl0IHdpbGwgb3RoZXJ3aXNlIHN0aWxsIHN1cHBvcnQgSmF2YSA4IHdpdGggcHVibGljIHVwZGF0ZXMgZm9yIHBlcnNvbmFsIHVzZSB1cCB0byBhdCBsZWFzdCBEZWNlbWJlciAyMDIwLiBPcmFjbGUgKGFuZCBvdGhlcnMpIGhpZ2hseSByZWNvbW1lbmQgdW5pbnN0YWxsaW5nIG9sZGVyIHZlcnNpb25zIG9mIEphdmEgYmVjYXVzZSBvZiBzZXJpb3VzIHJpc2tzIGR1ZSB0byB1bnJlc29sdmVkIHNlY3VyaXR5IGlzc3Vlcy5bMjBdIFNpbmNlIEphdmEgOSAoYW5kIDEwIGFuZCAxMikgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCwgT3JhY2xlIGFkdmlzZXMgaXRzIHVzZXJzIHRvIGltbWVkaWF0ZWx5IHRyYW5zaXRpb24gdG8gdGhlIGxhdGVzdCB2ZXJzaW9uIChjdXJyZW50bHkgSmF2YSAxMykgb3IgYW4gTFRTIHJlbGVhc2UuXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJtaWRkbGVcIiAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInPlxuICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yeVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEphbWVzIEdvc2xpbmcsIE1pa2UgU2hlcmlkYW4sIGFuZCBQYXRyaWNrIE5hdWdodG9uIGluaXRpYXRlZCB0aGUgSmF2YSBsYW5ndWFnZSBwcm9qZWN0IGluIEp1bmUgMTk5MS5bMjFdIEphdmEgd2FzIG9yaWdpbmFsbHkgZGVzaWduZWQgZm9yIGludGVyYWN0aXZlIHRlbGV2aXNpb24sIGJ1dCBpdCB3YXMgdG9vIGFkdmFuY2VkIGZvciB0aGUgZGlnaXRhbCBjYWJsZSB0ZWxldmlzaW9uIGluZHVzdHJ5IGF0IHRoZSB0aW1lLlsyMl0gVGhlIGxhbmd1YWdlIHdhcyBpbml0aWFsbHkgY2FsbGVkIE9hayBhZnRlciBhbiBvYWsgdHJlZSB0aGF0IHN0b29kIG91dHNpZGUgR29zbGluZydzIG9mZmljZS4gTGF0ZXIgdGhlIHByb2plY3Qgd2VudCBieSB0aGUgbmFtZSBHcmVlbiBhbmQgd2FzIGZpbmFsbHkgcmVuYW1lZCBKYXZhLCBmcm9tIEphdmEgY29mZmVlLCB0aGUgY29mZmVlIGZyb20gSW5kb25lc2lhLlsyM10gR29zbGluZyBkZXNpZ25lZCBKYXZhIHdpdGggYSBDL0MrKy1zdHlsZSBzeW50YXggdGhhdCBzeXN0ZW0gYW5kIGFwcGxpY2F0aW9uIHByb2dyYW1tZXJzIHdvdWxkIGZpbmQgZmFtaWxpYXIuWzI0XVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN1biBNaWNyb3N5c3RlbXMgcmVsZWFzZWQgdGhlIGZpcnN0IHB1YmxpYyBpbXBsZW1lbnRhdGlvbiBhcyBKYXZhIDEuMCBpbiAxOTk2LlsyNV0gSXQgcHJvbWlzZWQgV3JpdGUgT25jZSwgUnVuIEFueXdoZXJlIChXT1JBKSBmdW5jdGlvbmFsaXR5LCBwcm92aWRpbmcgbm8tY29zdCBydW4tdGltZXMgb24gcG9wdWxhciBwbGF0Zm9ybXMuIEZhaXJseSBzZWN1cmUgYW5kIGZlYXR1cmluZyBjb25maWd1cmFibGUgc2VjdXJpdHksIGl0IGFsbG93ZWQgbmV0d29yay0gYW5kIGZpbGUtYWNjZXNzIHJlc3RyaWN0aW9ucy4gTWFqb3Igd2ViIGJyb3dzZXJzIHNvb24gaW5jb3Jwb3JhdGVkIHRoZSBhYmlsaXR5IHRvIHJ1biBKYXZhIGFwcGxldHMgd2l0aGluIHdlYiBwYWdlcywgYW5kIEphdmEgcXVpY2tseSBiZWNhbWUgcG9wdWxhci4gVGhlIEphdmEgMS4wIGNvbXBpbGVyIHdhcyByZS13cml0dGVuIGluIEphdmEgYnkgQXJ0aHVyIHZhbiBIb2ZmIHRvIGNvbXBseSBzdHJpY3RseSB3aXRoIHRoZSBKYXZhIDEuMCBsYW5ndWFnZSBzcGVjaWZpY2F0aW9uLlsyNl0gV2l0aCB0aGUgYWR2ZW50IG9mIEphdmEgMiAocmVsZWFzZWQgaW5pdGlhbGx5IGFzIEoyU0UgMS4yIGluIERlY2VtYmVyIDE5OTgg4oCTIDE5OTkpLCBuZXcgdmVyc2lvbnMgaGFkIG11bHRpcGxlIGNvbmZpZ3VyYXRpb25zIGJ1aWx0IGZvciBkaWZmZXJlbnQgdHlwZXMgb2YgcGxhdGZvcm1zLiBKMkVFIGluY2x1ZGVkIHRlY2hub2xvZ2llcyBhbmQgQVBJcyBmb3IgZW50ZXJwcmlzZSBhcHBsaWNhdGlvbnMgdHlwaWNhbGx5IHJ1biBpbiBzZXJ2ZXIgZW52aXJvbm1lbnRzLCB3aGlsZSBKMk1FIGZlYXR1cmVkIEFQSXMgb3B0aW1pemVkIGZvciBtb2JpbGUgYXBwbGljYXRpb25zLiBUaGUgZGVza3RvcCB2ZXJzaW9uIHdhcyByZW5hbWVkIEoyU0UuIEluIDIwMDYsIGZvciBtYXJrZXRpbmcgcHVycG9zZXMsIFN1biByZW5hbWVkIG5ldyBKMiB2ZXJzaW9ucyBhcyBKYXZhIEVFLCBKYXZhIE1FLCBhbmQgSmF2YSBTRSwgcmVzcGVjdGl2ZWx5LlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwibWlkZGxlXCIgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByaW5jaXBsZXNcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAxLkl0IG11c3QgYmUgcm9idXN0IGFuZCBzZWN1cmUuXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgMi5JdCBtdXN0IGJlIGFyY2hpdGVjdHVyZS1uZXV0cmFsIGFuZCBwb3J0YWJsZS5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAzLkl0IG11c3QgZXhlY3V0ZSB3aXRoIGhpZ2ggcGVyZm9ybWFuY2UuXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgNC5JdCBtdXN0IGJlIGludGVycHJldGVkLCB0aHJlYWRlZCwgYW5kIGR5bmFtaWMuXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJtaWRkbGVcIiAvPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInPlxuICAgICAgICAgICAgICAgICAgICAgICAgVmVyc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAqSkRLIDEuMCAoSmFudWFyeSAyMywgMTk5NilbMzddXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgKkpESyAxLjEgKEZlYnJ1YXJ5IDE5LCAxOTk2KVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICpKMlNFIDEuMiAoRGVjZW1iZXIgOCwgMTk5OClcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAqSjJTRSAxLjMgKE1heSA4LCAyMDAwKVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICpKMlNFIDEuNCAoRmVicnVhcnkgNiwgMjAwMilcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAqSjJTRSA1LjAgKFNlcHRlbWJlciAzMCwgMjAwNClcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAqSmF2YSBTRSA2IChEZWNlbWJlciAxMSwgMjAwNilcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAqSmF2YSBTRSA3IChKdWx5IDI4LCAyMDExKVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICpKYXZhIFNFIDggKE1hcmNoIDE4LCAyMDE0KVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICpKYXZhIFNFIDkgKFNlcHRlbWJlciAyMSwgMjAxNylcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAqSmF2YSBTRSAxMCAoTWFyY2ggMjAsIDIwMTgpXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgKkphdmEgU0UgMTEgKFNlcHRlbWJlciAyNSwgMjAxOClbMzhdXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgKkphdmEgU0UgMTIgKE1hcmNoIDE5LCAyMDE5KVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwibWlkZGxlXCIgLz5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2gyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRpb25zXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgSmF2YSBDYXJkIGZvciBzbWFydC1jYXJkcy5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICBKYXZhIFBsYXRmb3JtLCBNaWNybyBFZGl0aW9uIChKYXZhIE1FKSDigJMgdGFyZ2V0aW5nIGVudmlyb25tZW50cyB3aXRoIGxpbWl0ZWQgcmVzb3VyY2VzLlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEphdmEgUGxhdGZvcm0sIFN0YW5kYXJkIEVkaXRpb24gKEphdmEgU0UpIOKAkyB0YXJnZXRpbmcgd29ya3N0YXRpb24gZW52aXJvbm1lbnRzLlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEphdmEgUGxhdGZvcm0sIEVudGVycHJpc2UgRWRpdGlvbiAoSmF2YSBFRSkg4oCTIHRhcmdldGluZyBsYXJnZSBkaXN0cmlidXRlZCBlbnRlcnByaXNlIG9yIEludGVybmV0IGVudmlyb25tZW50cy5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMic+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeGVjdXRpb24gc3lzdGVtXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgSmF2YSBKVk0gYW5kIEJ5dGVjb2RlXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICBPbmUgZGVzaWduIGdvYWwgb2YgSmF2YSBpcyBwb3J0YWJpbGl0eSwgd2hpY2ggbWVhbnMgdGhhdCBwcm9ncmFtcyB3cml0dGVuIGZvciB0aGUgSmF2YSBwbGF0Zm9ybSBtdXN0IHJ1biBzaW1pbGFybHkgb24gYW55IGNvbWJpbmF0aW9uIG9mIGhhcmR3YXJlIGFuZCBvcGVyYXRpbmcgc3lzdGVtIHdpdGggYWRlcXVhdGUgcnVuIHRpbWUgc3VwcG9ydC4gVGhpcyBpcyBhY2hpZXZlZCBieSBjb21waWxpbmcgdGhlIEphdmEgbGFuZ3VhZ2UgY29kZSB0byBhbiBpbnRlcm1lZGlhdGUgcmVwcmVzZW50YXRpb24gY2FsbGVkIEphdmEgYnl0ZWNvZGUsIGluc3RlYWQgb2YgZGlyZWN0bHkgdG8gYXJjaGl0ZWN0dXJlLXNwZWNpZmljIG1hY2hpbmUgY29kZS4gSmF2YSBieXRlY29kZSBpbnN0cnVjdGlvbnMgYXJlIGFuYWxvZ291cyB0byBtYWNoaW5lIGNvZGUsIGJ1dCB0aGV5IGFyZSBpbnRlbmRlZCB0byBiZSBleGVjdXRlZCBieSBhIHZpcnR1YWwgbWFjaGluZSAoVk0pIHdyaXR0ZW4gc3BlY2lmaWNhbGx5IGZvciB0aGUgaG9zdCBoYXJkd2FyZS4gRW5kIHVzZXJzIGNvbW1vbmx5IHVzZSBhIEphdmEgUnVudGltZSBFbnZpcm9ubWVudCAoSlJFKSBpbnN0YWxsZWQgb24gdGhlaXIgbWFjaGluZSBmb3Igc3RhbmRhbG9uZSBKYXZhIGFwcGxpY2F0aW9ucywgb3IgaW4gYSB3ZWIgYnJvd3NlciBmb3IgSmF2YSBhcHBsZXRzLlxuXG5TdGFuZGFyZCBsaWJyYXJpZXMgcHJvdmlkZSBhIGdlbmVyaWMgd2F5IHRvIGFjY2VzcyBob3N0LXNwZWNpZmljIGZlYXR1cmVzIHN1Y2ggYXMgZ3JhcGhpY3MsIHRocmVhZGluZywgYW5kIG5ldHdvcmtpbmcuXG5cblRoZSB1c2Ugb2YgdW5pdmVyc2FsIGJ5dGVjb2RlIG1ha2VzIHBvcnRpbmcgc2ltcGxlLiBIb3dldmVyLCB0aGUgb3ZlcmhlYWQgb2YgaW50ZXJwcmV0aW5nIGJ5dGVjb2RlIGludG8gbWFjaGluZSBpbnN0cnVjdGlvbnMgbWFkZSBpbnRlcnByZXRlZCBwcm9ncmFtcyBhbG1vc3QgYWx3YXlzIHJ1biBtb3JlIHNsb3dseSB0aGFuIG5hdGl2ZSBleGVjdXRhYmxlcy4gSnVzdC1pbi10aW1lIChKSVQpIGNvbXBpbGVycyB0aGF0IGNvbXBpbGUgYnl0ZS1jb2RlcyB0byBtYWNoaW5lIGNvZGUgZHVyaW5nIHJ1bnRpbWUgd2VyZSBpbnRyb2R1Y2VkIGZyb20gYW4gZWFybHkgc3RhZ2UuIEphdmEgaXRzZWxmIGlzIHBsYXRmb3JtLWluZGVwZW5kZW50IGFuZCBpcyBhZGFwdGVkIHRvIHRoZSBwYXJ0aWN1bGFyIHBsYXRmb3JtIGl0IGlzIHRvIHJ1biBvbiBieSBhIEphdmEgdmlydHVhbCBtYWNoaW5lIGZvciBpdCwgd2hpY2ggdHJhbnNsYXRlcyB0aGUgSmF2YSBieXRlY29kZSBpbnRvIHRoZSBwbGF0Zm9ybSdzIG1hY2hpbmUgbGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgIFByb2dyYW1zIHdyaXR0ZW4gaW4gSmF2YSBoYXZlIGEgcmVwdXRhdGlvbiBmb3IgYmVpbmcgc2xvd2VyIGFuZCByZXF1aXJpbmcgbW9yZSBtZW1vcnkgdGhhbiB0aG9zZSB3cml0dGVuIGluIEMrKy5bNDRdWzQ1XSBIb3dldmVyLCBKYXZhIHByb2dyYW1zJyBleGVjdXRpb24gc3BlZWQgaW1wcm92ZWQgc2lnbmlmaWNhbnRseSB3aXRoIHRoZSBpbnRyb2R1Y3Rpb24gb2YganVzdC1pbi10aW1lIGNvbXBpbGF0aW9uIGluIDE5OTcvMTk5OCBmb3IgSmF2YSAxLjEsWzQ2XSB0aGUgYWRkaXRpb24gb2YgbGFuZ3VhZ2UgZmVhdHVyZXMgc3VwcG9ydGluZyBiZXR0ZXIgY29kZSBhbmFseXNpcyAoc3VjaCBhcyBpbm5lciBjbGFzc2VzLCB0aGUgU3RyaW5nQnVpbGRlciBjbGFzcywgb3B0aW9uYWwgYXNzZXJ0aW9ucywgZXRjLiksIGFuZCBvcHRpbWl6YXRpb25zIGluIHRoZSBKYXZhIHZpcnR1YWwgbWFjaGluZSwgc3VjaCBhcyBIb3RTcG90IGJlY29taW5nIHRoZSBkZWZhdWx0IGZvciBTdW4ncyBKVk0gaW4gMjAwMC4gV2l0aCBKYXZhIDEuNSwgdGhlIHBlcmZvcm1hbmNlIHdhcyBpbXByb3ZlZCB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgamF2YS51dGlsLmNvbmN1cnJlbnQgcGFja2FnZSwgaW5jbHVkaW5nIGxvY2sgZnJlZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIENvbmN1cnJlbnRNYXBzIGFuZCBvdGhlciBtdWx0aS1jb3JlIGNvbGxlY3Rpb25zLCBhbmQgaXQgd2FzIGltcHJvdmVkIGZ1cnRoZXIgd2l0aCBKYXZhIDEuNi5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm9uLUpWTVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgcGxhdGZvcm1zIG9mZmVyIGRpcmVjdCBoYXJkd2FyZSBzdXBwb3J0IGZvciBKYXZhOyB0aGVyZSBhcmUgbWljcm8gY29udHJvbGxlcnMgdGhhdCBjYW4gcnVuIEphdmEgYnl0ZWNvZGUgaW4gaGFyZHdhcmUgaW5zdGVhZCBvZiBhIHNvZnR3YXJlIEphdmEgdmlydHVhbCBtYWNoaW5lLFs0N10gYW5kIHNvbWUgQVJNLWJhc2VkIHByb2Nlc3NvcnMgY291bGQgaGF2ZSBoYXJkd2FyZSBzdXBwb3J0IGZvciBleGVjdXRpbmcgSmF2YSBieXRlY29kZSB0aHJvdWdoIHRoZWlyIEphemVsbGUgb3B0aW9uLCB0aG91Z2ggc3VwcG9ydCBoYXMgbW9zdGx5IGJlZW4gZHJvcHBlZCBpbiBjdXJyZW50IGltcGxlbWVudGF0aW9ucyBvZiBBUk0uXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgQXV0b21hdGljIG1lbW9yeSBtYW5hZ2VtZW50XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEphdmEgdXNlcyBhbiBhdXRvbWF0aWMgZ2FyYmFnZSBjb2xsZWN0b3IgdG8gbWFuYWdlIG1lbW9yeSBpbiB0aGUgb2JqZWN0IGxpZmVjeWNsZS4gVGhlIHByb2dyYW1tZXIgZGV0ZXJtaW5lcyB3aGVuIG9iamVjdHMgYXJlIGNyZWF0ZWQsIGFuZCB0aGUgSmF2YSBydW50aW1lIGlzIHJlc3BvbnNpYmxlIGZvciByZWNvdmVyaW5nIHRoZSBtZW1vcnkgb25jZSBvYmplY3RzIGFyZSBubyBsb25nZXIgaW4gdXNlLiBPbmNlIG5vIHJlZmVyZW5jZXMgdG8gYW4gb2JqZWN0IHJlbWFpbiwgdGhlIHVucmVhY2hhYmxlIG1lbW9yeSBiZWNvbWVzIGVsaWdpYmxlIHRvIGJlIGZyZWVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGdhcmJhZ2UgY29sbGVjdG9yLiBTb21ldGhpbmcgc2ltaWxhciB0byBhIG1lbW9yeSBsZWFrIG1heSBzdGlsbCBvY2N1ciBpZiBhIHByb2dyYW1tZXIncyBjb2RlIGhvbGRzIGEgcmVmZXJlbmNlIHRvIGFuIG9iamVjdCB0aGF0IGlzIG5vIGxvbmdlciBuZWVkZWQsIHR5cGljYWxseSB3aGVuIG9iamVjdHMgdGhhdCBhcmUgbm8gbG9uZ2VyIG5lZWRlZCBhcmUgc3RvcmVkIGluIGNvbnRhaW5lcnMgdGhhdCBhcmUgc3RpbGwgaW4gdXNlLiBJZiBtZXRob2RzIGZvciBhIG5vbi1leGlzdGVudCBvYmplY3QgYXJlIGNhbGxlZCwgYSBudWxsIHBvaW50ZXIgZXhjZXB0aW9uIGlzIHRocm93bi5bNDhdWzQ5XVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBPbmUgb2YgdGhlIGlkZWFzIGJlaGluZCBKYXZhJ3MgYXV0b21hdGljIG1lbW9yeSBtYW5hZ2VtZW50IG1vZGVsIGlzIHRoYXQgcHJvZ3JhbW1lcnMgY2FuIGJlIHNwYXJlZCB0aGUgYnVyZGVuIG9mIGhhdmluZyB0byBwZXJmb3JtIG1hbnVhbCBtZW1vcnkgbWFuYWdlbWVudC4gSW4gc29tZSBsYW5ndWFnZXMsIG1lbW9yeSBmb3IgdGhlIGNyZWF0aW9uIG9mIG9iamVjdHMgaXMgaW1wbGljaXRseSBhbGxvY2F0ZWQgb24gdGhlIHN0YWNrIG9yIGV4cGxpY2l0bHkgYWxsb2NhdGVkIGFuZCBkZWFsbG9jYXRlZCBmcm9tIHRoZSBoZWFwLiBJbiB0aGUgbGF0dGVyIGNhc2UsIHRoZSByZXNwb25zaWJpbGl0eSBvZiBtYW5hZ2luZyBtZW1vcnkgcmVzaWRlcyB3aXRoIHRoZSBwcm9ncmFtbWVyLiBJZiB0aGUgcHJvZ3JhbSBkb2VzIG5vdCBkZWFsbG9jYXRlIGFuIG9iamVjdCwgYSBtZW1vcnkgbGVhayBvY2N1cnMuIElmIHRoZSBwcm9ncmFtIGF0dGVtcHRzIHRvIGFjY2VzcyBvciBkZWFsbG9jYXRlIG1lbW9yeSB0aGF0IGhhcyBhbHJlYWR5IGJlZW4gZGVhbGxvY2F0ZWQsIHRoZSByZXN1bHQgaXMgdW5kZWZpbmVkIGFuZCBkaWZmaWN1bHQgdG8gcHJlZGljdCwgYW5kIHRoZSBwcm9ncmFtIGlzIGxpa2VseSB0byBiZWNvbWUgdW5zdGFibGUgb3IgY3Jhc2guIFRoaXMgY2FuIGJlIHBhcnRpYWxseSByZW1lZGllZCBieSB0aGUgdXNlIG9mIHNtYXJ0IHBvaW50ZXJzLCBidXQgdGhlc2UgYWRkIG92ZXJoZWFkIGFuZCBjb21wbGV4aXR5LiBOb3RlIHRoYXQgZ2FyYmFnZSBjb2xsZWN0aW9uIGRvZXMgbm90IHByZXZlbnQgbG9naWNhbCBtZW1vcnkgbGVha3MsIGkuZS4gdGhvc2Ugd2hlcmUgdGhlIG1lbW9yeSBpcyBzdGlsbCByZWZlcmVuY2VkIGJ1dCBuZXZlciB1c2VkLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBHYXJiYWdlIGNvbGxlY3Rpb24gbWF5IGhhcHBlbiBhdCBhbnkgdGltZS4gSWRlYWxseSwgaXQgd2lsbCBvY2N1ciB3aGVuIGEgcHJvZ3JhbSBpcyBpZGxlLiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIHRyaWdnZXJlZCBpZiB0aGVyZSBpcyBpbnN1ZmZpY2llbnQgZnJlZSBtZW1vcnkgb24gdGhlIGhlYXAgdG8gYWxsb2NhdGUgYSBuZXcgb2JqZWN0OyB0aGlzIGNhbiBjYXVzZSBhIHByb2dyYW0gdG8gc3RhbGwgbW9tZW50YXJpbHkuIEV4cGxpY2l0IG1lbW9yeSBtYW5hZ2VtZW50IGlzIG5vdCBwb3NzaWJsZSBpbiBKYXZhLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBKYXZhIGRvZXMgbm90IHN1cHBvcnQgQy9DKysgc3R5bGUgcG9pbnRlciBhcml0aG1ldGljLCB3aGVyZSBvYmplY3QgYWRkcmVzc2VzIGNhbiBiZSBhcml0aG1ldGljYWxseSBtYW5pcHVsYXRlZCAoZS5nLiBieSBhZGRpbmcgb3Igc3VidHJhY3RpbmcgYW4gb2Zmc2V0KS4gVGhpcyBhbGxvd3MgdGhlIGdhcmJhZ2UgY29sbGVjdG9yIHRvIHJlbG9jYXRlIHJlZmVyZW5jZWQgb2JqZWN0cyBhbmQgZW5zdXJlcyB0eXBlIHNhZmV0eSBhbmQgc2VjdXJpdHkuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzIGluIEMrKyBhbmQgc29tZSBvdGhlciBvYmplY3Qtb3JpZW50ZWQgbGFuZ3VhZ2VzLCB2YXJpYWJsZXMgb2YgSmF2YSdzIHByaW1pdGl2ZSBkYXRhIHR5cGVzIGFyZSBlaXRoZXIgc3RvcmVkIGRpcmVjdGx5IGluIGZpZWxkcyAoZm9yIG9iamVjdHMpIG9yIG9uIHRoZSBzdGFjayAoZm9yIG1ldGhvZHMpIHJhdGhlciB0aGFuIG9uIHRoZSBoZWFwLCBhcyBpcyBjb21tb25seSB0cnVlIGZvciBub24tcHJpbWl0aXZlIGRhdGEgdHlwZXMgKGJ1dCBzZWUgZXNjYXBlIGFuYWx5c2lzKS4gVGhpcyB3YXMgYSBjb25zY2lvdXMgZGVjaXNpb24gYnkgSmF2YSdzIGRlc2lnbmVycyBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cblxuICAgICAgICAgICAgICAgICAgICAgICAgSmF2YSBjb250YWlucyBtdWx0aXBsZSB0eXBlcyBvZiBnYXJiYWdlIGNvbGxlY3RvcnMuIEJ5IGRlZmF1bHQsIEhvdFNwb3QgdXNlcyB0aGUgcGFyYWxsZWwgc2NhdmVuZ2UgZ2FyYmFnZSBjb2xsZWN0b3IuWzUwXSBIb3dldmVyLCB0aGVyZSBhcmUgYWxzbyBzZXZlcmFsIG90aGVyIGdhcmJhZ2UgY29sbGVjdG9ycyB0aGF0IGNhbiBiZSB1c2VkIHRvIG1hbmFnZSB0aGUgaGVhcC4gRm9yIDkwJSBvZiBhcHBsaWNhdGlvbnMgaW4gSmF2YSwgdGhlIENvbmN1cnJlbnQgTWFyay1Td2VlcCAoQ01TKSBnYXJiYWdlIGNvbGxlY3RvciBpcyBzdWZmaWNpZW50Lls1MV0gT3JhY2xlIGFpbXMgdG8gcmVwbGFjZSBDTVMgd2l0aCB0aGUgR2FyYmFnZS1GaXJzdCBDb2xsZWN0b3IgKEcxKS5bNTJdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEhhdmluZyBzb2x2ZWQgdGhlIG1lbW9yeSBtYW5hZ2VtZW50IHByb2JsZW0gZG9lcyBub3QgcmVsaWV2ZSB0aGUgcHJvZ3JhbW1lciBvZiB0aGUgYnVyZGVuIG9mIGhhbmRsaW5nIHByb3Blcmx5IG90aGVyIGtpbmQgb2YgcmVzb3VyY2VzLCBsaWtlIG5ldHdvcmsgb3IgZGF0YWJhc2UgY29ubmVjdGlvbnMsIGZpbGUgaGFuZGxlcywgZXRjLiwgZXNwZWNpYWxseSBpbiB0aGUgcHJlc2VuY2Ugb2YgZXhjZXB0aW9ucy4gUGFyYWRveGljYWxseSwgdGhlIHByZXNlbmNlIG9mIGEgZ2FyYmFnZSBjb2xsZWN0b3IgaGFzIGZhZGVkIHRoZSBuZWNlc3NpdHkgb2YgaGF2aW5nIGFuIGV4cGxpY2l0IGRlc3RydWN0b3IgbWV0aG9kIGluIHRoZSBjbGFzc2VzLCB0aHVzIHJlbmRlcmluZyB0aGUgbWFuYWdlbWVudCBvZiB0aGVzZSBvdGhlciByZXNvdXJjZXMgbW9yZSBkaWZmaWN1bHQuW2NpdGF0aW9uIG5lZWRlZF1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oYW5kbGVCdXR0b259IG9uQ2xpY2s9eyhlKSA9PiB7IGhhbmRsZVN1Ym1pdChlLCBwcm9wcywgc3RhcnRUaW1lKSB9fT5cbiAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQWpDQTtBQUNBO0FBdUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE4QkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBS0E7QUFBQTtBQU9BO0FBQUE7QUFRQTtBQUFBO0FBS0E7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFTQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/GeneralMaterials/Content.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Definitions.js":
/*!************************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Definitions.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Definitions; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Data_courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Data/courses */ \"./React/Shared/Data/courses.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props, startTime, score) {\n    e.preventDefault();\n    score *= 2;\n    var time = Math.round((Date.now() - startTime) / 1000 / 60);\n    var authToken = sessionStorage.getItem('auth');\n\n    try {\n      var res = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch('http://127.0.0.1:8000/api/v1/student/ml/post/' + authToken, {\n        \"D\": score,\n        \"D_T\": time\n      });\n\n      if (res.status === 200) {\n        console.log('Successfully Pushed Activity Data');\n      } else {\n        alert(\"Problem While Pushing\");\n      }\n    } catch (err) {\n      alert(err);\n    }\n\n    time = time >= 9 ? 9 : time;\n    console.log(\"score\" + score);\n    console.log(\"time\" + time);\n    props.history.push('/course/' + props.match.params.course + '/Activity');\n  });\n\n  return function handleSubmit(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction Definitions(props) {\n  var classes = useStyles();\n  var startTime = Date.now();\n  var [java, setJava] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleJava = () => {\n    setJava(true);\n  };\n\n  var [jvm, setJvm] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleJvm = () => {\n    setJvm(true);\n  };\n\n  var [jdk, setJdk] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleJdk = () => {\n    setJdk(true);\n  };\n\n  var [jre, setJre] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleJre = () => {\n    setJre(true);\n  };\n\n  var [jar, setJar] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleJar = () => {\n    setJar(true);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"List\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], {\n    onClick: handleJava\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h5\",\n    gutterBottom: true\n  }, \"Java\")), java ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\",\n    gutterBottom: true\n  }, \"Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\",\n    gutterBottom: true\n  }, \"The Java syntax is similar to C++, but is strictly an object-oriented programming language. For example, most Java programs contain classes, which are used to define objects, and methods, which are assigned to individual classes. Java is also known for being more strict than C++, meaning variables and functions must be explicitly defined. This means Java source code may produce errors or \\\"exceptions\\\" more easily than other languages, but it also limits other types of errors that may be caused by undefined variables or unassigned types.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], {\n    onClick: handleJvm\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"JVM\")), jvm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"JVM(Java Virtual Machine) acts as a run-time engine to run Java applications. JVM is the one that actually calls the main method present in a java code. JVM is a part of JRE(Java Runtime Environment).\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java applications are called WORA (Write Once Run Anywhere). This means a programmer can develop Java code on one system and can expect it to run on any other Java enabled system without any adjustment. This is all possible because of JVM.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"When we compile a .java file, .class files(contains byte-code) with the same class names present in .java file are generated by the Java compiler. This .class file goes into various steps when we run it. These steps together describe the whole JVM.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], {\n    onClick: handleJre\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"JRE\")), jre ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"JRE stands for \\u201CJava Runtime Environment\\u201D and may also be written as \\u201CJava RTE.\\u201D The Java Runtime Environment provides the minimum requirements for executing a Java application; it consists of the Java Virtual Machine (JVM), core classes, and supporting files.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java Runtime Environment (to say JRE) is an installation package which provides environment to only run(not develop) the java program(or application)onto your machine. JRE is only used by them who only wants to run the Java Programs i.e. end users of your system.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], {\n    onClick: handleJdk\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"JDK\")), jdk ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"The Java Development Kit (JDK) is a software development environment used for developing Java applications and applets. It includes the Java Runtime Environment (JRE), an interpreter/loader (Java), a compiler (javac), an archiver (jar), a documentation generator (Javadoc) and other tools needed in Java development.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java Development Kit (in short JDK) is Kit which provides the environment to develop and execute(run) the Java program. JDK is a kit(or package) which includes two things Development Tools(to provide an environment to develop your java programs) JRE (to execute your java program). became a popular choice for creating web applications.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], {\n    onClick: handleJar\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"JAR\")), jar ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Divider\"], {\n    variant: \"middle\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      var score = 0;\n      java ? score++ : score;\n      jdk ? score++ : score;\n      jre ? score++ : score;\n      jar ? score++ : score;\n      jvm ? score++ : score;\n      handleSubmit(e, props, startTime, score);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvR2VuZXJhbE1hdGVyaWFscy9EZWZpbml0aW9ucy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9Db21wb25lbnRzL0NvdXJzZS9HZW5lcmFsTWF0ZXJpYWxzL0RlZmluaXRpb25zLmpzPzIxNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY291cnNlcyBmcm9tICcuLi8uLi8uLi9EYXRhL2NvdXJzZXMnXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBcbiAgICBQYXBlciwgXG4gICAgbWFrZVN0eWxlcywgXG4gICAgQnV0dG9uLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgRGl2aWRlcixcbiAgICBDb250YWluZXIsfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gICAgaWNvbjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICBsaW5rIDoge1xuICAgICAgdGV4dERlY29yYXRpb24gOiAnbm9uZScsXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICBmbG9hdDoncmlnaHQnXG4gICAgICB9LFxuICAgIGhlcm9Db250ZW50OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNiksXG4gICAgfSxcbiAgICBoZXJvQnV0dG9uczoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIFxuICAgIH0sXG4gICAgY2FyZEdyaWQ6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIGNhcmRNZWRpYToge1xuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcbiAgICB9LFxuICAgIGNhcmRDb250ZW50OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgIH0sXG4gICAgVGV4dCA6IHtcbiAgICAgICAgZGlzcGxheSA6ICdibG9jaydcbiAgICB9XG4gIH0pKTtcblxuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSxwcm9wcyxzdGFydFRpbWUsc2NvcmUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzY29yZSo9IDJcbiAgICBsZXQgdGltZSA9IE1hdGgucm91bmQoKChEYXRlLm5vdygpIC0gc3RhcnRUaW1lKS8xMDAwKS82MClcblxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucGF0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdjEvc3R1ZGVudC9tbC9wb3N0LycrYXV0aFRva2VuLFxuICAgICAgICB7XG4gICAgICAgICAgXCJEXCIgOiBzY29yZSxcbiAgICAgICAgICBcIkRfVFwiIDogIHRpbWVcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBQdXNoZWQgQWN0aXZpdHkgRGF0YScpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiUHJvYmxlbSBXaGlsZSBQdXNoaW5nXCIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoKGVyciApe1xuICAgICAgICBhbGVydChlcnIpXG4gICAgICB9XG5cbiAgICB0aW1lID0gdGltZSA+PSA5ID8gOSA6IHRpbWVcbiAgICBjb25zb2xlLmxvZyhcInNjb3JlXCIrc2NvcmUpXG4gICAgY29uc29sZS5sb2coXCJ0aW1lXCIrdGltZSlcblxuICAgIHByb3BzLmhpc3RvcnkucHVzaCggICcvY291cnNlLycrIHByb3BzLm1hdGNoLnBhcmFtcy5jb3Vyc2UgKycvQWN0aXZpdHknKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWZpbml0aW9ucyAocHJvcHMpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgY29uc3QgW2phdmEsc2V0SmF2YV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUphdmEgPSAoKSA9PiB7XG4gICAgICAgIHNldEphdmEodHJ1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBbanZtLHNldEp2bV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUp2bSA9ICgpID0+IHtcbiAgICAgICAgc2V0SnZtKHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgW2pkayxzZXRKZGtdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBoYW5kbGVKZGsgPSAoKSA9PiB7XG4gICAgICAgIHNldEpkayh0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IFtqcmUsc2V0SnJlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgaGFuZGxlSnJlID0gKCkgPT4ge1xuICAgICAgICBzZXRKcmUodHJ1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBbamFyLHNldEphcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUphciA9ICgpID0+IHtcbiAgICAgICAgc2V0SmFyKHRydWUpXG4gICAgfVxuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nc20nPlxuICAgICAgICAgICAgPGZvcm0gIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgPExpc3QgPlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9CdXR0b25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBvbkNsaWNrID0geyBoYW5kbGVKYXZhIH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBndXR0ZXJCb3R0b20gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKYXZhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGphdmEgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MScgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEphdmEgaXMgYSBoaWdoLWxldmVsIHByb2dyYW1taW5nIGxhbmd1YWdlIGRldmVsb3BlZCBieSBTdW4gTWljcm9zeXN0ZW1zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IHdhcyBvcmlnaW5hbGx5IGRlc2lnbmVkIGZvciBkZXZlbG9waW5nIHByb2dyYW1zIGZvciBzZXQtdG9wIGJveGVzIGFuZCBoYW5kaGVsZCBkZXZpY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dCBsYXRlciBiZWNhbWUgYSBwb3B1bGFyIGNob2ljZSBmb3IgY3JlYXRpbmcgd2ViIGFwcGxpY2F0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgSmF2YSBzeW50YXggaXMgc2ltaWxhciB0byBDKyssIGJ1dCBpcyBzdHJpY3RseSBhbiBvYmplY3Qtb3JpZW50ZWQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBleGFtcGxlLCBtb3N0IEphdmEgcHJvZ3JhbXMgY29udGFpbiBjbGFzc2VzLCB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgb2JqZWN0cywgYW5kIG1ldGhvZHMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWNoIGFyZSBhc3NpZ25lZCB0byBpbmRpdmlkdWFsIGNsYXNzZXMuIEphdmEgaXMgYWxzbyBrbm93biBmb3IgYmVpbmcgbW9yZSBzdHJpY3QgdGhhbiBDKyssIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYW5pbmcgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnMgbXVzdCBiZSBleHBsaWNpdGx5IGRlZmluZWQuIFRoaXMgbWVhbnMgSmF2YSBzb3VyY2UgY29kZSBtYXkgcHJvZHVjZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgb3IgXCJleGNlcHRpb25zXCIgbW9yZSBlYXNpbHkgdGhhbiBvdGhlciBsYW5ndWFnZXMsIGJ1dCBpdCBhbHNvIGxpbWl0cyBvdGhlciB0eXBlcyBvZiBlcnJvcnMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBtYXkgYmUgY2F1c2VkIGJ5IHVuZGVmaW5lZCB2YXJpYWJsZXMgb3IgdW5hc3NpZ25lZCB0eXBlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0J1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG9uQ2xpY2sgPSB7IGhhbmRsZUp2bSB9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpWTSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsganZtID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpWTShKYXZhIFZpcnR1YWwgTWFjaGluZSkgYWN0cyBhcyBhIHJ1bi10aW1lIGVuZ2luZSB0byBydW4gSmF2YSBhcHBsaWNhdGlvbnMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpWTSBpcyB0aGUgb25lIHRoYXQgYWN0dWFsbHkgY2FsbHMgdGhlIG1haW4gbWV0aG9kIHByZXNlbnQgaW4gYSBqYXZhIGNvZGUuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpWTSBpcyBhIHBhcnQgb2YgSlJFKEphdmEgUnVudGltZSBFbnZpcm9ubWVudCkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKYXZhIGFwcGxpY2F0aW9ucyBhcmUgY2FsbGVkIFdPUkEgKFdyaXRlIE9uY2UgUnVuIEFueXdoZXJlKS4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBtZWFucyBhIHByb2dyYW1tZXIgY2FuIGRldmVsb3AgSmF2YSBjb2RlIG9uIG9uZSBzeXN0ZW0gYW5kIGNhbiBleHBlY3QgaXQgdG8gcnVuIG9uIGFueSBvdGhlciBKYXZhIGVuYWJsZWQgc3lzdGVtIHdpdGhvdXQgYW55IGFkanVzdG1lbnQuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYWxsIHBvc3NpYmxlIGJlY2F1c2Ugb2YgSlZNLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB3ZSBjb21waWxlIGEgLmphdmEgZmlsZSwgLmNsYXNzIGZpbGVzKGNvbnRhaW5zIGJ5dGUtY29kZSkgd2l0aCB0aGUgc2FtZSBjbGFzcyBuYW1lcyBwcmVzZW50IGluIC5qYXZhIGZpbGUgYXJlIGdlbmVyYXRlZCBieSB0aGUgSmF2YSBjb21waWxlci4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyAuY2xhc3MgZmlsZSBnb2VzIGludG8gdmFyaW91cyBzdGVwcyB3aGVuIHdlIHJ1biBpdC4gVGhlc2Ugc3RlcHMgdG9nZXRoZXIgZGVzY3JpYmUgdGhlIHdob2xlIEpWTS4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9CdXR0b25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBvbkNsaWNrID0geyBoYW5kbGVKcmUgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpSRSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsganJlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpSRSBzdGFuZHMgZm9yIOKAnEphdmEgUnVudGltZSBFbnZpcm9ubWVudOKAnSBhbmQgbWF5IGFsc28gYmUgd3JpdHRlbiBhcyDigJxKYXZhIFJURS7igJ0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEphdmEgUnVudGltZSBFbnZpcm9ubWVudCBwcm92aWRlcyB0aGUgbWluaW11bSByZXF1aXJlbWVudHMgZm9yIGV4ZWN1dGluZyBhIEphdmEgYXBwbGljYXRpb247IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0IGNvbnNpc3RzIG9mIHRoZSBKYXZhIFZpcnR1YWwgTWFjaGluZSAoSlZNKSwgY29yZSBjbGFzc2VzLCBhbmQgc3VwcG9ydGluZyBmaWxlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEphdmEgUnVudGltZSBFbnZpcm9ubWVudCAodG8gc2F5IEpSRSkgaXMgYW4gaW5zdGFsbGF0aW9uIHBhY2thZ2Ugd2hpY2ggcHJvdmlkZXMgZW52aXJvbm1lbnQgdG8gb25seSBydW4obm90IGRldmVsb3ApIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBqYXZhIHByb2dyYW0ob3IgYXBwbGljYXRpb24pb250byB5b3VyIG1hY2hpbmUuIEpSRSBpcyBvbmx5IHVzZWQgYnkgdGhlbSB3aG8gb25seSB3YW50cyB0byBydW4gdGhlIEphdmEgUHJvZ3JhbXMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaS5lLiBlbmQgdXNlcnMgb2YgeW91ciBzeXN0ZW0uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9CdXR0b25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBvbkNsaWNrID0geyBoYW5kbGVKZGsgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpESyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgamRrID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBKYXZhIERldmVsb3BtZW50IEtpdCAoSkRLKSBpcyBhIHNvZnR3YXJlIGRldmVsb3BtZW50IGVudmlyb25tZW50IHVzZWQgZm9yIGRldmVsb3BpbmcgSmF2YSBhcHBsaWNhdGlvbnMgYW5kIGFwcGxldHMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IGluY2x1ZGVzIHRoZSBKYXZhIFJ1bnRpbWUgRW52aXJvbm1lbnQgKEpSRSksIGFuIGludGVycHJldGVyL2xvYWRlciAoSmF2YSksIGEgY29tcGlsZXIgKGphdmFjKSwgYW4gYXJjaGl2ZXIgKGphciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgZG9jdW1lbnRhdGlvbiBnZW5lcmF0b3IgKEphdmFkb2MpIGFuZCBvdGhlciB0b29scyBuZWVkZWQgaW4gSmF2YSBkZXZlbG9wbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEphdmEgRGV2ZWxvcG1lbnQgS2l0IChpbiBzaG9ydCBKREspIGlzIEtpdCB3aGljaCBwcm92aWRlcyB0aGUgZW52aXJvbm1lbnQgdG8gZGV2ZWxvcCBhbmQgZXhlY3V0ZShydW4pIHRoZSBKYXZhIHByb2dyYW0uIEpESyBpcyBhIGtpdChvciBwYWNrYWdlKSB3aGljaCBpbmNsdWRlcyB0d28gdGhpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcG1lbnQgVG9vbHModG8gcHJvdmlkZSBhbiBlbnZpcm9ubWVudCB0byBkZXZlbG9wIHlvdXIgamF2YSBwcm9ncmFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKUkUgKHRvIGV4ZWN1dGUgeW91ciBqYXZhIHByb2dyYW0pLiBiZWNhbWUgYSBwb3B1bGFyIGNob2ljZSBmb3IgY3JlYXRpbmcgd2ViIGFwcGxpY2F0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gb25DbGljayA9IHsgaGFuZGxlSmFyIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKQVIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGphciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKYXZhIGlzIGEgaGlnaC1sZXZlbCBwcm9ncmFtbWluZyBsYW5ndWFnZSBkZXZlbG9wZWQgYnkgU3VuIE1pY3Jvc3lzdGVtcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCB3YXMgb3JpZ2luYWxseSBkZXNpZ25lZCBmb3IgZGV2ZWxvcGluZyBwcm9ncmFtcyBmb3Igc2V0LXRvcCBib3hlcyBhbmQgaGFuZGhlbGQgZGV2aWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXQgbGF0ZXIgYmVjYW1lIGEgcG9wdWxhciBjaG9pY2UgZm9yIGNyZWF0aW5nIHdlYiBhcHBsaWNhdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKYXZhIGlzIGEgaGlnaC1sZXZlbCBwcm9ncmFtbWluZyBsYW5ndWFnZSBkZXZlbG9wZWQgYnkgU3VuIE1pY3Jvc3lzdGVtcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCB3YXMgb3JpZ2luYWxseSBkZXNpZ25lZCBmb3IgZGV2ZWxvcGluZyBwcm9ncmFtcyBmb3Igc2V0LXRvcCBib3hlcyBhbmQgaGFuZGhlbGQgZGV2aWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXQgbGF0ZXIgYmVjYW1lIGEgcG9wdWxhciBjaG9pY2UgZm9yIGNyZWF0aW5nIHdlYiBhcHBsaWNhdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwibWlkZGxlXCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlQnV0dG9ufSBvbkNsaWNrPXsoZSk9PnsgXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBqYXZhID8gc2NvcmUrKzpzY29yZVxuICAgICAgICAgICAgICAgICAgICBqZGsgPyBzY29yZSsrOnNjb3JlXG4gICAgICAgICAgICAgICAgICAgIGpyZSA/IHNjb3JlKys6c2NvcmVcbiAgICAgICAgICAgICAgICAgICAgamFyID8gc2NvcmUrKzpzY29yZVxuICAgICAgICAgICAgICAgICAgICBqdm0gPyBzY29yZSsrOnNjb3JlXG5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KGUscHJvcHMsc3RhcnRUaW1lLHNjb3JlKSBcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBdENBO0FBQ0E7QUEyQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUEvQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQStCQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQUE7QUFPQTtBQUFBO0FBT0E7QUFBQTtBQU9BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQUE7QUFPQTtBQUFBO0FBUUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFBQTtBQU9BO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBT0E7QUFBQTtBQVVBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFWQTtBQWdCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/GeneralMaterials/Definitions.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Overview.js":
/*!*********************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Overview.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Overview; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props, startTime, score) {\n    e.preventDefault();\n    score *= 2;\n    var time = Math.round((Date.now() - startTime) / 1000 / 60);\n    time = time >= 9 ? 9 : time;\n    var authToken = sessionStorage.getItem('auth');\n\n    try {\n      var res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch('http://127.0.0.1:8000/api/v1/student/ml/post/' + authToken, {\n        \"ABC\": score,\n        \"ABC_T\": time\n      });\n\n      if (res.status === 200) {\n        console.log('Successfully Pushed Activity Data');\n      } else {\n        alert(\"Problem While Pushing\");\n      }\n    } catch (err) {\n      alert(err);\n    }\n\n    console.log(\"score\" + score);\n    console.log(\"time\" + time);\n    props.history.push('/course/' + props.match.params.course + '/Definitons');\n  });\n\n  return function handleSubmit(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction Overview(props) {\n  var classes = useStyles();\n  var startTime = Date.now();\n  var [intro, setIntro] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleIntro = () => {\n    setIntro(true);\n  };\n\n  var [basics, setBasics] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleBasics = () => {\n    setBasics(true);\n  };\n\n  var [inter, setInter] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleInter = () => {\n    setInter(true);\n  };\n\n  var [oops, setOops] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleOops = () => {\n    setOops(true);\n  };\n\n  var [adv, setAdv] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleAdv = () => {\n    setAdv(true);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    onClick: handleIntro\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\",\n    gutterBottom: true\n  }, \"Introduction\")), intro ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\",\n    gutterBottom: true\n  }, \"In this section we learn the basic & fundamental things about Java\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    onClick: handleBasics\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Basics\")), basics ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Basic programming concepts like contditional statements and loop statements and variables and thier syntax will be covered here.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    onClick: handleInter\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Intermediatory\")), inter ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"concepts like packages classes functions access modifiers will be covered here.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    onClick: handleOops\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Object Oriented  Programming With Java\")), oops ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Object Oriented concepts like inheritence and abstracting will be covered here.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Java Interface concepts also will take importance phase in this chapter\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    onClick: handleAdv\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Advanced Java\")), adv ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Advanced java concepts like threads and streams and lamda kinda things will take dominance here.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Networking in java also is an important concept to learn.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    variant: \"middle\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      var score = 0;\n      intro ? score++ : score;\n      inter ? score++ : score;\n      oops ? score++ : score;\n      adv ? score++ : score;\n      basics ? score++ : score;\n      handleSubmit(e, props, startTime, score);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvR2VuZXJhbE1hdGVyaWFscy9PdmVydmlldy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9Db21wb25lbnRzL0NvdXJzZS9HZW5lcmFsTWF0ZXJpYWxzL092ZXJ2aWV3LmpzP2ZhMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBcbiAgICBQYXBlciwgXG4gICAgbWFrZVN0eWxlcywgXG4gICAgQnV0dG9uLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgRGl2aWRlcixcbiAgICBDb250YWluZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJyAgICBcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gICAgaWNvbjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICBsaW5rIDoge1xuICAgICAgdGV4dERlY29yYXRpb24gOiAnbm9uZScsXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICBmbG9hdDoncmlnaHQnXG4gICAgfSxcbiAgICBoZXJvQ29udGVudDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDAsIDYpLFxuICAgIH0sXG4gICAgaGVyb0J1dHRvbnM6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICB9LFxuICAgIGNhcmRHcmlkOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg4KSxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBjYXJkTWVkaWE6IHtcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5XG4gICAgfSxcbiAgICBjYXJkQ29udGVudDoge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2KSxcbiAgICB9LFxuICAgIFRleHQgOiB7XG4gICAgICAgIGRpc3BsYXkgOiAnYmxvY2snXG4gICAgfVxuICB9KSk7XG5cblxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUscHJvcHMsc3RhcnRUaW1lLHNjb3JlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2NvcmUqPSAyXG4gICAgbGV0IHRpbWUgPSBNYXRoLnJvdW5kKCgoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSkvMTAwMCkvNjApXG4gICAgdGltZSA9IHRpbWUgPj0gOSA/IDkgOiB0aW1lXG5cblxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucGF0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdjEvc3R1ZGVudC9tbC9wb3N0LycrYXV0aFRva2VuLFxuICAgICAgICB7XG4gICAgICAgICAgXCJBQkNcIiA6IHNjb3JlLFxuICAgICAgICAgIFwiQUJDX1RcIiA6ICB0aW1lXG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgUHVzaGVkIEFjdGl2aXR5IERhdGEnKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlByb2JsZW0gV2hpbGUgUHVzaGluZ1wiKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlcnIgKXtcbiAgICAgICAgYWxlcnQoZXJyKVxuICAgICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJzY29yZVwiK3Njb3JlKVxuICAgIGNvbnNvbGUubG9nKFwidGltZVwiK3RpbWUpXG5cbiAgICBwcm9wcy5oaXN0b3J5LnB1c2goICcvY291cnNlLycrIHByb3BzLm1hdGNoLnBhcmFtcy5jb3Vyc2UgKycvRGVmaW5pdG9ucycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3IChwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG5cbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICBjb25zdCBbaW50cm8sc2V0SW50cm9dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBoYW5kbGVJbnRybyA9ICgpID0+IHtcbiAgICAgICAgc2V0SW50cm8odHJ1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBbYmFzaWNzLHNldEJhc2ljc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUJhc2ljcyA9ICgpID0+IHtcbiAgICAgICAgc2V0QmFzaWNzKHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgW2ludGVyLHNldEludGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgaGFuZGxlSW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldEludGVyKHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgW29vcHMsc2V0T29wc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZU9vcHMgPSAoKSA9PiB7XG4gICAgICAgIHNldE9vcHModHJ1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBbYWR2LHNldEFkdl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUFkdiA9ICgpID0+IHtcbiAgICAgICAgc2V0QWR2KHRydWUpXG4gICAgfVxuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nc20nPlxuICAgICAgICAgICAgPGZvcm0gIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgPExpc3QgPlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9CdXR0b25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBvbkNsaWNrID0geyBoYW5kbGVJbnRybyB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgZ3V0dGVyQm90dG9tID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICBpbnRybyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJyBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gdGhpcyBzZWN0aW9uIHdlIGxlYXJuIHRoZSBiYXNpYyAmIGZ1bmRhbWVudGFsIHRoaW5ncyBhYm91dCBKYXZhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0J1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG9uQ2xpY2sgPSB7IGhhbmRsZUJhc2ljcyB9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2ljc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBiYXNpY3MgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNpYyBwcm9ncmFtbWluZyBjb25jZXB0cyBsaWtlIGNvbnRkaXRpb25hbCBzdGF0ZW1lbnRzIGFuZCBsb29wIHN0YXRlbWVudHMgYW5kIHZhcmlhYmxlcyBhbmQgdGhpZXIgc3ludGF4IHdpbGwgYmUgY292ZXJlZCBoZXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gb25DbGljayA9IHsgaGFuZGxlSW50ZXIgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludGVybWVkaWF0b3J5IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpbnRlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNlcHRzIGxpa2UgcGFja2FnZXMgY2xhc3NlcyBmdW5jdGlvbnMgYWNjZXNzIG1vZGlmaWVycyB3aWxsIGJlIGNvdmVyZWQgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0J1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG9uQ2xpY2sgPSB7IGhhbmRsZU9vcHMgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdCBPcmllbnRlZCAgUHJvZ3JhbW1pbmcgV2l0aCBKYXZhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvb3BzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0IE9yaWVudGVkIGNvbmNlcHRzIGxpa2UgaW5oZXJpdGVuY2UgYW5kIGFic3RyYWN0aW5nIHdpbGwgYmUgY292ZXJlZCBoZXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmF2YSBJbnRlcmZhY2UgY29uY2VwdHMgYWxzbyB3aWxsIHRha2UgaW1wb3J0YW5jZSBwaGFzZSBpbiB0aGlzIGNoYXB0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gb25DbGljayA9IHsgaGFuZGxlQWR2IH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZHZhbmNlZCBKYXZhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGFkdiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZHZhbmNlZCBqYXZhIGNvbmNlcHRzIGxpa2UgdGhyZWFkcyBhbmQgc3RyZWFtcyBhbmQgbGFtZGEga2luZGEgdGhpbmdzIHdpbGwgdGFrZSBkb21pbmFuY2UgaGVyZS4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXR3b3JraW5nIGluIGphdmEgYWxzbyBpcyBhbiBpbXBvcnRhbnQgY29uY2VwdCB0byBsZWFybi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJtaWRkbGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oYW5kbGVCdXR0b259IG9uQ2xpY2s9eyhlKT0+eyBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGludHJvID8gc2NvcmUrKzpzY29yZVxuICAgICAgICAgICAgICAgICAgICBpbnRlciA/IHNjb3JlKys6c2NvcmVcbiAgICAgICAgICAgICAgICAgICAgb29wcyA/IHNjb3JlKys6c2NvcmVcbiAgICAgICAgICAgICAgICAgICAgYWR2ID8gc2NvcmUrKzpzY29yZVxuICAgICAgICAgICAgICAgICAgICBiYXNpY3MgPyBzY29yZSsrOnNjb3JlXG5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KGUscHJvcHMsc3RhcnRUaW1lLHNjb3JlKSBcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBckNBO0FBQ0E7QUEwQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFoQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFBQTtBQUtBO0FBQUE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBS0E7QUFBQTtBQVFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFWQTtBQWdCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/GeneralMaterials/Overview.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Summary.js":
/*!********************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Summary.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Summary; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props, startTime, score) {\n    e.preventDefault();\n    score *= 2;\n    var time = Math.round((Date.now() - startTime) / 1000 / 60);\n    time = time >= 9 ? 9 : time;\n    var authToken = sessionStorage.getItem('auth');\n    console.log(\"score\" + score);\n    console.log(\"time\" + time);\n\n    try {\n      var res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch('http://127.0.0.1:8000/api/v1/student/ml/post/' + authToken, {\n        \"AAC\": score,\n        \"AAC_T\": time\n      });\n\n      if (res.status === 200) {\n        console.log('Successfully Pushed Activity Data');\n      } else {\n        alert(\"Problem While Pushing\");\n      }\n    } catch (err) {\n      alert(err);\n    }\n\n    var learnningStyle = '';\n\n    try {\n      var _res = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://127.0.0.1:8000/api/v1/student/ml/get/' + authToken);\n\n      if (_res.status === 200) {\n        console.log('Successfully fetched Activity Data');\n        learnningStyle = _res.data;\n      } else {\n        alert(\"Problem While Fetching\");\n      }\n    } catch (err) {\n      alert(err);\n    }\n\n    var coursName = props.match.params.course;\n    props.history.push('/course/' + coursName + '/ls' + learnningStyle);\n  });\n\n  return function handleSubmit(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction Summary(props) {\n  var classes = useStyles();\n  var startTime = Date.now();\n  var [java, setJava] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleJava = () => {\n    setJava(true);\n  };\n\n  var [basics, setBasics] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleBasics = () => {\n    setBasics(true);\n  };\n\n  var [inter, setInter] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleInter = () => {\n    setInter(true);\n  };\n\n  var [oops, setOops] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleOops = () => {\n    setOops(true);\n  };\n\n  var [adv, setAdv] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  var handleAdv = () => {\n    setAdv(true);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    onClick: handleJava\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\",\n    gutterBottom: true\n  }, \"Java - Summary\")), java ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\",\n    gutterBottom: true\n  }, \"Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    onClick: handleBasics\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Java Basics - Summary\")), basics ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"So, the basic concepts of java are, just like any other programming languages, contional statements, loop statements, variables etc.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    onClick: handleInter\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Concepts In Java - Summary\")), inter ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Popular concepts that are used in java are Classes, Interfaces, Packages thess will get u started in Java.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    onClick: handleOops\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Object Oriented  Programming With Java\")), oops ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Object oriented concepts are mandatory things you should learn if you wanna use java. It will enable you to work with teams that means you will learn making loosely coupled applications using these concepts\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    className: classes.heroButtons\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], {\n    onClick: handleAdv\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Advanced Java - Summary\")), adv ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Concepts like Threads and streams enables you to use Java effectively. With that you could build enterprice applications and applicatoons that runs in network. Also, Networking in java will help you build networking modules such as Gateways.\"))) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    variant: \"middle\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      var score = 0;\n      java ? score++ : score;\n      inter ? score++ : score;\n      oops ? score++ : score;\n      adv ? score++ : score;\n      basics ? score++ : score;\n      handleSubmit(e, props, startTime, score);\n    }\n  }, \"Finish\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvR2VuZXJhbE1hdGVyaWFscy9TdW1tYXJ5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0NvbXBvbmVudHMvQ291cnNlL0dlbmVyYWxNYXRlcmlhbHMvU3VtbWFyeS5qcz9mMjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgXG4gICAgUGFwZXIsIFxuICAgIG1ha2VTdHlsZXMsIFxuICAgIEJ1dHRvbixcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIERpdmlkZXIsXG4gICAgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcycgICAgXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgICBpY29uOiB7XG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIGxpbmsgOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbiA6ICdub25lJyxcbiAgICB9LFxuICAgIGhlcm9Db250ZW50OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNiksXG4gICAgfSxcbiAgICBoZXJvQnV0dG9uczoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIH0sXG4gICAgY2FyZEdyaWQ6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIH0sXG4gICAgaGFuZGxlQnV0dG9uIDp7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgICAgZmxvYXQ6J3JpZ2h0J1xuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIGNhcmRNZWRpYToge1xuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcbiAgICB9LFxuICAgIGNhcmRDb250ZW50OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgIH0sXG4gICAgVGV4dCA6IHtcbiAgICAgICAgZGlzcGxheSA6ICdibG9jaydcbiAgICB9XG4gIH0pKTtcblxuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSxwcm9wcyxzdGFydFRpbWUsc2NvcmUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzY29yZSo9IDJcbiAgICBsZXQgdGltZSA9IE1hdGgucm91bmQoKChEYXRlLm5vdygpIC0gc3RhcnRUaW1lKS8xMDAwKS82MClcbiAgICB0aW1lID0gdGltZSA+PSA5ID8gOSA6IHRpbWVcblxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKVxuICAgIFxuICAgIGNvbnNvbGUubG9nKFwic2NvcmVcIitzY29yZSlcbiAgICBjb25zb2xlLmxvZyhcInRpbWVcIit0aW1lKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucGF0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdjEvc3R1ZGVudC9tbC9wb3N0LycrYXV0aFRva2VuLFxuICAgICAgICB7XG4gICAgICAgICAgXCJBQUNcIiA6IHNjb3JlLFxuICAgICAgICAgIFwiQUFDX1RcIiA6ICB0aW1lXG4gICAgICAgIH0pXG4gICAgXG4gICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgUHVzaGVkIEFjdGl2aXR5IERhdGEnKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlByb2JsZW0gV2hpbGUgUHVzaGluZ1wiKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaChlcnIgKXtcbiAgICAgICAgYWxlcnQoZXJyKVxuXG4gICAgfVxuXG4gICAgbGV0IGxlYXJubmluZ1N0eWxlID0nJ1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL3N0dWRlbnQvbWwvZ2V0LycrYXV0aFRva2VuKVxuICAgIFxuICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgZmV0Y2hlZCBBY3Rpdml0eSBEYXRhJylcbiAgICAgICAgICAgIGxlYXJubmluZ1N0eWxlID0gcmVzLmRhdGFcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUHJvYmxlbSBXaGlsZSBGZXRjaGluZ1wiKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZXJyICl7XG4gICAgICAgIGFsZXJ0KGVycilcbiAgICB9XG5cbiAgICBjb25zdCBjb3Vyc05hbWUgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlXG5cbiAgICBwcm9wcy5oaXN0b3J5LnB1c2goICcvY291cnNlLycrY291cnNOYW1lKycvbHMnK2xlYXJubmluZ1N0eWxlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdW1tYXJ5IChwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgY29uc3QgW2phdmEsc2V0SmF2YV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUphdmEgPSAoKSA9PiB7XG4gICAgICAgIHNldEphdmEodHJ1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBbYmFzaWNzLHNldEJhc2ljc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUJhc2ljcyA9ICgpID0+IHtcbiAgICAgICAgc2V0QmFzaWNzKHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgW2ludGVyLHNldEludGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgaGFuZGxlSW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldEludGVyKHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgW29vcHMsc2V0T29wc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZU9vcHMgPSAoKSA9PiB7XG4gICAgICAgIHNldE9vcHModHJ1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBbYWR2LHNldEFkdl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUFkdiA9ICgpID0+IHtcbiAgICAgICAgc2V0QWR2KHRydWUpXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdzbSc+XG4gICAgICAgICAgICA8Zm9ybSAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgICAgICA8TGlzdCA+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0J1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG9uQ2xpY2sgPSB7IGhhbmRsZUphdmEgfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGd1dHRlckJvdHRvbSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEphdmEgLSBTdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICBqYXZhID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmF2YSBpcyBhIGhpZ2gtbGV2ZWwgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgZGV2ZWxvcGVkIGJ5IFN1biBNaWNyb3N5c3RlbXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IHdhcyBvcmlnaW5hbGx5IGRlc2lnbmVkIGZvciBkZXZlbG9waW5nIHByb2dyYW1zIGZvciBzZXQtdG9wIGJveGVzIGFuZCBoYW5kaGVsZCBkZXZpY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXQgbGF0ZXIgYmVjYW1lIGEgcG9wdWxhciBjaG9pY2UgZm9yIGNyZWF0aW5nIHdlYiBhcHBsaWNhdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0J1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG9uQ2xpY2sgPSB7IGhhbmRsZUJhc2ljcyB9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEphdmEgQmFzaWNzIC0gU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBiYXNpY3MgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbywgdGhlIGJhc2ljIGNvbmNlcHRzIG9mIGphdmEgYXJlLCBqdXN0IGxpa2UgYW55IG90aGVyIHByb2dyYW1taW5nIGxhbmd1YWdlcywgY29udGlvbmFsIHN0YXRlbWVudHMsIGxvb3Agc3RhdGVtZW50cywgdmFyaWFibGVzIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiApIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVyb0J1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG9uQ2xpY2sgPSB7IGhhbmRsZUludGVyIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25jZXB0cyBJbiBKYXZhIC0gU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpbnRlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9wdWxhciBjb25jZXB0cyB0aGF0IGFyZSB1c2VkIGluIGphdmEgYXJlIENsYXNzZXMsIEludGVyZmFjZXMsIFBhY2thZ2VzIHRoZXNzIHdpbGwgZ2V0IHUgc3RhcnRlZCBpbiBKYXZhLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvQnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gb25DbGljayA9IHsgaGFuZGxlT29wcyB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0IE9yaWVudGVkICBQcm9ncmFtbWluZyBXaXRoIEphdmEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7IG9vcHMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qgb3JpZW50ZWQgY29uY2VwdHMgYXJlIG1hbmRhdG9yeSB0aGluZ3MgeW91IHNob3VsZCBsZWFybiBpZiB5b3Ugd2FubmEgdXNlIGphdmEuIEl0IHdpbGwgZW5hYmxlIHlvdSB0byB3b3JrIHdpdGggdGVhbXMgdGhhdCBtZWFucyB5b3Ugd2lsbCBsZWFybiBtYWtpbmcgbG9vc2VseSBjb3VwbGVkIGFwcGxpY2F0aW9ucyB1c2luZyB0aGVzZSBjb25jZXB0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9CdXR0b25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBvbkNsaWNrID0geyBoYW5kbGVBZHYgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkdmFuY2VkIEphdmEgLSBTdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGFkdiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25jZXB0cyBsaWtlIFRocmVhZHMgYW5kIHN0cmVhbXMgZW5hYmxlcyB5b3UgdG8gdXNlIEphdmEgZWZmZWN0aXZlbHkuIFdpdGggdGhhdCB5b3UgY291bGQgYnVpbGQgZW50ZXJwcmljZSBhcHBsaWNhdGlvbnMgYW5kIGFwcGxpY2F0b29ucyB0aGF0IHJ1bnMgaW4gbmV0d29yay4gQWxzbywgTmV0d29ya2luZyBpbiBqYXZhIHdpbGwgaGVscCB5b3UgYnVpbGQgbmV0d29ya2luZyBtb2R1bGVzIHN1Y2ggYXMgR2F0ZXdheXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwibWlkZGxlXCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlQnV0dG9ufSBvbkNsaWNrPXsoZSk9PnsgXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBqYXZhID8gc2NvcmUrKzpzY29yZVxuICAgICAgICAgICAgICAgICAgICBpbnRlciA/IHNjb3JlKys6c2NvcmVcbiAgICAgICAgICAgICAgICAgICAgb29wcyA/IHNjb3JlKys6c2NvcmVcbiAgICAgICAgICAgICAgICAgICAgYWR2ID8gc2NvcmUrKzpzY29yZVxuICAgICAgICAgICAgICAgICAgICBiYXNpY3MgPyBzY29yZSsrOnNjb3JlXG5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KGUscHJvcHMsc3RhcnRUaW1lLHNjb3JlKSBcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIEZpbmlzaFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBckNBO0FBQ0E7QUEwQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQW5EQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbURBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQU9BO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFBQTtBQVFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFWQTtBQWdCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/GeneralMaterials/Summary.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/GeneralMaterials/Visual.js":
/*!*******************************************************************!*\
  !*** ./React/Shared/Components/Course/GeneralMaterials/Visual.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Visual; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/CheckCircleSharp */ \"@material-ui/icons/CheckCircleSharp\");\n/* harmony import */ var _material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props, startTime, score) {\n    e.preventDefault();\n    var time = (Date.now() - startTime) / 1000 / 60;\n    score *= 2;\n    score = score >= 9 ? 9 : score;\n    time = time >= 9 ? 9 : time;\n    time = Math.round(time);\n    var authToken = sessionStorage.getItem('auth');\n\n    try {\n      var res = yield axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch('http://127.0.0.1:8000/api/v1/student/ml/post/' + authToken, {\n        \"V\": score // \"V_T\" :  time\n\n      });\n\n      if (res.status === 200) {\n        console.log('Successfully Pushed Activity Data');\n      } else {\n        alert(\"Problem While Pushing\");\n      }\n    } catch (err) {\n      alert(err);\n    }\n\n    console.log(\"score\" + score);\n    console.log(\"time\" + time);\n    props.history.push('/course/' + props.match.params.course + '/Summary');\n  });\n\n  return function handleSubmit(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction Visual(props) {\n  var classes = useStyles();\n  var startTime = Date.now();\n  var [inheritance, setInheritance] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);\n  var [single, setSingle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);\n  var [multi, setMulti] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);\n  var [hybrid, setHybrid] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);\n  var [hierarchical, setHierarchical] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);\n\n  var handleInheritance = () => {\n    setInheritance(false);\n  };\n\n  var handleSingle = () => {\n    setSingle(false);\n  };\n\n  var handleMulti = () => {\n    setMulti(false);\n  };\n\n  var handleHybrid = () => {\n    setHybrid(false);\n  };\n\n  var handleHierarchical = () => {\n    setHierarchical(false);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h5\"\n  }, \"Inheritance\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: classes.root,\n    raised: inheritance\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActionArea\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardMedia\"], {\n    component: \"img\",\n    alt: \"Contemplative Reptile\" // height=\"250\"\n    ,\n    image: \"https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Inheritance-types-java.png\",\n    title: \"Inheritance\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\"\n  }, \"Inheritance\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, \"Inheritance is a widely used OOPs concept which is used to implemet abstraction and coupling in our application. Also, it will be used full if we work with a team or a group of people.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"], {\n    className: classes.handleButton\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    size: \"small\",\n    color: inheritance ? 'secondary' : 'primary',\n    onClick: handleInheritance\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default.a, null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: classes.root,\n    raised: single\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActionArea\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardMedia\"], {\n    component: \"img\",\n    alt: \"Contemplative Reptile\",\n    height: \"500\",\n    image: \"https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Single-Inheritance-144x180.png\",\n    title: \"Single Inheritance\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\"\n  }, \"Single Inheritance\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, \"In single inheritance, one class inherits the properties of another. It enables a derived class to inherit the properties and behavior from a single parent class. This will in turn enable code reusability as well as add new features to the existing code. Here, Class A is your parent class and Class B is your child class which inherits the properties and behavior of the parent class.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"], {\n    className: classes.handleButton\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    size: \"small\",\n    color: single ? 'secondary' : 'primary',\n    onClick: handleSingle\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default.a, null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: classes.root,\n    raised: multi\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActionArea\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardMedia\"], {\n    component: \"img\",\n    alt: \"Contemplative Reptile\",\n    height: \"500\",\n    image: \"https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Multilevel-Inheritance-204x300.png\",\n    title: \" Multilevel Inheritance\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\"\n  }, \"Multilevel Inheritance\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, \"When a class is derived from a class which is also derived from another class, i.e. a class having more than one parent class but at different levels, such type of inheritance is called Multilevel Inheritance. If we talk about the flowchart, class B inherits the properties and behavior of class A and class C inherits the properties of class B. Here A is the parent class for B and class B is the parent class for C. So in this case class C implicitly inherits the properties and methods of class A along with Class B. That\\u2019s what is multilevel inheritance.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"], {\n    className: classes.handleButton\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    size: \"small\",\n    color: multi ? 'secondary' : 'primary',\n    onClick: handleMulti\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default.a, null)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: classes.root,\n    raised: hybrid\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActionArea\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardMedia\"], {\n    component: \"img\",\n    alt: \"Contemplative Reptile\" // height=\"500\"\n    ,\n    image: \"https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Hybrid-Inheritance-186x180.png\",\n    title: \"Hybrid Inheritance\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\"\n  }, \"Hybrid Inheritance\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, \"Hybrid inheritance is a combination of multiple inheritance and multilevel inheritance. Since multiple inheritance is not supported in Java as it leads to ambiguity, so this type of inheritance can only be achieved through the use of the interfaces. If we talk about the flowchart, class A is a parent class for class B and C, whereas Class B and C are the parent class of D which is the only child class\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"], {\n    className: classes.handleButton\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    size: \"small\",\n    color: hybrid ? 'secondary' : 'primary',\n    onClick: handleHybrid\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default.a, null))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: classes.root,\n    raised: hierarchical\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActionArea\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardMedia\"], {\n    component: \"img\",\n    alt: \"Contemplative Reptile\" // height=\"500\"\n    ,\n    image: \"https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/04/Hierarchical-Inheritance-300x178.png\",\n    title: \"Hierarchical  Inheritance\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\"\n  }, \"Hierarchical  Inheritance\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, \"When a class has more than one child classes (sub classes) o r in other words, more than one child classes have the same parent class, then such kind of inheritance is known as hierarchical. If we talk about the flowchart, Class B and C are the child classes which are inheriting from the parent class i.e Class A. Let\\u2019s see the syntax for hierarchical inheritance in Java:\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActions\"], {\n    className: classes.handleButton\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    size: \"small\",\n    color: hierarchical ? 'secondary' : 'primary',\n    onClick: handleHierarchical\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CheckCircleSharp__WEBPACK_IMPORTED_MODULE_2___default.a, null)))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    variant: \"middle\"\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      var score = 0;\n      inheritance ? score : score++;\n      single ? score : score++;\n      multi ? score : score++;\n      hybrid ? score : score++;\n      hierarchical ? score : score++;\n      handleSubmit(e, props, startTime, score);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvR2VuZXJhbE1hdGVyaWFscy9WaXN1YWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvR2VuZXJhbE1hdGVyaWFscy9WaXN1YWwuanM/ZmZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFR5cG9ncmFwaHksIFxuICAgIG1ha2VTdHlsZXMsIFxuICAgIEJ1dHRvbixcbiAgICBDYXJkQ29udGVudCwgXG4gICAgQ2FyZE1lZGlhLCBcbiAgICBDYXJkLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgQ2FyZEFjdGlvbkFyZWEsXG4gICAgQ2FyZEFjdGlvbnMsXG4gICAgRGl2aWRlcixcbiAgIENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IENoZWNrQ2lyY2xlU2hhcnBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVja0NpcmNsZVNoYXJwJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgbGluayA6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uIDogJ25vbmUnLFxuICAgIH0sXG4gICAgaGVyb0NvbnRlbnQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcbiAgICB9LFxuICAgIGhlcm9CdXR0b25zOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgIGZsb2F0OidyaWdodCdcbiAgICB9LFxuICAgIGNhcmRHcmlkOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg4KSxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBjYXJkTWVkaWE6IHtcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5XG4gICAgfSxcbiAgICBjYXJkQ29udGVudDoge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2KSxcbiAgICB9LFxuICB9KSk7XG5cblxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUscHJvcHMsc3RhcnRUaW1lLHNjb3JlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IHRpbWUgPSAoKERhdGUubm93KCkgLSBzdGFydFRpbWUpLzEwMDApLzYwXG5cbiAgICBzY29yZSo9MlxuICAgIHNjb3JlID0gc2NvcmUgPj0gOSA/IDkgOiBzY29yZVxuICAgIHRpbWUgPSB0aW1lID49IDkgPyA5IDogdGltZVxuICAgIHRpbWUgPSBNYXRoLnJvdW5kKHRpbWUpXG5cbiAgICBjb25zdCBhdXRoVG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhdXRoJylcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBhdGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL3N0dWRlbnQvbWwvcG9zdC8nK2F1dGhUb2tlbixcbiAgICAgICAge1xuICAgICAgICAgIFwiVlwiIDogc2NvcmVcbiAgICAgICAgICAvLyBcIlZfVFwiIDogIHRpbWVcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBQdXNoZWQgQWN0aXZpdHkgRGF0YScpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiUHJvYmxlbSBXaGlsZSBQdXNoaW5nXCIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoKGVyciApe1xuICAgICAgICBhbGVydChlcnIpXG4gICAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInNjb3JlXCIrc2NvcmUpXG4gICAgY29uc29sZS5sb2coXCJ0aW1lXCIrdGltZSlcbiAgICBwcm9wcy5oaXN0b3J5LnB1c2goICAnL2NvdXJzZS8nKyBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlICsnL1N1bW1hcnknKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaXN1YWwgKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KClcblxuICAgICAgICBjb25zdCBbaW5oZXJpdGFuY2UsIHNldEluaGVyaXRhbmNlXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gICAgICAgIGNvbnN0IFtzaW5nbGUsIHNldFNpbmdsZV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICAgICAgICBjb25zdCBbbXVsdGksIHNldE11bHRpXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG4gICAgICAgIGNvbnN0IFtoeWJyaWQsIHNldEh5YnJpZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKVxuICAgICAgICBjb25zdCBbaGllcmFyY2hpY2FsLCBzZXRIaWVyYXJjaGljYWxdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcblxuICAgICAgICBjb25zdCBoYW5kbGVJbmhlcml0YW5jZSA9ICgpID0+IHtcbiAgICAgICAgICBzZXRJbmhlcml0YW5jZShmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVNpbmdsZSA9ICgpID0+IHtcbiAgICAgICAgICBzZXRTaW5nbGUoZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVNdWx0aSA9ICgpID0+IHtcbiAgICAgICAgICBzZXRNdWx0aShmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUh5YnJpZCA9ICgpID0+IHtcbiAgICAgICAgICBzZXRIeWJyaWQoZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYW5kbGVIaWVyYXJjaGljYWwgPSAoKSA9PiB7XG4gICAgICAgICAgc2V0SGllcmFyY2hpY2FsKGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Zm9ybSAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgIDxMaXN0ID5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluaGVyaXRhbmNlXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPiBcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmFpc2VkPXtpbmhlcml0YW5jZX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vZDFqbng5YmE4czZqOXIuY2xvdWRmcm9udC5uZXQvYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNC9Jbmhlcml0YW5jZS10eXBlcy1qYXZhLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkluaGVyaXRhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbmhlcml0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbmhlcml0YW5jZSBpcyBhIHdpZGVseSB1c2VkIE9PUHMgY29uY2VwdCB3aGljaCBpcyB1c2VkIHRvIGltcGxlbWV0IGFic3RyYWN0aW9uIGFuZCBjb3VwbGluZyBpbiBvdXIgYXBwbGljYXRpb24uIEFsc28sIGl0IHdpbGwgYmUgdXNlZCBmdWxsIGlmIHdlIHdvcmsgd2l0aCBhIHRlYW0gb3IgYSBncm91cCBvZiBwZW9wbGUuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zIGNsYXNzTmFtZT17Y2xhc3Nlcy5oYW5kbGVCdXR0b259ID5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPXtpbmhlcml0YW5jZSA/ICdzZWNvbmRhcnknOidwcmltYXJ5J30gb25DbGljaz17aGFuZGxlSW5oZXJpdGFuY2UgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZVNoYXJwSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT4gXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmFpc2VkPXtzaW5nbGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL2Qxam54OWJhOHM2ajlyLmNsb3VkZnJvbnQubmV0L2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDQvU2luZ2xlLUluaGVyaXRhbmNlLTE0NHgxODAucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaW5nbGUgSW5oZXJpdGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlIEluaGVyaXRhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbiBzaW5nbGUgaW5oZXJpdGFuY2UsIG9uZSBjbGFzcyBpbmhlcml0cyB0aGUgcHJvcGVydGllcyBvZiBhbm90aGVyLiBJdCBlbmFibGVzIGEgZGVyaXZlZCBjbGFzcyB0byBpbmhlcml0IHRoZSBwcm9wZXJ0aWVzIGFuZCBiZWhhdmlvciBmcm9tIGEgc2luZ2xlIHBhcmVudCBjbGFzcy4gVGhpcyB3aWxsIGluIHR1cm4gZW5hYmxlIGNvZGUgcmV1c2FiaWxpdHkgYXMgd2VsbCBhcyBhZGQgbmV3IGZlYXR1cmVzIHRvIHRoZSBleGlzdGluZyBjb2RlLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEhlcmUsIENsYXNzIEEgaXMgeW91ciBwYXJlbnQgY2xhc3MgYW5kIENsYXNzIEIgaXMgeW91ciBjaGlsZCBjbGFzcyB3aGljaCBpbmhlcml0cyB0aGUgcHJvcGVydGllcyBhbmQgYmVoYXZpb3Igb2YgdGhlIHBhcmVudCBjbGFzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlQnV0dG9ufSA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj17c2luZ2xlID8gJ3NlY29uZGFyeSc6J3ByaW1hcnknfSBvbkNsaWNrPXtoYW5kbGVTaW5nbGUgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZVNoYXJwSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSByYWlzZWQ9e211bHRpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9kMWpueDliYThzNmo5ci5jbG91ZGZyb250Lm5ldC9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA0L011bHRpbGV2ZWwtSW5oZXJpdGFuY2UtMjA0eDMwMC5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIiBNdWx0aWxldmVsIEluaGVyaXRhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpbGV2ZWwgSW5oZXJpdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiBhIGNsYXNzIGlzIGRlcml2ZWQgZnJvbSBhIGNsYXNzIHdoaWNoIGlzIGFsc28gZGVyaXZlZCBmcm9tIGFub3RoZXIgY2xhc3MsIGkuZS4gYSBjbGFzcyBoYXZpbmcgbW9yZSB0aGFuIG9uZSBwYXJlbnQgY2xhc3MgYnV0IGF0IGRpZmZlcmVudCBsZXZlbHMsIHN1Y2ggdHlwZSBvZiBpbmhlcml0YW5jZSBpcyBjYWxsZWQgTXVsdGlsZXZlbCBJbmhlcml0YW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiB3ZSB0YWxrIGFib3V0IHRoZSBmbG93Y2hhcnQsIGNsYXNzIEIgaW5oZXJpdHMgdGhlIHByb3BlcnRpZXMgYW5kIGJlaGF2aW9yIG9mIGNsYXNzIEEgYW5kIGNsYXNzIEMgaW5oZXJpdHMgdGhlIHByb3BlcnRpZXMgb2YgY2xhc3MgQi4gSGVyZSBBIGlzIHRoZSBwYXJlbnQgY2xhc3MgZm9yIEIgYW5kIGNsYXNzIEIgaXMgdGhlIHBhcmVudCBjbGFzcyBmb3IgQy4gU28gaW4gdGhpcyBjYXNlIGNsYXNzIEMgaW1wbGljaXRseSBpbmhlcml0cyB0aGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiBjbGFzcyBBIGFsb25nIHdpdGggQ2xhc3MgQi4gVGhhdOKAmXMgd2hhdCBpcyBtdWx0aWxldmVsIGluaGVyaXRhbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zIGNsYXNzTmFtZT17Y2xhc3Nlcy5oYW5kbGVCdXR0b259ID5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPXttdWx0aSA/ICdzZWNvbmRhcnknOidwcmltYXJ5J30gb25DbGljaz17aGFuZGxlTXVsdGkgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZVNoYXJwSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmFpc2VkPXtoeWJyaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL2Qxam54OWJhOHM2ajlyLmNsb3VkZnJvbnQubmV0L2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDQvSHlicmlkLUluaGVyaXRhbmNlLTE4NngxODAucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJIeWJyaWQgSW5oZXJpdGFuY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSHlicmlkIEluaGVyaXRhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh5YnJpZCBpbmhlcml0YW5jZSBpcyBhIGNvbWJpbmF0aW9uIG9mIG11bHRpcGxlIGluaGVyaXRhbmNlIGFuZCBtdWx0aWxldmVsIGluaGVyaXRhbmNlLiBTaW5jZSBtdWx0aXBsZSBpbmhlcml0YW5jZSBpcyBub3Qgc3VwcG9ydGVkIGluIEphdmEgYXMgaXQgbGVhZHMgdG8gYW1iaWd1aXR5LCBzbyB0aGlzIHR5cGUgb2YgaW5oZXJpdGFuY2UgY2FuIG9ubHkgYmUgYWNoaWV2ZWQgdGhyb3VnaCB0aGUgdXNlIG9mIHRoZSBpbnRlcmZhY2VzLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiB3ZSB0YWxrIGFib3V0IHRoZSBmbG93Y2hhcnQsIGNsYXNzIEEgaXMgYSBwYXJlbnQgY2xhc3MgZm9yIGNsYXNzIEIgYW5kIEMsIHdoZXJlYXMgQ2xhc3MgQiBhbmQgQyBhcmUgdGhlIHBhcmVudCBjbGFzcyBvZiBEIHdoaWNoIGlzIHRoZSBvbmx5IGNoaWxkIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbmRsZUJ1dHRvbn0gPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9e2h5YnJpZCA/ICdzZWNvbmRhcnknOidwcmltYXJ5J30gb25DbGljaz17aGFuZGxlSHlicmlkIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGVTaGFycEljb24vPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtID5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHJhaXNlZD17aGllcmFyY2hpY2FsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9kMWpueDliYThzNmo5ci5jbG91ZGZyb250Lm5ldC9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzA0L0hpZXJhcmNoaWNhbC1Jbmhlcml0YW5jZS0zMDB4MTc4LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSGllcmFyY2hpY2FsICBJbmhlcml0YW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaWVyYXJjaGljYWwgIEluaGVyaXRhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gYSBjbGFzcyBoYXMgbW9yZSB0aGFuIG9uZSBjaGlsZCBjbGFzc2VzIChzdWIgY2xhc3NlcykgbyByIGluIG90aGVyIHdvcmRzLCBtb3JlIHRoYW4gb25lIGNoaWxkIGNsYXNzZXMgaGF2ZSB0aGUgc2FtZSBwYXJlbnQgY2xhc3MsIHRoZW4gc3VjaCBraW5kIG9mIGluaGVyaXRhbmNlIGlzIGtub3duIGFzIGhpZXJhcmNoaWNhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiB3ZSB0YWxrIGFib3V0IHRoZSBmbG93Y2hhcnQsIENsYXNzIEIgYW5kIEMgYXJlIHRoZSBjaGlsZCBjbGFzc2VzIHdoaWNoIGFyZSBpbmhlcml0aW5nIGZyb20gdGhlIHBhcmVudCBjbGFzcyBpLmUgQ2xhc3MgQS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXTigJlzIHNlZSB0aGUgc3ludGF4IGZvciBoaWVyYXJjaGljYWwgaW5oZXJpdGFuY2UgaW4gSmF2YTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlQnV0dG9ufSA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj17aGllcmFyY2hpY2FsID8gJ3NlY29uZGFyeSc6J3ByaW1hcnknfSBvbkNsaWNrPXtoYW5kbGVIaWVyYXJjaGljYWwgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0NpcmNsZVNoYXJwSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwibWlkZGxlXCIgLz5cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlQnV0dG9ufSAgb25DbGljaz17KGUpPT57IFxuICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IDA7XG5cbiAgICAgICAgICAgICAgICBpbmhlcml0YW5jZSA/IHNjb3JlIDogc2NvcmUrK1xuICAgICAgICAgICAgICAgIHNpbmdsZSA/IHNjb3JlIDogc2NvcmUrK1xuICAgICAgICAgICAgICAgIG11bHRpID8gc2NvcmUgOiBzY29yZSsrXG4gICAgICAgICAgICAgICAgaHlicmlkID8gc2NvcmUgOiBzY29yZSsrXG4gICAgICAgICAgICAgICAgaGllcmFyY2hpY2FsID8gc2NvcmUgOiBzY29yZSsrXG5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdChlLHByb3BzLHN0YXJ0VGltZSxzY29yZSkgXG4gICAgICAgICAgICAgICAgfX0gXG5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBakNBO0FBQ0E7QUF1Q0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFpQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVhBO0FBbUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/GeneralMaterials/Visual.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/Home.js":
/*!************************************************!*\
  !*** ./React/Shared/Components/Course/Home.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _Data_courses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Data/courses */ \"./React/Shared/Data/courses.js\");\n/* harmony import */ var _Shared_Data_learningStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Shared/Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Copyright() {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\"\n  }, 'Copyright © ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__[\"Link\"], {\n    to: \"/\",\n    className: classes.link\n  }, \"Chill Studies\"), ' ', new Date().getFullYear(), '.');\n}\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    marginTop: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  HomeButton: {\n    float: 'right'\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'left'\n  },\n  title: {\n    flexGrow: 1\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  }\n}));\n\nvar handleRoute = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (props, card, course, lsType) {\n    var path = props.history.location.pathname + '';\n    lsType = path.includes('/home') ? (yield axios__WEBPACK_IMPORTED_MODULE_14___default.a.get('http://127.0.0.1:8000/api/v1/student/ml/get/' + sessionStorage.getItem('auth'))).data : lsType;\n    var to = '';\n    to = path === '/dashboard' ? \"/course/\".concat(card.name, \"/home\") : to = path.includes('/ls') ? \"/course/\".concat(course.name, \"/ls/\").concat(lsType, \"/\").concat(card) : to = path.includes('/home') ? card.includes('1') ? \"/course/\".concat(course.name) : \"/course/\".concat(course.name, \"/ls/\").concat(lsType) : to = \"/course/\".concat(course.name, \"/\").concat(card);\n    props.history.push(to);\n  });\n\n  return function handleRoute(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction Home(props) {\n  var classes = useStyles();\n  var path = props.history.location.pathname + '';\n  var chapters = ['Chapter-1', 'Chapter-2'];\n  var lsType = props.match.params.ls_type;\n  var cards = path.startsWith('/dashboard') ? _Data_courses__WEBPACK_IMPORTED_MODULE_12__[\"default\"] : // its dhashboard\n  path.includes('/home') ? chapters : // Its Course Home that includes Chapters\n  path.includes('/ls') ? _Shared_Data_learningStyles__WEBPACK_IMPORTED_MODULE_13__[\"default\"].find(style => lsType === style.type).contents : // Its the LS Predicted Course Chapter Home  \n  ['Overview', 'Definitons', 'Activity', 'Content', 'Visual', 'Summary']; // Its the default Course Chapter Home\n\n  var course = path === '/dashboard' ? 'valid' : _Data_courses__WEBPACK_IMPORTED_MODULE_12__[\"default\"].find(course => props.match.params.course === course.name);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, course ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    position: \"relative\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default.a, null, path === '/dashboard' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    variant: \"h6\",\n    color: \"inherit\",\n    noWrap: true,\n    className: classes.title\n  }, \"Dashboard\") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    variant: \"h6\",\n    color: \"inherit\",\n    noWrap: true,\n    className: classes.title\n  }, course.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[\"IconButton\"], {\n    edge: \"start\",\n    className: classes.HomeButton,\n    color: \"inherit\",\n    \"aria-label\": \"home\",\n    onClick: e => {\n      e.preventDefault();\n      props.history.push('/dashboard');\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    gutterBottom: true,\n    variant: \"body1\"\n  }, \"Dashboard\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.heroContent\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    component: \"h1\",\n    variant: \"h2\",\n    align: \"center\",\n    color: \"textPrimary\",\n    gutterBottom: true\n  }, path === '/dashboard' ? \"Welcome to your Dashboard !\" : \"Welcome to \".concat(course.name, \"!\")), path === '/dashboard' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    variant: \"h5\",\n    align: \"center\",\n    color: \"textSecondary\",\n    paragraph: true\n  }, \"You can find your subscribed courses below.\") : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    variant: \"h5\",\n    align: \"center\",\n    color: \"textSecondary\",\n    paragraph: true\n  }, \"Happy Learning\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    className: classes.cardGrid,\n    maxWidth: \"md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    container: true,\n    spacing: 2\n  }, cards.map((card, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    item: true,\n    key: card,\n    xs: 12,\n    sm: 6,\n    md: path.includes('/ls') || path.includes('/home') ? 6 : 4\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: e => {\n      handleRoute(props, card, course, lsType);\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.card\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: classes.cardMedia,\n    image: path === '/dashboard' ? card.image : course.image,\n    title: path === '/dashboard' ? card.name : \"\".concat(course.name, \" \").concat(card)\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    className: classes.cardContent\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\"\n  }, path === '/dashboard' ? card.name : card), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, null, path === '/dashboard' ? card.desc : course.desc))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    className: classes.footer\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    variant: \"h6\",\n    align: \"center\",\n    gutterBottom: true\n  }, \"\\u201CStudy hard what interests you the most in the most undisciplined, irreverent and original manner possible.\\u201D\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    variant: \"subtitle1\",\n    align: \"center\",\n    color: \"textSecondary\",\n    component: \"p\"\n  }, \"Richard P. Feynman\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" 404 Error \"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvSG9tZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9Db21wb25lbnRzL0NvdXJzZS9Ib21lLmpzP2E4OGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IHsgTGluayBhcyBMaW5rdG8gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IGNvdXJzZXMgZnJvbSAnLi4vLi4vRGF0YS9jb3Vyc2VzJ1xuaW1wb3J0IGxlYXJuaW5nU3R5bGVzIGZyb20gJy4uLy4uLy4uL1NoYXJlZC9EYXRhL2xlYXJuaW5nU3R5bGVzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgIHsnQ29weXJpZ2h0IMKpICd9XG4gICAgICAgIDxMaW5rdG8gdG89Jy8nIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cbiAgICAgICAgICAgIENoaWxsIFN0dWRpZXNcbiAgICAgICAgPC9MaW5rdG8+XG4gICAgICB7JyAnfVxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgIHsnLid9XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgaWNvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBsaW5rIDoge1xuICAgIHRleHREZWNvcmF0aW9uIDogJ25vbmUnLFxuICB9LFxuICBoZXJvQ29udGVudDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNiksXG4gIH0sXG4gIGhlcm9CdXR0b25zOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICB9LFxuICBjYXJkR3JpZDoge1xuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg4KSxcbiAgfSxcbiAgSG9tZUJ1dHRvbiA6IHtcbiAgICBmbG9hdCA6ICdyaWdodCdcbiAgfSxcbiAgaGFuZGxlQnV0dG9uIDp7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGZsb2F0OidsZWZ0J1xuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBjYXJkOiB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB9LFxuICBjYXJkTWVkaWE6IHtcbiAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICB9LFxuICBjYXJkQ29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBmb290ZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICB9LFxufSkpO1xuXG5jb25zdCBoYW5kbGVSb3V0ZSA9IGFzeW5jIChwcm9wcyxjYXJkLGNvdXJzZSxsc1R5cGUpID0+IHtcblxuICBjb25zdCBwYXRoID0gcHJvcHMuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSsnJ1xuXG4gIGxzVHlwZSA9ICBwYXRoLmluY2x1ZGVzKCcvaG9tZScpID8gKGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS92MS9zdHVkZW50L21sL2dldC8nK3Nlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSkpLmRhdGEgOiBsc1R5cGVcblxuICBsZXQgdG8gPSAnJ1xuXG4gIHRvID0gcGF0aCA9PT0nL2Rhc2hib2FyZCcgPyBgL2NvdXJzZS8ke2NhcmQubmFtZX0vaG9tZWA6XG4gICAgdG8gPSBwYXRoLmluY2x1ZGVzKCcvbHMnKSA/IGAvY291cnNlLyR7Y291cnNlLm5hbWV9L2xzLyR7bHNUeXBlfS8ke2NhcmR9YCA6XG4gICAgICB0byA9IHBhdGguaW5jbHVkZXMoJy9ob21lJykgPyAoIGNhcmQuaW5jbHVkZXMoJzEnKSA/ICBgL2NvdXJzZS8ke2NvdXJzZS5uYW1lfWAgOiBgL2NvdXJzZS8ke2NvdXJzZS5uYW1lfS9scy8ke2xzVHlwZX1gKSA6XG4gICAgICAgIHRvID0gYC9jb3Vyc2UvJHtjb3Vyc2UubmFtZX0vJHtjYXJkfWBcblxuICBwcm9wcy5oaXN0b3J5LnB1c2godG8pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHBhdGggPSBwcm9wcy5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lKycnXG5cbiAgY29uc3QgY2hhcHRlcnMgPSBbJ0NoYXB0ZXItMScsJ0NoYXB0ZXItMiddXG5cbiAgY29uc3QgbHNUeXBlID0gcHJvcHMubWF0Y2gucGFyYW1zLmxzX3R5cGVcblxuICBjb25zdCBjYXJkcyA9IHBhdGguc3RhcnRzV2l0aCgnL2Rhc2hib2FyZCcpID8gY291cnNlcyA6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXRzIGRoYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgIHBhdGguaW5jbHVkZXMoJy9ob21lJykgPyBjaGFwdGVycyA6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJdHMgQ291cnNlIEhvbWUgdGhhdCBpbmNsdWRlcyBDaGFwdGVyc1xuICAgICAgICAgICAgICAgICAgICBwYXRoLmluY2x1ZGVzKCcvbHMnKSA/IGxlYXJuaW5nU3R5bGVzLmZpbmQoc3R5bGUgPT4gbHNUeXBlID09PSBzdHlsZS50eXBlKS5jb250ZW50cyAgOiAgICAgLy8gSXRzIHRoZSBMUyBQcmVkaWN0ZWQgQ291cnNlIENoYXB0ZXIgSG9tZSAgXG4gICAgICAgICAgICAgICAgICAgICAgICBbICdPdmVydmlldycsJ0RlZmluaXRvbnMnLCAnQWN0aXZpdHknLCAnQ29udGVudCcsJ1Zpc3VhbCcsJ1N1bW1hcnknXTsgICAgICAgICAgICAgICAgICAgLy8gSXRzIHRoZSBkZWZhdWx0IENvdXJzZSBDaGFwdGVyIEhvbWVcblxuICBsZXQgY291cnNlID0gKHBhdGg9PT0nL2Rhc2hib2FyZCcpID8gICgndmFsaWQnKSA6IChjb3Vyc2VzLmZpbmQoKGNvdXJzZSkgPT4gcHJvcHMubWF0Y2gucGFyYW1zLmNvdXJzZSA9PT0gY291cnNlLm5hbWUpIClcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD4gXG4gICAgICB7IGNvdXJzZSA/IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICB7IHBhdGg9PT0nL2Rhc2hib2FyZCcgPyAgKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBub1dyYXAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgbm9XcmFwIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAge2NvdXJzZS5uYW1lfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5Ib21lQnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwiaG9tZVwiIG9uQ2xpY2s9eyAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCggJy9kYXNoYm9hcmQnKVxuICAgICAgICAgICAgICAgIH0gfT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiYm9keTFcIiA+XG4gICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+IFxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9Db250ZW50fT5cbiAgICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgIHsgcGF0aD09PScvZGFzaGJvYXJkJyA/ICAoYFdlbGNvbWUgdG8geW91ciBEYXNoYm9hcmQgIWApOiggYFdlbGNvbWUgdG8gJHtjb3Vyc2UubmFtZX0hYCl9XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIHsgcGF0aD09PScvZGFzaGJvYXJkJyA/IChcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGZpbmQgeW91ciBzdWJzY3JpYmVkIGNvdXJzZXMgYmVsb3cuXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+KTpudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgSGFwcHkgTGVhcm5pbmdcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEdyaWR9IG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCxpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2NhcmR9IHhzPXsxMn0gc209ezZ9IG1kPXsgKHBhdGguaW5jbHVkZXMoJy9scycpfHxwYXRoLmluY2x1ZGVzKCcvaG9tZScpKSA/IDY6IDR9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4ge2hhbmRsZVJvdXRlKHByb3BzLGNhcmQsY291cnNlLGxzVHlwZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZE1lZGlhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPSB7IHBhdGggPT09Jy9kYXNoYm9hcmQnID8gY2FyZC5pbWFnZTpjb3Vyc2UuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3BhdGggPT09Jy9kYXNoYm9hcmQnID8gY2FyZC5uYW1lIDogYCR7Y291cnNlLm5hbWV9ICR7Y2FyZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZENvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhdGggPT09Jy9kYXNoYm9hcmQnID8gY2FyZC5uYW1lIDogY2FyZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwYXRoID09PScvZGFzaGJvYXJkJyA/IGNhcmQuZGVzYyA6IGNvdXJzZS5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICDigJxTdHVkeSBoYXJkIHdoYXQgaW50ZXJlc3RzIHlvdSB0aGUgbW9zdCBpbiB0aGUgbW9zdCB1bmRpc2NpcGxpbmVkLCBpcnJldmVyZW50IGFuZCBvcmlnaW5hbCBtYW5uZXIgcG9zc2libGUu4oCdXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgYWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICBSaWNoYXJkIFAuIEZleW5tYW5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgICAgICA8L2Zvb3Rlcj4gXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+ICk6ICg8aDE+IDQwNCBFcnJvciA8L2gxPikgXG4gICAgICB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD4gXG4gICk7XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBdkNBO0FBQ0E7QUE0Q0E7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/Home.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LS/LS.js":
/*!*************************************************!*\
  !*** ./React/Shared/Components/Course/LS/LS.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  }\n}));\nfunction LS(props) {\n  var classes = useStyles();\n  var lsTypeParam = props.match.params.ls_type + '';\n  lsTypeParam = props.history.location.pathname.includes('invalid') ? 'invalid' : lsTypeParam;\n  var ls = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(ls => lsTypeParam === ls.type);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"AppBar\"], {\n    position: \"relative\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\",\n    color: \"inherit\",\n    noWrap: true\n  }, \"Learning Styles\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: classes.card\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"], {\n    className: classes.cardContent\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"body2\",\n    color: \"secondary\"\n  }, \"Hello there, to improve your ease of study, we use FLSM mapping techiques to asses your learning style and will give study materials according to that.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"h4\"\n  }, ls.name)), ls.type.includes('invalid') ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"body1\"\n  }, ls.type.charAt(0) === 'a' ? 'You like activites rathar than boring theories' : 'You learn from what you study')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"body1\"\n  }, ls.type.charAt(1) === 's' ? 'You think before approching a problem' : 'You give preference to you intuitions')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"body1\"\n  }, ls.type.charAt(2) === 'v' ? 'You like graphical stuff and illustrations' : 'You are good with reading ( verbal )')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"body1\"\n  }, ls.type.charAt(0) === 's' ? 'You study sequencially (step by step)' : 'You prefer global view about the things')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"body1\"\n  }, \"In the upcomming chapters you will get the learning materials that matches your interests. Happly Learning !\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    disabled: ls.type.includes('invalid'),\n    variant: \"outlined\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      props.history.push('/course/' + props.match.params.course + '/ls/' + ls.type);\n    }\n  }, \"Proceed  !\"))))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFMvTFMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFMvTFMuanM/ODYzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBcbiAgICBtYWtlU3R5bGVzLCBcbiAgICBCdXR0b24sXG4gICAgQXBwQmFyLCBcbiAgICBDYXJkQ29udGVudCwgXG4gICAgQ2FyZCxcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIERpdmlkZXIsXG4gICAgVG9vbGJhciwgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbiBpbXBvcnQgTGVhcm5pbmdTdHlsZXMgZnJvbSAnLi4vLi4vLi4vRGF0YS9sZWFybmluZ1N0eWxlcycgICBcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgaGFuZGxlQnV0dG9uIDp7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgICBmbG9hdDoncmlnaHQnXG4gICAgfSxcbiAgICBsaW5rIDoge1xuICAgICAgdGV4dERlY29yYXRpb24gOiAnbm9uZScsXG4gICAgfSxcbiAgICBoZXJvQ29udGVudDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDAsIDYpLFxuICAgIH0sXG4gICAgaGVyb0J1dHRvbnM6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICB9LFxuICAgIGNhcmRHcmlkOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg4KSxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBjYXJkTWVkaWE6IHtcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5XG4gICAgfSxcbiAgICBjYXJkQ29udGVudDoge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2KSxcbiAgICB9LFxuICB9KSk7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExTIChwcm9wcykge1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICBsZXQgbHNUeXBlUGFyYW0gPSBwcm9wcy5tYXRjaC5wYXJhbXMubHNfdHlwZSsnJ1xuXG4gICAgbHNUeXBlUGFyYW0gPSAgKHByb3BzLmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUpLmluY2x1ZGVzKCdpbnZhbGlkJykgPyAnaW52YWxpZCcgOiBsc1R5cGVQYXJhbVxuXG4gICAgY29uc3QgbHMgPSAgTGVhcm5pbmdTdHlsZXMuZmluZCgobHMpID0+IGxzVHlwZVBhcmFtID09PSBscy50eXBlKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBub1dyYXA+XG4gICAgICAgICAgICAgICAgICAgIExlYXJuaW5nIFN0eWxlc1xuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICA8L0FwcEJhcj4gICAgXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZENvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImJvZHkyXCIgY29sb3I9J3NlY29uZGFyeSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWxsbyB0aGVyZSwgdG8gaW1wcm92ZSB5b3VyIGVhc2Ugb2Ygc3R1ZHksIHdlIHVzZSBGTFNNIG1hcHBpbmcgdGVjaGlxdWVzIHRvIGFzc2VzIHlvdXIgbGVhcm5pbmcgc3R5bGUgYW5kIHdpbGwgZ2l2ZSBzdHVkeSBtYXRlcmlhbHMgYWNjb3JkaW5nIHRvIHRoYXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbHMudHlwZS5pbmNsdWRlcygnaW52YWxpZCcpID8gIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBscy50eXBlLmNoYXJBdCgwKSA9PT0gJ2EnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1lvdSBsaWtlIGFjdGl2aXRlcyByYXRoYXIgdGhhbiBib3JpbmcgdGhlb3JpZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1lvdSBsZWFybiBmcm9tIHdoYXQgeW91IHN0dWR5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxzLnR5cGUuY2hhckF0KDEpID09PSAncycgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91IHRoaW5rIGJlZm9yZSBhcHByb2NoaW5nIGEgcHJvYmxlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91IGdpdmUgcHJlZmVyZW5jZSB0byB5b3UgaW50dWl0aW9ucydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBscy50eXBlLmNoYXJBdCgyKSA9PT0gJ3YnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1lvdSBsaWtlIGdyYXBoaWNhbCBzdHVmZiBhbmQgaWxsdXN0cmF0aW9ucydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91IGFyZSBnb29kIHdpdGggcmVhZGluZyAoIHZlcmJhbCApJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxzLnR5cGUuY2hhckF0KDApID09PSAncycgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91IHN0dWR5IHNlcXVlbmNpYWxseSAoc3RlcCBieSBzdGVwKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnWW91IHByZWZlciBnbG9iYWwgdmlldyBhYm91dCB0aGUgdGhpbmdzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gdGhlIHVwY29tbWluZyBjaGFwdGVycyB5b3Ugd2lsbCBnZXQgdGhlIGxlYXJuaW5nIG1hdGVyaWFscyB0aGF0IG1hdGNoZXMgeW91ciBpbnRlcmVzdHMuIEhhcHBseSBMZWFybmluZyAhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBkaXNhYmxlZCA9eyBscy50eXBlLmluY2x1ZGVzKCdpbnZhbGlkJykgfSB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlQnV0dG9ufSBvbkNsaWNrPXsoZSk9PnsgIHByb3BzLmhpc3RvcnkucHVzaCggJy9jb3Vyc2UvJytwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlKycvbHMvJytscy50eXBlKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2NlZWQgICEgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQWpDQTtBQTBDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LS/LS.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/AcivityVerbal.js":
/*!*********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/AcivityVerbal.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: \"none\"\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: \"right\"\n  },\n  card: {\n    height: \"100%\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  },\n  cardMedia: {\n    paddingTop: \"56.25%\" // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: \"block\"\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h2\"\n  }, \"Data Types in Java\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body1\"\n  }, \"1) Primitive data types\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body1\"\n  }, \"2) Non - Primitive data types\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h4\"\n  }, \"Primitive data types\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"In Java, we have eight primitive data types: boolean, char, byte, short, int, long, float and double. Java developers included these data types to maintain the portability of java as the size of these primitive data types do not change from one operating system to another.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Byte\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"This can hold whole number between -128 and 127.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Short\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"This is greater than byte in terms of size and less than integer. Its range is -32,768 to 32767. Default size of this data type: 2 byte\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Long\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Used when int is not large enough to hold the value, it has wider range than int data type, ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. size: 8 bytes Default value: 0\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Double\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Sufficient for holding 15 decimal digits size: 8 bytes\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Float\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Sufficient for holding 6 to 7 decimal digits size: 4 bytes\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Boolean\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"holds either true of false.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    variant: \"middle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h3\"\n  }, \"Non - Primitive data types\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"String\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Arrays\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Classes\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Interface\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvQWNpdml0eVZlcmJhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9Db21wb25lbnRzL0NvdXJzZS9MU01hdGVyaWFscy9BY2l2aXR5VmVyYmFsLmpzPzBlMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFR5cG9ncmFwaHksXG4gIFBhcGVyLFxuICBtYWtlU3R5bGVzLFxuICBCdXR0b24sXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBEaXZpZGVyLFxuICBDb250YWluZXJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgbGVhcm5pbmdTdHlsZXMgZnJvbSBcIi4uLy4uLy4uL0RhdGEvbGVhcm5pbmdTdHlsZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBpY29uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIlxuICB9LFxuICBoZXJvQ29udGVudDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNilcbiAgfSxcbiAgaGVyb0J1dHRvbnM6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNClcbiAgfSxcbiAgY2FyZEdyaWQ6IHtcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOClcbiAgfSxcbiAgaGFuZGxlQnV0dG9uOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGZsb2F0OiBcInJpZ2h0XCJcbiAgfSxcbiAgY2FyZDoge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxuICB9LFxuICBjYXJkTWVkaWE6IHtcbiAgICBwYWRkaW5nVG9wOiBcIjU2LjI1JVwiIC8vIDE2OjlcbiAgfSxcbiAgY2FyZENvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICBmb290ZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpXG4gIH0sXG4gIFRleHQ6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgfVxufSkpO1xuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSwgcHJvcHMpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGNhdGVnb3J5ID0gcHJvcHMubWF0Y2gucGFyYW1zLmNhdGVnb3J5O1xuXG4gIGNvbnN0IGxzVHlwZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5sc190eXBlO1xuXG4gIGNvbnN0IGNvdXJzZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5jb3Vyc2U7XG5cbiAgY29uc3QgbHNDb250ZW50cyA9IGxlYXJuaW5nU3R5bGVzLmZpbmQoc3R5bGUgPT4gbHNUeXBlID09PSBzdHlsZS50eXBlKVxuICAgIC5jb250ZW50cztcblxuICBjb25zdCBwYXRoID1cbiAgICBsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpICsgMSA8IGxzQ29udGVudHMubGVuZ3RoXG4gICAgICA/IGAvY291cnNlLyR7Y291cnNlfS9scy8ke2xzVHlwZX0vJHtcbiAgICAgICAgICBsc0NvbnRlbnRzW2xzQ29udGVudHMuaW5kZXhPZihjYXRlZ29yeSkgKyAxXVxuICAgICAgICB9YFxuICAgICAgOiBgL2NvdXJzZS8ke2NvdXJzZX0vaG9tZWA7XG5cbiAgcHJvcHMuaGlzdG9yeS5wdXNoKHBhdGgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3ZlcnZpZXdWZXJiYWwocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICA8TGlzdD5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiPkRhdGEgVHlwZXMgaW4gSmF2YTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmllbnQ9XCJib2R5MVwiPjEpIFByaW1pdGl2ZSBkYXRhIHR5cGVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWVudD1cImJvZHkxXCI+MikgTm9uIC0gUHJpbWl0aXZlIGRhdGEgdHlwZXM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlByaW1pdGl2ZSBkYXRhIHR5cGVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgIEluIEphdmEsIHdlIGhhdmUgZWlnaHQgcHJpbWl0aXZlIGRhdGEgdHlwZXM6IGJvb2xlYW4sIGNoYXIsIGJ5dGUsXG4gICAgICAgICAgICBzaG9ydCwgaW50LCBsb25nLCBmbG9hdCBhbmQgZG91YmxlLiBKYXZhIGRldmVsb3BlcnMgaW5jbHVkZWQgdGhlc2VcbiAgICAgICAgICAgIGRhdGEgdHlwZXMgdG8gbWFpbnRhaW4gdGhlIHBvcnRhYmlsaXR5IG9mIGphdmEgYXMgdGhlIHNpemUgb2YgdGhlc2VcbiAgICAgICAgICAgIHByaW1pdGl2ZSBkYXRhIHR5cGVzIGRvIG5vdCBjaGFuZ2UgZnJvbSBvbmUgb3BlcmF0aW5nIHN5c3RlbSB0b1xuICAgICAgICAgICAgYW5vdGhlci5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkJ5dGU8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgIFRoaXMgY2FuIGhvbGQgd2hvbGUgbnVtYmVyIGJldHdlZW4gLTEyOCBhbmQgMTI3LlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+U2hvcnQ8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgIFRoaXMgaXMgZ3JlYXRlciB0aGFuIGJ5dGUgaW4gdGVybXMgb2Ygc2l6ZSBhbmQgbGVzcyB0aGFuIGludGVnZXIuXG4gICAgICAgICAgICBJdHMgcmFuZ2UgaXMgLTMyLDc2OCB0byAzMjc2Ny4gRGVmYXVsdCBzaXplIG9mIHRoaXMgZGF0YSB0eXBlOiAyXG4gICAgICAgICAgICBieXRlXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Mb25nPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgICBVc2VkIHdoZW4gaW50IGlzIG5vdCBsYXJnZSBlbm91Z2ggdG8gaG9sZCB0aGUgdmFsdWUsIGl0IGhhcyB3aWRlclxuICAgICAgICAgICAgcmFuZ2UgdGhhbiBpbnQgZGF0YSB0eXBlLCByYW5naW5nIGZyb20gLTksMjIzLDM3MiwwMzYsODU0LDc3NSw4MDggdG9cbiAgICAgICAgICAgIDksMjIzLDM3MiwwMzYsODU0LDc3NSw4MDcuIHNpemU6IDggYnl0ZXMgRGVmYXVsdCB2YWx1ZTogMFxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+RG91YmxlPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgICBTdWZmaWNpZW50IGZvciBob2xkaW5nIDE1IGRlY2ltYWwgZGlnaXRzIHNpemU6IDggYnl0ZXNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkZsb2F0PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgICBTdWZmaWNpZW50IGZvciBob2xkaW5nIDYgdG8gNyBkZWNpbWFsIGRpZ2l0cyBzaXplOiA0IGJ5dGVzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Cb29sZWFuPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+aG9sZHMgZWl0aGVyIHRydWUgb2YgZmFsc2UuPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJtaWRkbGVcIiAvPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5Ob24gLSBQcmltaXRpdmUgZGF0YSB0eXBlczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlN0cmluZzwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+QXJyYXlzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5DbGFzc2VzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5JbnRlcmZhY2U8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8L0xpc3Q+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlQnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBoYW5kbGVTdWJtaXQoZSwgcHJvcHMpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBOZXh0XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQXJDQTtBQUNBO0FBeUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFPQTtBQUNBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFBQTtBQVVBO0FBQUE7QUFHQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBQUE7QUFRQTtBQUFBO0FBR0E7QUFBQTtBQVFBO0FBQUE7QUFHQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBQUE7QUFNQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBWUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/AcivityVerbal.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/ActivityVisual.js":
/*!**********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/ActivityVisual.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvQWN0aXZpdHlWaXN1YWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvQWN0aXZpdHlWaXN1YWwuanM/NjZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFR5cG9ncmFwaHksIFxuICAgIFBhcGVyLCBcbiAgICBtYWtlU3R5bGVzLCBcbiAgICBCdXR0b24sXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBEaXZpZGVyLFxuICAgIENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG4gaW1wb3J0IGxlYXJuaW5nU3R5bGVzIGZyb20gJy4uLy4uLy4uL0RhdGEvbGVhcm5pbmdTdHlsZXMnICAgXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgICBpY29uOiB7XG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIGxpbmsgOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbiA6ICdub25lJyxcbiAgICB9LFxuICAgIGhlcm9Db250ZW50OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNiksXG4gICAgfSxcbiAgICBoZXJvQnV0dG9uczoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIH0sXG4gICAgY2FyZEdyaWQ6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIH0sXG4gICAgaGFuZGxlQnV0dG9uIDp7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgICAgZmxvYXQ6J3JpZ2h0J1xuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIGNhcmRNZWRpYToge1xuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcbiAgICB9LFxuICAgIGNhcmRDb250ZW50OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgIH0sXG4gICAgVGV4dCA6IHtcbiAgICAgICAgZGlzcGxheSA6ICdibG9jaydcbiAgICB9XG4gIH0pKTtcblxuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSxwcm9wcykgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIFxuICAgIGNvbnN0IGNhdGVnb3J5ID0gcHJvcHMubWF0Y2gucGFyYW1zLmNhdGVnb3J5XG5cbiAgICBjb25zdCBsc1R5cGUgPSBwcm9wcy5tYXRjaC5wYXJhbXMubHNfdHlwZVxuXG4gICAgY29uc3QgY291cnNlID0gcHJvcHMubWF0Y2gucGFyYW1zLmNvdXJzZVxuICAgIFxuICAgIGNvbnN0IGxzQ29udGVudHMgPSBsZWFybmluZ1N0eWxlcy5maW5kKHN0eWxlID0+IGxzVHlwZSA9PT0gc3R5bGUudHlwZSkuY29udGVudHNcblxuICAgIGNvbnN0IHBhdGggPSAobHNDb250ZW50cy5pbmRleE9mKGNhdGVnb3J5KSsxIDwgbHNDb250ZW50cy5sZW5ndGgpID8gYC9jb3Vyc2UvJHtjb3Vyc2V9L2xzLyR7bHNUeXBlfS8ke2xzQ29udGVudHNbbHNDb250ZW50cy5pbmRleE9mKGNhdGVnb3J5KSsxXX1gOmAvY291cnNlLyR7Y291cnNlfS9ob21lYFxuICAgIFxuICAgIHByb3BzLmhpc3RvcnkucHVzaChwYXRoKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdmVydmlld1ZlcmJhbCAocHJvcHMpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgICByZXR1cm4oXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J3NtJz5cbiAgICAgICAgICAgIDxmb3JtICBhdXRvQ29tcGxldGU9XCJvZmZcIiBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRGVmaW5lIENvbXBvbmVudHMgSGVyZSAqL31cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oYW5kbGVCdXR0b259IG9uQ2xpY2s9eyhlKT0+eyBoYW5kbGVTdWJtaXQoZSxwcm9wcyl9fT5cbiAgICAgICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFyQ0E7QUFDQTtBQTBDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/ActivityVisual.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/ContentVerbalDetailed.js":
/*!*****************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/ContentVerbalDetailed.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: \"none\"\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: \"right\"\n  },\n  card: {\n    height: \"100%\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  },\n  cardMedia: {\n    paddingTop: \"56.25%\" // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: \"block\"\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h2\"\n  }, \"Data Types in Java\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body1\"\n  }, \"1) Primitive data types\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body1\"\n  }, \"2) Non - Primitive data types\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h4\"\n  }, \"Primitive data types\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"In Java, we have eight primitive data types: boolean, char, byte, short, int, long, float and double. Java developers included these data types to maintain the portability of java as the size of these primitive data types do not change from one operating system to another.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Byte\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"This can hold whole number between -128 and 127. Mostly used to save memory and when you are certain that the numbers would be in the limit specified by byte data type. Default size of this data type: 1 byte. Default value: 0 another.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"byte num; num = 113;\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Short\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"This is greater than byte in terms of size and less than integer. Its range is -32,768 to 32767. Default size of this data type: 2 byte\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" short num; num = 150;\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Long\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Used when int is not large enough to hold the value, it has wider range than int data type, ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. size: 8 bytes Default value: 0\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" long num = -12332252626L;\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Double\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Sufficient for holding 15 decimal digits size: 8 bytes\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"double num = -42937737.9d;\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Float\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Sufficient for holding 6 to 7 decimal digits size: 4 bytes\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"float num = 19.98f;\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Boolean\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"holds either true of false.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"float num = 19.98f;\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    variant: \"middle\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h4\"\n  }, \"Non - Primitive data types\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"String\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"String is a sequence of characters\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Arrays\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Arrays in Java are homogeneous data structures implemented in Java as objects.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Classes\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"A class in Java is a blueprint which includes all your data\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\"\n  }, \"Interface\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body1\"\n  }, \"Like a class, an interface can have methods and variables, but the methods declared in interface are by default abstract (only method signature, no body).\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvQ29udGVudFZlcmJhbERldGFpbGVkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0NvbnRlbnRWZXJiYWxEZXRhaWxlZC5qcz9lMjY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBUeXBvZ3JhcGh5LFxuICBQYXBlcixcbiAgbWFrZVN0eWxlcyxcbiAgQnV0dG9uLFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgRGl2aWRlcixcbiAgQ29udGFpbmVyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGxlYXJuaW5nU3R5bGVzIGZyb20gXCIuLi8uLi8uLi9EYXRhL2xlYXJuaW5nU3R5bGVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgaWNvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpXG4gIH0sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCJcbiAgfSxcbiAgaGVyb0NvbnRlbnQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDAsIDYpXG4gIH0sXG4gIGhlcm9CdXR0b25zOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpXG4gIH0sXG4gIGNhcmRHcmlkOiB7XG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpXG4gIH0sXG4gIGhhbmRsZUJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBmbG9hdDogXCJyaWdodFwiXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCJcbiAgfSxcbiAgY2FyZE1lZGlhOiB7XG4gICAgcGFkZGluZ1RvcDogXCI1Ni4yNSVcIiAvLyAxNjo5XG4gIH0sXG4gIGNhcmRDb250ZW50OiB7XG4gICAgZmxleEdyb3c6IDFcbiAgfSxcbiAgZm9vdGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2KVxuICB9LFxuICBUZXh0OiB7XG4gICAgZGlzcGxheTogXCJibG9ja1wiXG4gIH1cbn0pKTtcblxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUsIHByb3BzKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBjYXRlZ29yeSA9IHByb3BzLm1hdGNoLnBhcmFtcy5jYXRlZ29yeTtcblxuICBjb25zdCBsc1R5cGUgPSBwcm9wcy5tYXRjaC5wYXJhbXMubHNfdHlwZTtcblxuICBjb25zdCBjb3Vyc2UgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlO1xuXG4gIGNvbnN0IGxzQ29udGVudHMgPSBsZWFybmluZ1N0eWxlcy5maW5kKHN0eWxlID0+IGxzVHlwZSA9PT0gc3R5bGUudHlwZSlcbiAgICAuY29udGVudHM7XG5cbiAgY29uc3QgcGF0aCA9XG4gICAgbHNDb250ZW50cy5pbmRleE9mKGNhdGVnb3J5KSArIDEgPCBsc0NvbnRlbnRzLmxlbmd0aFxuICAgICAgPyBgL2NvdXJzZS8ke2NvdXJzZX0vbHMvJHtsc1R5cGV9LyR7XG4gICAgICAgICAgbHNDb250ZW50c1tsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpICsgMV1cbiAgICAgICAgfWBcbiAgICAgIDogYC9jb3Vyc2UvJHtjb3Vyc2V9L2hvbWVgO1xuXG4gIHByb3BzLmhpc3RvcnkucHVzaChwYXRoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VmVyYmFsKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIiBub1ZhbGlkYXRlPlxuICAgICAgPExpc3Q+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIj5EYXRhIFR5cGVzIGluIEphdmE8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpZW50PVwiYm9keTFcIj4xKSBQcmltaXRpdmUgZGF0YSB0eXBlczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmllbnQ9XCJib2R5MVwiPjIpIE5vbiAtIFByaW1pdGl2ZSBkYXRhIHR5cGVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5QcmltaXRpdmUgZGF0YSB0eXBlczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgICBJbiBKYXZhLCB3ZSBoYXZlIGVpZ2h0IHByaW1pdGl2ZSBkYXRhIHR5cGVzOiBib29sZWFuLCBjaGFyLCBieXRlLFxuICAgICAgICAgICAgc2hvcnQsIGludCwgbG9uZywgZmxvYXQgYW5kIGRvdWJsZS4gSmF2YSBkZXZlbG9wZXJzIGluY2x1ZGVkIHRoZXNlXG4gICAgICAgICAgICBkYXRhIHR5cGVzIHRvIG1haW50YWluIHRoZSBwb3J0YWJpbGl0eSBvZiBqYXZhIGFzIHRoZSBzaXplIG9mIHRoZXNlXG4gICAgICAgICAgICBwcmltaXRpdmUgZGF0YSB0eXBlcyBkbyBub3QgY2hhbmdlIGZyb20gb25lIG9wZXJhdGluZyBzeXN0ZW0gdG9cbiAgICAgICAgICAgIGFub3RoZXIuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5CeXRlPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgICBUaGlzIGNhbiBob2xkIHdob2xlIG51bWJlciBiZXR3ZWVuIC0xMjggYW5kIDEyNy4gTW9zdGx5IHVzZWQgdG8gc2F2ZVxuICAgICAgICAgICAgbWVtb3J5IGFuZCB3aGVuIHlvdSBhcmUgY2VydGFpbiB0aGF0IHRoZSBudW1iZXJzIHdvdWxkIGJlIGluIHRoZVxuICAgICAgICAgICAgbGltaXQgc3BlY2lmaWVkIGJ5IGJ5dGUgZGF0YSB0eXBlLiBEZWZhdWx0IHNpemUgb2YgdGhpcyBkYXRhIHR5cGU6IDFcbiAgICAgICAgICAgIGJ5dGUuIERlZmF1bHQgdmFsdWU6IDAgYW5vdGhlci5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgIDxwPmJ5dGUgbnVtOyBudW0gPSAxMTM7PC9wPlxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+U2hvcnQ8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgIFRoaXMgaXMgZ3JlYXRlciB0aGFuIGJ5dGUgaW4gdGVybXMgb2Ygc2l6ZSBhbmQgbGVzcyB0aGFuIGludGVnZXIuXG4gICAgICAgICAgICBJdHMgcmFuZ2UgaXMgLTMyLDc2OCB0byAzMjc2Ny4gRGVmYXVsdCBzaXplIG9mIHRoaXMgZGF0YSB0eXBlOiAyXG4gICAgICAgICAgICBieXRlXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICA8cD4gc2hvcnQgbnVtOyBudW0gPSAxNTA7PC9wPlxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+TG9uZzwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgVXNlZCB3aGVuIGludCBpcyBub3QgbGFyZ2UgZW5vdWdoIHRvIGhvbGQgdGhlIHZhbHVlLCBpdCBoYXMgd2lkZXJcbiAgICAgICAgICAgIHJhbmdlIHRoYW4gaW50IGRhdGEgdHlwZSwgcmFuZ2luZyBmcm9tIC05LDIyMywzNzIsMDM2LDg1NCw3NzUsODA4IHRvXG4gICAgICAgICAgICA5LDIyMywzNzIsMDM2LDg1NCw3NzUsODA3LiBzaXplOiA4IGJ5dGVzIERlZmF1bHQgdmFsdWU6IDBcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgIDxwPiBsb25nIG51bSA9IC0xMjMzMjI1MjYyNkw7PC9wPlxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+RG91YmxlPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgICBTdWZmaWNpZW50IGZvciBob2xkaW5nIDE1IGRlY2ltYWwgZGlnaXRzIHNpemU6IDggYnl0ZXNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgIDxwPmRvdWJsZSBudW0gPSAtNDI5Mzc3MzcuOWQ7PC9wPlxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+RmxvYXQ8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgIFN1ZmZpY2llbnQgZm9yIGhvbGRpbmcgNiB0byA3IGRlY2ltYWwgZGlnaXRzIHNpemU6IDQgYnl0ZXNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgIDxwPmZsb2F0IG51bSA9IDE5Ljk4Zjs8L3A+XG4gICAgICAgICAgPC9jb2RlPlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Cb29sZWFuPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+aG9sZHMgZWl0aGVyIHRydWUgb2YgZmFsc2UuPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICA8cD5mbG9hdCBudW0gPSAxOS45OGY7PC9wPlxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwibWlkZGxlXCIgLz5cblxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+Tm9uIC0gUHJpbWl0aXZlIGRhdGEgdHlwZXM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5TdHJpbmc8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgIFN0cmluZyBpcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkFycmF5czwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgQXJyYXlzIGluIEphdmEgYXJlIGhvbW9nZW5lb3VzIGRhdGEgc3RydWN0dXJlcyBpbXBsZW1lbnRlZCBpbiBKYXZhXG4gICAgICAgICAgICBhcyBvYmplY3RzLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+Q2xhc3NlczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgQSBjbGFzcyBpbiBKYXZhIGlzIGEgYmx1ZXByaW50IHdoaWNoIGluY2x1ZGVzIGFsbCB5b3VyIGRhdGFcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkludGVyZmFjZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgTGlrZSBhIGNsYXNzLCBhbiBpbnRlcmZhY2UgY2FuIGhhdmUgbWV0aG9kcyBhbmQgdmFyaWFibGVzLCBidXQgdGhlXG4gICAgICAgICAgICBtZXRob2RzIGRlY2xhcmVkIGluIGludGVyZmFjZSBhcmUgYnkgZGVmYXVsdCBhYnN0cmFjdCAob25seSBtZXRob2RcbiAgICAgICAgICAgIHNpZ25hdHVyZSwgbm8gYm9keSkuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgPC9MaXN0PlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlQnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBoYW5kbGVTdWJtaXQoZSwgcHJvcHMpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBOZXh0XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQXJDQTtBQUNBO0FBeUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFPQTtBQUNBO0FBQ0E7QUFyQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFBQTtBQVVBO0FBQUE7QUFHQTtBQUFBO0FBY0E7QUFBQTtBQUdBO0FBQUE7QUFhQTtBQUFBO0FBR0E7QUFBQTtBQWFBO0FBQUE7QUFHQTtBQUFBO0FBV0E7QUFBQTtBQUdBO0FBQUE7QUFXQTtBQUFBO0FBR0E7QUFBQTtBQVFBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFNQTtBQUFBO0FBR0E7QUFBQTtBQU9BO0FBQUE7QUFHQTtBQUFBO0FBTUE7QUFBQTtBQUdBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/ContentVerbalDetailed.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/ContentVerbalOverview.js":
/*!*****************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/ContentVerbalOverview.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvQ29udGVudFZlcmJhbE92ZXJ2aWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0NvbnRlbnRWZXJiYWxPdmVydmlldy5qcz9iOGViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgXG4gICAgUGFwZXIsIFxuICAgIG1ha2VTdHlsZXMsIFxuICAgIEJ1dHRvbixcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIERpdmlkZXIsXG4gICAgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbiBpbXBvcnQgbGVhcm5pbmdTdHlsZXMgZnJvbSAnLi4vLi4vLi4vRGF0YS9sZWFybmluZ1N0eWxlcycgICBcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgbGluayA6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uIDogJ25vbmUnLFxuICAgIH0sXG4gICAgaGVyb0NvbnRlbnQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcbiAgICB9LFxuICAgIGhlcm9CdXR0b25zOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgICBjYXJkR3JpZDoge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICBmbG9hdDoncmlnaHQnXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgY2FyZE1lZGlhOiB7XG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICAgIH0sXG4gICAgY2FyZENvbnRlbnQ6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXG4gICAgfSxcbiAgICBUZXh0IDoge1xuICAgICAgICBkaXNwbGF5IDogJ2Jsb2NrJ1xuICAgIH1cbiAgfSkpO1xuXG5cbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlLHByb3BzKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY2F0ZWdvcnlcblxuICAgIGNvbnN0IGxzVHlwZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5sc190eXBlXG5cbiAgICBjb25zdCBjb3Vyc2UgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlXG4gICAgXG4gICAgY29uc3QgbHNDb250ZW50cyA9IGxlYXJuaW5nU3R5bGVzLmZpbmQoc3R5bGUgPT4gbHNUeXBlID09PSBzdHlsZS50eXBlKS5jb250ZW50c1xuXG4gICAgY29uc3QgcGF0aCA9IChsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzEgPCBsc0NvbnRlbnRzLmxlbmd0aCkgPyBgL2NvdXJzZS8ke2NvdXJzZX0vbHMvJHtsc1R5cGV9LyR7bHNDb250ZW50c1tsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzFdfWA6YC9jb3Vyc2UvJHtjb3Vyc2V9L2hvbWVgXG4gICAgXG4gICAgcHJvcHMuaGlzdG9yeS5wdXNoKHBhdGgpXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VmVyYmFsIChwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIHJldHVybihcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nc20nPlxuICAgICAgICAgICAgPGZvcm0gIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWZpbmUgQ29tcG9uZW50cyBIZXJlICovfVxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbmRsZUJ1dHRvbn0gb25DbGljaz17KGUpPT57IGhhbmRsZVN1Ym1pdChlLHByb3BzKX19PlxuICAgICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQXJDQTtBQUNBO0FBMENBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/ContentVerbalOverview.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/ContentVisualDetailed.js":
/*!*****************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/ContentVisualDetailed.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvQ29udGVudFZpc3VhbERldGFpbGVkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0NvbnRlbnRWaXN1YWxEZXRhaWxlZC5qcz8zMmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgXG4gICAgUGFwZXIsIFxuICAgIG1ha2VTdHlsZXMsIFxuICAgIEJ1dHRvbixcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIERpdmlkZXIsXG4gICAgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbiBpbXBvcnQgbGVhcm5pbmdTdHlsZXMgZnJvbSAnLi4vLi4vLi4vRGF0YS9sZWFybmluZ1N0eWxlcycgICBcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgbGluayA6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uIDogJ25vbmUnLFxuICAgIH0sXG4gICAgaGVyb0NvbnRlbnQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcbiAgICB9LFxuICAgIGhlcm9CdXR0b25zOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgICBjYXJkR3JpZDoge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICBmbG9hdDoncmlnaHQnXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgY2FyZE1lZGlhOiB7XG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICAgIH0sXG4gICAgY2FyZENvbnRlbnQ6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXG4gICAgfSxcbiAgICBUZXh0IDoge1xuICAgICAgICBkaXNwbGF5IDogJ2Jsb2NrJ1xuICAgIH1cbiAgfSkpO1xuXG5cbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlLHByb3BzKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY2F0ZWdvcnlcblxuICAgIGNvbnN0IGxzVHlwZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5sc190eXBlXG5cbiAgICBjb25zdCBjb3Vyc2UgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlXG4gICAgXG4gICAgY29uc3QgbHNDb250ZW50cyA9IGxlYXJuaW5nU3R5bGVzLmZpbmQoc3R5bGUgPT4gbHNUeXBlID09PSBzdHlsZS50eXBlKS5jb250ZW50c1xuXG4gICAgY29uc3QgcGF0aCA9IChsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzEgPCBsc0NvbnRlbnRzLmxlbmd0aCkgPyBgL2NvdXJzZS8ke2NvdXJzZX0vbHMvJHtsc1R5cGV9LyR7bHNDb250ZW50c1tsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzFdfWA6YC9jb3Vyc2UvJHtjb3Vyc2V9L2hvbWVgXG4gICAgXG4gICAgcHJvcHMuaGlzdG9yeS5wdXNoKHBhdGgpXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VmVyYmFsIChwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIHJldHVybihcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nc20nPlxuICAgICAgICAgICAgPGZvcm0gIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWZpbmUgQ29tcG9uZW50cyBIZXJlICovfVxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbmRsZUJ1dHRvbn0gb25DbGljaz17KGUpPT57IGhhbmRsZVN1Ym1pdChlLHByb3BzKX19PlxuICAgICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQXJDQTtBQUNBO0FBMENBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/ContentVisualDetailed.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/ContentVisualOverview.js":
/*!*****************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/ContentVisualOverview.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvQ29udGVudFZpc3VhbE92ZXJ2aWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0NvbnRlbnRWaXN1YWxPdmVydmlldy5qcz9lM2FiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgXG4gICAgUGFwZXIsIFxuICAgIG1ha2VTdHlsZXMsIFxuICAgIEJ1dHRvbixcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIERpdmlkZXIsXG4gICAgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbiBpbXBvcnQgbGVhcm5pbmdTdHlsZXMgZnJvbSAnLi4vLi4vLi4vRGF0YS9sZWFybmluZ1N0eWxlcycgICBcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgbGluayA6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uIDogJ25vbmUnLFxuICAgIH0sXG4gICAgaGVyb0NvbnRlbnQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcbiAgICB9LFxuICAgIGhlcm9CdXR0b25zOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgICBjYXJkR3JpZDoge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICBmbG9hdDoncmlnaHQnXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgY2FyZE1lZGlhOiB7XG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICAgIH0sXG4gICAgY2FyZENvbnRlbnQ6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXG4gICAgfSxcbiAgICBUZXh0IDoge1xuICAgICAgICBkaXNwbGF5IDogJ2Jsb2NrJ1xuICAgIH1cbiAgfSkpO1xuXG5cbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlLHByb3BzKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY2F0ZWdvcnlcblxuICAgIGNvbnN0IGxzVHlwZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5sc190eXBlXG5cbiAgICBjb25zdCBjb3Vyc2UgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlXG4gICAgXG4gICAgY29uc3QgbHNDb250ZW50cyA9IGxlYXJuaW5nU3R5bGVzLmZpbmQoc3R5bGUgPT4gbHNUeXBlID09PSBzdHlsZS50eXBlKS5jb250ZW50c1xuXG4gICAgY29uc3QgcGF0aCA9IChsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzEgPCBsc0NvbnRlbnRzLmxlbmd0aCkgPyBgL2NvdXJzZS8ke2NvdXJzZX0vbHMvJHtsc1R5cGV9LyR7bHNDb250ZW50c1tsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzFdfWA6YC9jb3Vyc2UvJHtjb3Vyc2V9L2hvbWVgXG4gICAgXG4gICAgcHJvcHMuaGlzdG9yeS5wdXNoKHBhdGgpXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VmVyYmFsIChwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIHJldHVybihcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nc20nPlxuICAgICAgICAgICAgPGZvcm0gIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWZpbmUgQ29tcG9uZW50cyBIZXJlICovfVxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbmRsZUJ1dHRvbn0gb25DbGljaz17KGUpPT57IGhhbmRsZVN1Ym1pdChlLHByb3BzKX19PlxuICAgICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQXJDQTtBQUNBO0FBMENBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/ContentVisualOverview.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/DefinitionVerbalDetailed.js":
/*!********************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/DefinitionVerbalDetailed.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvRGVmaW5pdGlvblZlcmJhbERldGFpbGVkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0RlZmluaXRpb25WZXJiYWxEZXRhaWxlZC5qcz80ZGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgXG4gICAgUGFwZXIsIFxuICAgIG1ha2VTdHlsZXMsIFxuICAgIEJ1dHRvbixcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIERpdmlkZXIsXG4gICAgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbiBpbXBvcnQgbGVhcm5pbmdTdHlsZXMgZnJvbSAnLi4vLi4vLi4vRGF0YS9sZWFybmluZ1N0eWxlcycgICBcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgbGluayA6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uIDogJ25vbmUnLFxuICAgIH0sXG4gICAgaGVyb0NvbnRlbnQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcbiAgICB9LFxuICAgIGhlcm9CdXR0b25zOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgICBjYXJkR3JpZDoge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICBmbG9hdDoncmlnaHQnXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgY2FyZE1lZGlhOiB7XG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICAgIH0sXG4gICAgY2FyZENvbnRlbnQ6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXG4gICAgfSxcbiAgICBUZXh0IDoge1xuICAgICAgICBkaXNwbGF5IDogJ2Jsb2NrJ1xuICAgIH1cbiAgfSkpO1xuXG5cbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlLHByb3BzKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY2F0ZWdvcnlcblxuICAgIGNvbnN0IGxzVHlwZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5sc190eXBlXG5cbiAgICBjb25zdCBjb3Vyc2UgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlXG4gICAgXG4gICAgY29uc3QgbHNDb250ZW50cyA9IGxlYXJuaW5nU3R5bGVzLmZpbmQoc3R5bGUgPT4gbHNUeXBlID09PSBzdHlsZS50eXBlKS5jb250ZW50c1xuXG4gICAgY29uc3QgcGF0aCA9IChsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzEgPCBsc0NvbnRlbnRzLmxlbmd0aCkgPyBgL2NvdXJzZS8ke2NvdXJzZX0vbHMvJHtsc1R5cGV9LyR7bHNDb250ZW50c1tsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzFdfWA6YC9jb3Vyc2UvJHtjb3Vyc2V9L2hvbWVgXG4gICAgXG4gICAgcHJvcHMuaGlzdG9yeS5wdXNoKHBhdGgpXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VmVyYmFsIChwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIHJldHVybihcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nc20nPlxuICAgICAgICAgICAgPGZvcm0gIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWZpbmUgQ29tcG9uZW50cyBIZXJlICovfVxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbmRsZUJ1dHRvbn0gb25DbGljaz17KGUpPT57IGhhbmRsZVN1Ym1pdChlLHByb3BzKX19PlxuICAgICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQXJDQTtBQUNBO0FBMENBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/DefinitionVerbalDetailed.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/DefinitionVerbalOverview.js":
/*!********************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/DefinitionVerbalOverview.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvRGVmaW5pdGlvblZlcmJhbE92ZXJ2aWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0RlZmluaXRpb25WZXJiYWxPdmVydmlldy5qcz9kYzQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgXG4gICAgUGFwZXIsIFxuICAgIG1ha2VTdHlsZXMsIFxuICAgIEJ1dHRvbixcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIERpdmlkZXIsXG4gICAgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbiBpbXBvcnQgbGVhcm5pbmdTdHlsZXMgZnJvbSAnLi4vLi4vLi4vRGF0YS9sZWFybmluZ1N0eWxlcycgICBcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgbGluayA6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uIDogJ25vbmUnLFxuICAgIH0sXG4gICAgaGVyb0NvbnRlbnQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcbiAgICB9LFxuICAgIGhlcm9CdXR0b25zOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgICBjYXJkR3JpZDoge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICBmbG9hdDoncmlnaHQnXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgY2FyZE1lZGlhOiB7XG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICAgIH0sXG4gICAgY2FyZENvbnRlbnQ6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXG4gICAgfSxcbiAgICBUZXh0IDoge1xuICAgICAgICBkaXNwbGF5IDogJ2Jsb2NrJ1xuICAgIH1cbiAgfSkpO1xuXG5cbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlLHByb3BzKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY2F0ZWdvcnlcblxuICAgIGNvbnN0IGxzVHlwZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5sc190eXBlXG5cbiAgICBjb25zdCBjb3Vyc2UgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlXG4gICAgXG4gICAgY29uc3QgbHNDb250ZW50cyA9IGxlYXJuaW5nU3R5bGVzLmZpbmQoc3R5bGUgPT4gbHNUeXBlID09PSBzdHlsZS50eXBlKS5jb250ZW50c1xuXG4gICAgY29uc3QgcGF0aCA9IChsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzEgPCBsc0NvbnRlbnRzLmxlbmd0aCkgPyBgL2NvdXJzZS8ke2NvdXJzZX0vbHMvJHtsc1R5cGV9LyR7bHNDb250ZW50c1tsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzFdfWA6YC9jb3Vyc2UvJHtjb3Vyc2V9L2hvbWVgXG4gICAgXG4gICAgcHJvcHMuaGlzdG9yeS5wdXNoKHBhdGgpXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VmVyYmFsIChwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIHJldHVybihcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nc20nPlxuICAgICAgICAgICAgPGZvcm0gIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWZpbmUgQ29tcG9uZW50cyBIZXJlICovfVxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbmRsZUJ1dHRvbn0gb25DbGljaz17KGUpPT57IGhhbmRsZVN1Ym1pdChlLHByb3BzKX19PlxuICAgICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQXJDQTtBQUNBO0FBMENBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/DefinitionVerbalOverview.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/DefinitionVisualDetailed.js":
/*!********************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/DefinitionVisualDetailed.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvRGVmaW5pdGlvblZpc3VhbERldGFpbGVkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0RlZmluaXRpb25WaXN1YWxEZXRhaWxlZC5qcz80MWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgXG4gICAgUGFwZXIsIFxuICAgIG1ha2VTdHlsZXMsIFxuICAgIEJ1dHRvbixcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIERpdmlkZXIsXG4gICAgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbiBpbXBvcnQgbGVhcm5pbmdTdHlsZXMgZnJvbSAnLi4vLi4vLi4vRGF0YS9sZWFybmluZ1N0eWxlcycgICBcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgbGluayA6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uIDogJ25vbmUnLFxuICAgIH0sXG4gICAgaGVyb0NvbnRlbnQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcbiAgICB9LFxuICAgIGhlcm9CdXR0b25zOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgICBjYXJkR3JpZDoge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICBmbG9hdDoncmlnaHQnXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgY2FyZE1lZGlhOiB7XG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICAgIH0sXG4gICAgY2FyZENvbnRlbnQ6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXG4gICAgfSxcbiAgICBUZXh0IDoge1xuICAgICAgICBkaXNwbGF5IDogJ2Jsb2NrJ1xuICAgIH1cbiAgfSkpO1xuXG5cbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlLHByb3BzKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY2F0ZWdvcnlcblxuICAgIGNvbnN0IGxzVHlwZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5sc190eXBlXG5cbiAgICBjb25zdCBjb3Vyc2UgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlXG4gICAgXG4gICAgY29uc3QgbHNDb250ZW50cyA9IGxlYXJuaW5nU3R5bGVzLmZpbmQoc3R5bGUgPT4gbHNUeXBlID09PSBzdHlsZS50eXBlKS5jb250ZW50c1xuXG4gICAgY29uc3QgcGF0aCA9IChsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzEgPCBsc0NvbnRlbnRzLmxlbmd0aCkgPyBgL2NvdXJzZS8ke2NvdXJzZX0vbHMvJHtsc1R5cGV9LyR7bHNDb250ZW50c1tsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzFdfWA6YC9jb3Vyc2UvJHtjb3Vyc2V9L2hvbWVgXG4gICAgXG4gICAgcHJvcHMuaGlzdG9yeS5wdXNoKHBhdGgpXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VmVyYmFsIChwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIHJldHVybihcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nc20nPlxuICAgICAgICAgICAgPGZvcm0gIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWZpbmUgQ29tcG9uZW50cyBIZXJlICovfVxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbmRsZUJ1dHRvbn0gb25DbGljaz17KGUpPT57IGhhbmRsZVN1Ym1pdChlLHByb3BzKX19PlxuICAgICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQXJDQTtBQUNBO0FBMENBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/DefinitionVisualDetailed.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/DefinitionVisualOverview.js":
/*!********************************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/DefinitionVisualOverview.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvRGVmaW5pdGlvblZpc3VhbE92ZXJ2aWV3LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0RlZmluaXRpb25WaXN1YWxPdmVydmlldy5qcz8wY2QxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgXG4gICAgUGFwZXIsIFxuICAgIG1ha2VTdHlsZXMsIFxuICAgIEJ1dHRvbixcbiAgICBMaXN0LFxuICAgIExpc3RJdGVtLFxuICAgIERpdmlkZXIsXG4gICAgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbiBpbXBvcnQgbGVhcm5pbmdTdHlsZXMgZnJvbSAnLi4vLi4vLi4vRGF0YS9sZWFybmluZ1N0eWxlcycgICBcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgbGluayA6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uIDogJ25vbmUnLFxuICAgIH0sXG4gICAgaGVyb0NvbnRlbnQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4LCAwLCA2KSxcbiAgICB9LFxuICAgIGhlcm9CdXR0b25zOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgfSxcbiAgICBjYXJkR3JpZDoge1xuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICBmbG9hdDoncmlnaHQnXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgY2FyZE1lZGlhOiB7XG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICAgIH0sXG4gICAgY2FyZENvbnRlbnQ6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNiksXG4gICAgfSxcbiAgICBUZXh0IDoge1xuICAgICAgICBkaXNwbGF5IDogJ2Jsb2NrJ1xuICAgIH1cbiAgfSkpO1xuXG5cbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlLHByb3BzKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY2F0ZWdvcnlcblxuICAgIGNvbnN0IGxzVHlwZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5sc190eXBlXG5cbiAgICBjb25zdCBjb3Vyc2UgPSBwcm9wcy5tYXRjaC5wYXJhbXMuY291cnNlXG4gICAgXG4gICAgY29uc3QgbHNDb250ZW50cyA9IGxlYXJuaW5nU3R5bGVzLmZpbmQoc3R5bGUgPT4gbHNUeXBlID09PSBzdHlsZS50eXBlKS5jb250ZW50c1xuXG4gICAgY29uc3QgcGF0aCA9IChsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzEgPCBsc0NvbnRlbnRzLmxlbmd0aCkgPyBgL2NvdXJzZS8ke2NvdXJzZX0vbHMvJHtsc1R5cGV9LyR7bHNDb250ZW50c1tsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpKzFdfWA6YC9jb3Vyc2UvJHtjb3Vyc2V9L2hvbWVgXG4gICAgXG4gICAgcHJvcHMuaGlzdG9yeS5wdXNoKHBhdGgpXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE92ZXJ2aWV3VmVyYmFsIChwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuICAgIHJldHVybihcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nc20nPlxuICAgICAgICAgICAgPGZvcm0gIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWZpbmUgQ29tcG9uZW50cyBIZXJlICovfVxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbmRsZUJ1dHRvbn0gb25DbGljaz17KGUpPT57IGhhbmRsZVN1Ym1pdChlLHByb3BzKX19PlxuICAgICAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQXJDQTtBQUNBO0FBMENBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/DefinitionVisualOverview.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/OverviewVerbal.js":
/*!**********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/OverviewVerbal.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvT3ZlcnZpZXdWZXJiYWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvT3ZlcnZpZXdWZXJiYWwuanM/MWFhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFR5cG9ncmFwaHksIFxuICAgIFBhcGVyLCBcbiAgICBtYWtlU3R5bGVzLCBcbiAgICBCdXR0b24sXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBEaXZpZGVyLFxuICAgIENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG4gaW1wb3J0IGxlYXJuaW5nU3R5bGVzIGZyb20gJy4uLy4uLy4uL0RhdGEvbGVhcm5pbmdTdHlsZXMnICAgXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgICBpY29uOiB7XG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIGxpbmsgOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbiA6ICdub25lJyxcbiAgICB9LFxuICAgIGhlcm9Db250ZW50OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNiksXG4gICAgfSxcbiAgICBoZXJvQnV0dG9uczoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIH0sXG4gICAgY2FyZEdyaWQ6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIH0sXG4gICAgaGFuZGxlQnV0dG9uIDp7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgICAgZmxvYXQ6J3JpZ2h0J1xuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIGNhcmRNZWRpYToge1xuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcbiAgICB9LFxuICAgIGNhcmRDb250ZW50OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgIH0sXG4gICAgVGV4dCA6IHtcbiAgICAgICAgZGlzcGxheSA6ICdibG9jaydcbiAgICB9XG4gIH0pKTtcblxuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSxwcm9wcykgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIFxuICAgIGNvbnN0IGNhdGVnb3J5ID0gcHJvcHMubWF0Y2gucGFyYW1zLmNhdGVnb3J5XG5cbiAgICBjb25zdCBsc1R5cGUgPSBwcm9wcy5tYXRjaC5wYXJhbXMubHNfdHlwZVxuXG4gICAgY29uc3QgY291cnNlID0gcHJvcHMubWF0Y2gucGFyYW1zLmNvdXJzZVxuICAgIFxuICAgIGNvbnN0IGxzQ29udGVudHMgPSBsZWFybmluZ1N0eWxlcy5maW5kKHN0eWxlID0+IGxzVHlwZSA9PT0gc3R5bGUudHlwZSkuY29udGVudHNcblxuICAgIGNvbnN0IHBhdGggPSAobHNDb250ZW50cy5pbmRleE9mKGNhdGVnb3J5KSsxIDwgbHNDb250ZW50cy5sZW5ndGgpID8gYC9jb3Vyc2UvJHtjb3Vyc2V9L2xzLyR7bHNUeXBlfS8ke2xzQ29udGVudHNbbHNDb250ZW50cy5pbmRleE9mKGNhdGVnb3J5KSsxXX1gOmAvY291cnNlLyR7Y291cnNlfS9ob21lYFxuICAgIFxuICAgIHByb3BzLmhpc3RvcnkucHVzaChwYXRoKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdmVydmlld1ZlcmJhbCAocHJvcHMpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgICByZXR1cm4oXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J3NtJz5cbiAgICAgICAgICAgIDxmb3JtICBhdXRvQ29tcGxldGU9XCJvZmZcIiBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRGVmaW5lIENvbXBvbmVudHMgSGVyZSAqL31cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oYW5kbGVCdXR0b259IG9uQ2xpY2s9eyhlKT0+eyBoYW5kbGVTdWJtaXQoZSxwcm9wcyl9fT5cbiAgICAgICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFyQ0E7QUFDQTtBQTBDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/OverviewVerbal.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/OverviewVisual.js":
/*!**********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/OverviewVisual.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvT3ZlcnZpZXdWaXN1YWwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvT3ZlcnZpZXdWaXN1YWwuanM/Y2U5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFR5cG9ncmFwaHksIFxuICAgIFBhcGVyLCBcbiAgICBtYWtlU3R5bGVzLCBcbiAgICBCdXR0b24sXG4gICAgTGlzdCxcbiAgICBMaXN0SXRlbSxcbiAgICBEaXZpZGVyLFxuICAgIENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG4gaW1wb3J0IGxlYXJuaW5nU3R5bGVzIGZyb20gJy4uLy4uLy4uL0RhdGEvbGVhcm5pbmdTdHlsZXMnICAgXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgICBpY29uOiB7XG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIGxpbmsgOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbiA6ICdub25lJyxcbiAgICB9LFxuICAgIGhlcm9Db250ZW50OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNiksXG4gICAgfSxcbiAgICBoZXJvQnV0dG9uczoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIH0sXG4gICAgY2FyZEdyaWQ6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIH0sXG4gICAgaGFuZGxlQnV0dG9uIDp7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgICAgZmxvYXQ6J3JpZ2h0J1xuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIGNhcmRNZWRpYToge1xuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcbiAgICB9LFxuICAgIGNhcmRDb250ZW50OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgIH0sXG4gICAgVGV4dCA6IHtcbiAgICAgICAgZGlzcGxheSA6ICdibG9jaydcbiAgICB9XG4gIH0pKTtcblxuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSxwcm9wcykgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIFxuICAgIGNvbnN0IGNhdGVnb3J5ID0gcHJvcHMubWF0Y2gucGFyYW1zLmNhdGVnb3J5XG5cbiAgICBjb25zdCBsc1R5cGUgPSBwcm9wcy5tYXRjaC5wYXJhbXMubHNfdHlwZVxuXG4gICAgY29uc3QgY291cnNlID0gcHJvcHMubWF0Y2gucGFyYW1zLmNvdXJzZVxuICAgIFxuICAgIGNvbnN0IGxzQ29udGVudHMgPSBsZWFybmluZ1N0eWxlcy5maW5kKHN0eWxlID0+IGxzVHlwZSA9PT0gc3R5bGUudHlwZSkuY29udGVudHNcblxuICAgIGNvbnN0IHBhdGggPSAobHNDb250ZW50cy5pbmRleE9mKGNhdGVnb3J5KSsxIDwgbHNDb250ZW50cy5sZW5ndGgpID8gYC9jb3Vyc2UvJHtjb3Vyc2V9L2xzLyR7bHNUeXBlfS8ke2xzQ29udGVudHNbbHNDb250ZW50cy5pbmRleE9mKGNhdGVnb3J5KSsxXX1gOmAvY291cnNlLyR7Y291cnNlfS9ob21lYFxuICAgIFxuICAgIHByb3BzLmhpc3RvcnkucHVzaChwYXRoKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdmVydmlld1ZlcmJhbCAocHJvcHMpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcbiAgICByZXR1cm4oXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J3NtJz5cbiAgICAgICAgICAgIDxmb3JtICBhdXRvQ29tcGxldGU9XCJvZmZcIiBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRGVmaW5lIENvbXBvbmVudHMgSGVyZSAqL31cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oYW5kbGVCdXR0b259IG9uQ2xpY2s9eyhlKT0+eyBoYW5kbGVTdWJtaXQoZSxwcm9wcyl9fT5cbiAgICAgICAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFyQ0E7QUFDQTtBQTBDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/OverviewVisual.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/SummaryVerbal.js":
/*!*********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/SummaryVerbal.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: \"none\"\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: \"right\"\n  },\n  card: {\n    height: \"100%\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  },\n  cardMedia: {\n    paddingTop: \"56.25%\" // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: \"block\"\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"List\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body2\"\n  }, \"So that was all about the non-primitive data types. Now let\\u2019s understand the difference between primitive and non-primitive data types.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"h4\"\n  }, \"The difference between primitive and non-primitive data types are as follows:\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body2\"\n  }, \"Primitive types are predefined in Java.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body2\"\n  }, \"Non-primitive types are created by the programmer and is not defined by Java.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body2\"\n  }, \"Non-primitive types are created by the programmer and is not defined by Java.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body2\"\n  }, \"Non Primitive types can be used to call methods to perform certain operations, while primitive types cannot.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body2\"\n  }, \"A primitive type always has a value, whereas non-primitive types can be null.\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"ListItem\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    varient: \"body2\"\n  }, \"A primitive type always has a value, whereas non-primitive types can be null. A primitive type starts with a lowercase letter, while non-primitive types start with an uppercase letter. The size of a primitive type depends on the data type, while non-primitive types have all the same size.\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvU3VtbWFyeVZlcmJhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9Db21wb25lbnRzL0NvdXJzZS9MU01hdGVyaWFscy9TdW1tYXJ5VmVyYmFsLmpzPzlhMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFR5cG9ncmFwaHksXG4gIFBhcGVyLFxuICBtYWtlU3R5bGVzLFxuICBCdXR0b24sXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBEaXZpZGVyLFxuICBDb250YWluZXJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgbGVhcm5pbmdTdHlsZXMgZnJvbSBcIi4uLy4uLy4uL0RhdGEvbGVhcm5pbmdTdHlsZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBpY29uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIlxuICB9LFxuICBoZXJvQ29udGVudDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNilcbiAgfSxcbiAgaGVyb0J1dHRvbnM6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNClcbiAgfSxcbiAgY2FyZEdyaWQ6IHtcbiAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOClcbiAgfSxcbiAgaGFuZGxlQnV0dG9uOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGZsb2F0OiBcInJpZ2h0XCJcbiAgfSxcbiAgY2FyZDoge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxuICB9LFxuICBjYXJkTWVkaWE6IHtcbiAgICBwYWRkaW5nVG9wOiBcIjU2LjI1JVwiIC8vIDE2OjlcbiAgfSxcbiAgY2FyZENvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMVxuICB9LFxuICBmb290ZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpXG4gIH0sXG4gIFRleHQ6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgfVxufSkpO1xuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSwgcHJvcHMpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGNhdGVnb3J5ID0gcHJvcHMubWF0Y2gucGFyYW1zLmNhdGVnb3J5O1xuXG4gIGNvbnN0IGxzVHlwZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5sc190eXBlO1xuXG4gIGNvbnN0IGNvdXJzZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5jb3Vyc2U7XG5cbiAgY29uc3QgbHNDb250ZW50cyA9IGxlYXJuaW5nU3R5bGVzLmZpbmQoc3R5bGUgPT4gbHNUeXBlID09PSBzdHlsZS50eXBlKVxuICAgIC5jb250ZW50cztcblxuICBjb25zdCBwYXRoID1cbiAgICBsc0NvbnRlbnRzLmluZGV4T2YoY2F0ZWdvcnkpICsgMSA8IGxzQ29udGVudHMubGVuZ3RoXG4gICAgICA/IGAvY291cnNlLyR7Y291cnNlfS9scy8ke2xzVHlwZX0vJHtcbiAgICAgICAgICBsc0NvbnRlbnRzW2xzQ29udGVudHMuaW5kZXhPZihjYXRlZ29yeSkgKyAxXVxuICAgICAgICB9YFxuICAgICAgOiBgL2NvdXJzZS8ke2NvdXJzZX0vaG9tZWA7XG5cbiAgcHJvcHMuaGlzdG9yeS5wdXNoKHBhdGgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3ZlcnZpZXdWZXJiYWwocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIG5vVmFsaWRhdGU+XG4gICAgICA8TGlzdD5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmllbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgU28gdGhhdCB3YXMgYWxsIGFib3V0IHRoZSBub24tcHJpbWl0aXZlIGRhdGEgdHlwZXMuIE5vdyBsZXTigJlzXG4gICAgICAgICAgICB1bmRlcnN0YW5kIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcHJpbWl0aXZlIGFuZCBub24tcHJpbWl0aXZlIGRhdGFcbiAgICAgICAgICAgIHR5cGVzLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmllbnQ9XCJoNFwiPlxuICAgICAgICAgICAgVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBwcmltaXRpdmUgYW5kIG5vbi1wcmltaXRpdmUgZGF0YSB0eXBlcyBhcmUgYXNcbiAgICAgICAgICAgIGZvbGxvd3M6XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWVudD1cImJvZHkyXCI+XG4gICAgICAgICAgICBQcmltaXRpdmUgdHlwZXMgYXJlIHByZWRlZmluZWQgaW4gSmF2YS5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpZW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIE5vbi1wcmltaXRpdmUgdHlwZXMgYXJlIGNyZWF0ZWQgYnkgdGhlIHByb2dyYW1tZXIgYW5kIGlzIG5vdCBkZWZpbmVkXG4gICAgICAgICAgICBieSBKYXZhLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmllbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgTm9uLXByaW1pdGl2ZSB0eXBlcyBhcmUgY3JlYXRlZCBieSB0aGUgcHJvZ3JhbW1lciBhbmQgaXMgbm90IGRlZmluZWRcbiAgICAgICAgICAgIGJ5IEphdmEuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpZW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIE5vbiBQcmltaXRpdmUgdHlwZXMgY2FuIGJlIHVzZWQgdG8gY2FsbCBtZXRob2RzIHRvIHBlcmZvcm0gY2VydGFpblxuICAgICAgICAgICAgb3BlcmF0aW9ucywgd2hpbGUgcHJpbWl0aXZlIHR5cGVzIGNhbm5vdC5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmllbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgQSBwcmltaXRpdmUgdHlwZSBhbHdheXMgaGFzIGEgdmFsdWUsIHdoZXJlYXMgbm9uLXByaW1pdGl2ZSB0eXBlcyBjYW5cbiAgICAgICAgICAgIGJlIG51bGwuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpZW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgIEEgcHJpbWl0aXZlIHR5cGUgYWx3YXlzIGhhcyBhIHZhbHVlLCB3aGVyZWFzIG5vbi1wcmltaXRpdmUgdHlwZXMgY2FuXG4gICAgICAgICAgICBiZSBudWxsLiBBIHByaW1pdGl2ZSB0eXBlIHN0YXJ0cyB3aXRoIGEgbG93ZXJjYXNlIGxldHRlciwgd2hpbGVcbiAgICAgICAgICAgIG5vbi1wcmltaXRpdmUgdHlwZXMgc3RhcnQgd2l0aCBhbiB1cHBlcmNhc2UgbGV0dGVyLiBUaGUgc2l6ZSBvZiBhXG4gICAgICAgICAgICBwcmltaXRpdmUgdHlwZSBkZXBlbmRzIG9uIHRoZSBkYXRhIHR5cGUsIHdoaWxlIG5vbi1wcmltaXRpdmUgdHlwZXNcbiAgICAgICAgICAgIGhhdmUgYWxsIHRoZSBzYW1lIHNpemUuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgPC9MaXN0PlxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmhhbmRsZUJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgaGFuZGxlU3VibWl0KGUsIHByb3BzKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgTmV4dFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFyQ0E7QUFDQTtBQXlDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBT0E7QUFDQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQU9BO0FBQUE7QUFNQTtBQUFBO0FBS0E7QUFBQTtBQU1BO0FBQUE7QUFPQTtBQUFBO0FBT0E7QUFBQTtBQU9BO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/SummaryVerbal.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/LSMaterials/SummaryVisual.js":
/*!*********************************************************************!*\
  !*** ./React/Shared/Components/Course/LSMaterials/SummaryVisual.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverviewVerbal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Data/learningStyles */ \"./React/Shared/Data/learningStyles.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  },\n  Text: {\n    display: 'block'\n  }\n}));\n\nvar handleSubmit = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var category = props.match.params.category;\n    var lsType = props.match.params.ls_type;\n    var course = props.match.params.course;\n    var lsContents = _Data_learningStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(style => lsType === style.type).contents;\n    var path = lsContents.indexOf(category) + 1 < lsContents.length ? \"/course/\".concat(course, \"/ls/\").concat(lsType, \"/\").concat(lsContents[lsContents.indexOf(category) + 1]) : \"/course/\".concat(course, \"/home\");\n    props.history.push(path);\n  });\n\n  return function handleSubmit(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfunction OverviewVerbal(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    autoComplete: \"off\",\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.handleButton,\n    onClick: e => {\n      handleSubmit(e, props);\n    }\n  }, \"Next\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvU3VtbWFyeVZpc3VhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9Db21wb25lbnRzL0NvdXJzZS9MU01hdGVyaWFscy9TdW1tYXJ5VmlzdWFsLmpzPzE2ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBcbiAgICBQYXBlciwgXG4gICAgbWFrZVN0eWxlcywgXG4gICAgQnV0dG9uLFxuICAgIExpc3QsXG4gICAgTGlzdEl0ZW0sXG4gICAgRGl2aWRlcixcbiAgICBDb250YWluZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuIGltcG9ydCBsZWFybmluZ1N0eWxlcyBmcm9tICcuLi8uLi8uLi9EYXRhL2xlYXJuaW5nU3R5bGVzJyAgIFxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gICAgaWNvbjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICBsaW5rIDoge1xuICAgICAgdGV4dERlY29yYXRpb24gOiAnbm9uZScsXG4gICAgfSxcbiAgICBoZXJvQ29udGVudDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgsIDAsIDYpLFxuICAgIH0sXG4gICAgaGVyb0J1dHRvbnM6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICB9LFxuICAgIGNhcmRHcmlkOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg4KSxcbiAgICB9LFxuICAgIGhhbmRsZUJ1dHRvbiA6e1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgICAgIGZsb2F0OidyaWdodCdcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBjYXJkTWVkaWE6IHtcbiAgICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5XG4gICAgfSxcbiAgICBjYXJkQ29udGVudDoge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg2KSxcbiAgICB9LFxuICAgIFRleHQgOiB7XG4gICAgICAgIGRpc3BsYXkgOiAnYmxvY2snXG4gICAgfVxuICB9KSk7XG5cblxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUscHJvcHMpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBcbiAgICBjb25zdCBjYXRlZ29yeSA9IHByb3BzLm1hdGNoLnBhcmFtcy5jYXRlZ29yeVxuXG4gICAgY29uc3QgbHNUeXBlID0gcHJvcHMubWF0Y2gucGFyYW1zLmxzX3R5cGVcblxuICAgIGNvbnN0IGNvdXJzZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5jb3Vyc2VcbiAgICBcbiAgICBjb25zdCBsc0NvbnRlbnRzID0gbGVhcm5pbmdTdHlsZXMuZmluZChzdHlsZSA9PiBsc1R5cGUgPT09IHN0eWxlLnR5cGUpLmNvbnRlbnRzXG5cbiAgICBjb25zdCBwYXRoID0gKGxzQ29udGVudHMuaW5kZXhPZihjYXRlZ29yeSkrMSA8IGxzQ29udGVudHMubGVuZ3RoKSA/IGAvY291cnNlLyR7Y291cnNlfS9scy8ke2xzVHlwZX0vJHtsc0NvbnRlbnRzW2xzQ29udGVudHMuaW5kZXhPZihjYXRlZ29yeSkrMV19YDpgL2NvdXJzZS8ke2NvdXJzZX0vaG9tZWBcbiAgICBcbiAgICBwcm9wcy5oaXN0b3J5LnB1c2gocGF0aClcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3ZlcnZpZXdWZXJiYWwgKHByb3BzKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gICAgcmV0dXJuKFxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdzbSc+XG4gICAgICAgICAgICA8Zm9ybSAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIERlZmluZSBDb21wb25lbnRzIEhlcmUgKi99XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuaGFuZGxlQnV0dG9ufSBvbkNsaWNrPXsoZSk9PnsgaGFuZGxlU3VibWl0KGUscHJvcHMpfX0+XG4gICAgICAgICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBckNBO0FBQ0E7QUEwQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/LSMaterials/SummaryVisual.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Course/Page.js":
/*!************************************************!*\
  !*** ./React/Shared/Components/Course/Page.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Data_courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Data/courses */ \"./React/Shared/Data/courses.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Data_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Data/categories */ \"./React/Shared/Data/categories.js\");\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  icon: {\n    marginRight: theme.spacing(2)\n  },\n  handleButton: {\n    margin: theme.spacing(4),\n    float: 'right'\n  },\n  link: {\n    textDecoration: 'none'\n  },\n  heroContent: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(8, 0, 6)\n  },\n  heroButtons: {\n    margin: theme.spacing(4)\n  },\n  title: {\n    flexGrow: 1\n  },\n  cardGrid: {\n    paddingTop: theme.spacing(8),\n    paddingBottom: theme.spacing(8)\n  },\n  card: {\n    height: '100%',\n    display: 'flex',\n    flexDirection: 'column'\n  },\n  cardMedia: {\n    paddingTop: '56.25%' // 16:9\n\n  },\n  cardContent: {\n    flexGrow: 1\n  },\n  footer: {\n    backgroundColor: theme.palette.background.paper,\n    padding: theme.spacing(6)\n  }\n}));\nfunction Page(props) {\n  var classes = useStyles();\n  var course = _Data_courses__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(course => props.match.params.course === course.name);\n  var category = _Data_categories__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(category => props.match.params.category === category.name);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, course ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"AppBar\"], {\n    position: \"relative\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    variant: \"h6\",\n    className: classes.title,\n    color: \"inherit\",\n    noWrap: true\n  }, course.name + ' ' + category.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n    edge: \"start\",\n    color: \"inherit\",\n    \"aria-label\": \"home\",\n    onClick: e => {\n      e.preventDefault();\n      props.history.push('/course/' + course.name + '/home');\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"body1\"\n  }, \"Course Home\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    className: classes.card\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    maxWidth: \"md\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CardContent\"], {\n    className: classes.cardContent\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\"\n  }, category.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(category.component, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" 404 Error \"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Db3Vyc2UvUGFnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9Db21wb25lbnRzL0NvdXJzZS9QYWdlLmpzP2EyYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY291cnNlcyBmcm9tICcuLi8uLi9EYXRhL2NvdXJzZXMnXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBcbiAgICBtYWtlU3R5bGVzLCBcbiAgICBUZXh0RmllbGQsXG4gICAgQXBwQmFyLCBcbiAgICBDYXJkQ29udGVudCwgXG4gICAgQ2FyZCxcbiAgICBUb29sYmFyLFxuICAgIEljb25CdXR0b24sXG4gICAgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5cbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gJy4uLy4uL0RhdGEvY2F0ZWdvcmllcydcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gICAgaWNvbjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICBoYW5kbGVCdXR0b24gOntcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgIGZsb2F0OidyaWdodCdcbiAgICB9LFxuICAgIGxpbmsgOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbiA6ICdub25lJyxcbiAgICB9LFxuICAgIGhlcm9Db250ZW50OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOCwgMCwgNiksXG4gICAgfSxcbiAgICBoZXJvQnV0dG9uczoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgY2FyZEdyaWQ6IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIGNhcmRNZWRpYToge1xuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcbiAgICB9LFxuICAgIGNhcmRDb250ZW50OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgIH0sXG4gIH0pKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlIChwcm9wcykge1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICBjb25zdCBjb3Vyc2UgPSAgY291cnNlcy5maW5kKChjb3Vyc2UpID0+IHByb3BzLm1hdGNoLnBhcmFtcy5jb3Vyc2UgPT09IGNvdXJzZS5uYW1lKVxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKChjYXRlZ29yeSkgPT4gKHByb3BzLm1hdGNoLnBhcmFtcy5jYXRlZ29yeSkgPT09IGNhdGVnb3J5Lm5hbWUpIFxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsgY291cnNlID8gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9eyBjbGFzc2VzLnRpdGxlIH0gIGNvbG9yPVwiaW5oZXJpdFwiIG5vV3JhcD5cbiAgICAgICAgICAgICAgICAgICAgICB7Y291cnNlLm5hbWUrJyAnK2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cImhvbWVcIiBvbkNsaWNrPXsgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goICcvY291cnNlLycrY291cnNlLm5hbWUrJy9ob21lJyApXG4gICAgICAgICAgICAgICAgICAgICAgfSB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiYm9keTFcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb3Vyc2UgSG9tZSBcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZENvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyA8Y2F0ZWdvcnkuY29tcG9uZW50ICB7Li4ucHJvcHN9Lz59XG4gICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDwvQ2FyZD4gXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PikgOiAoPGgxPiA0MDQgRXJyb3IgPC9oMT4pIFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+IFxuICAgIClcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQXBDQTtBQTJDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFZQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/Course/Page.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Login.js":
/*!******************************************!*\
  !*** ./React/Shared/Components/Login.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"@material-ui/core/FormControlLabel\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"@material-ui/core/Checkbox\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Link */ \"@material-ui/core/Link\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ \"@material-ui/icons/LockOutlined\");\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Signup */ \"./React/Shared/Components/Signup.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Copyright() {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\"\n  }, 'Copyright © ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__[\"Link\"], {\n    to: \"/\",\n    className: classes.link\n  }, \"Chill Studies\"), ' ', new Date().getFullYear(), '.');\n}\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__[\"makeStyles\"])(theme => ({\n  root: {\n    height: '100vh'\n  },\n  link: {\n    textDecoration: 'none',\n    marginTop: '5px%'\n  },\n  image: {\n    backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)',\n    backgroundRepeat: 'no-repeat',\n    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],\n    backgroundSize: 'cover',\n    backgroundPosition: 'center'\n  },\n  paper: {\n    margin: theme.spacing(8, 4),\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center'\n  },\n  avatar: {\n    margin: theme.spacing(1),\n    backgroundColor: theme.palette.secondary.main\n  },\n  form: {\n    width: '100%',\n    // Fix IE 11 issue.\n    marginTop: theme.spacing(1)\n  },\n  submit: {\n    margin: theme.spacing(3, 0, 2)\n  }\n}));\n\nfunction handleClick(_x, _x2) {\n  return _handleClick.apply(this, arguments);\n}\n\nfunction _handleClick() {\n  _handleClick = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var email = document.getElementById('email').value;\n    var password = document.getElementById('password').value;\n\n    try {\n      var res = yield axios__WEBPACK_IMPORTED_MODULE_14___default.a.post('http://127.0.0.1:8000/api/v1/student/login', {\n        \"studentId\": email,\n        \"password\": password\n      });\n\n      if (res.status === 201) {\n        sessionStorage.setItem('auth', res.data.data.student._id);\n        props.history.push('/dashboard');\n      } else {\n        alert(\"Pls Enter Valid Details\");\n      }\n    } catch (err) {\n      alert(err);\n    }\n  });\n  return _handleClick.apply(this, arguments);\n}\n\nfunction Login(props) {\n  var classes = useStyles();\n  var [signIn, setSingIn] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);\n\n  var handleSignup = () => {\n    signIn ? setSingIn(false) : setSingIn(true);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    container: true,\n    component: \"main\",\n    className: classes.root\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    item: true,\n    xs: false,\n    sm: 4,\n    md: 7,\n    className: classes.image\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    item: true,\n    xs: 12,\n    sm: 8,\n    md: 5,\n    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a\n  }, signIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__[\"Container\"], {\n    component: \"main\",\n    maxWidth: \"sm\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.paper\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: classes.avatar\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {\n    component: \"h1\",\n    variant: \"h5\"\n  }, \"Sign in\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: classes.form,\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"outlined\",\n    margin: \"normal\",\n    required: true,\n    fullWidth: true,\n    id: \"email\",\n    label: \"Email Address\",\n    name: \"email\",\n    autoComplete: \"email\",\n    autoFocus: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"outlined\",\n    margin: \"normal\",\n    required: true,\n    fullWidth: true,\n    name: \"password\",\n    label: \"Password\",\n    type: \"password\",\n    id: \"password\",\n    autoComplete: \"current-password\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      value: \"remember\",\n      color: \"primary\"\n    }),\n    label: \"Remember me\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    type: \"submit\",\n    fullWidth: true,\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.submit,\n    onClick: e => {\n      handleClick(e, props);\n    }\n  }, \"Sign In\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    fullWidth: true,\n    variant: \"outlined\",\n    color: \"primary\",\n    className: classes.submit,\n    onClick: e => {\n      e.preventDefault();\n      handleSignup();\n    }\n  }, \"Sign Up\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    container: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    item: true,\n    xs: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"#\",\n    variant: \"body2\"\n  }, \"Forgot password?\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    item: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"#\",\n    variant: \"body2\"\n  }, \"Don't have an account? Sign Up\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    mt: 5\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signup__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n    handleSignup: handleSignup\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9Mb2dpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9Db21wb25lbnRzL0xvZ2luLmpzPzNjMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge0xpbmsgYXMgTGlua3RvfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IFNpZ25VcCBmcm9tICcuL1NpZ251cCc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICB7J0NvcHlyaWdodCDCqSAnfVxuICAgICAgICA8TGlua3RvIHRvPScvJyBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICBDaGlsbCBTdHVkaWVzXG4gICAgICAgIDwvTGlua3RvPlxuICAgICAgeycgJ31cbiAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICB7Jy4nfVxuICAgIDwvVHlwb2dyYXBoeT5cbiAgKTtcbn1cblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gIH0sXG4gIGxpbmsgOiB7XG4gICAgdGV4dERlY29yYXRpb24gOiAnbm9uZScsXG4gICAgbWFyZ2luVG9wOiAnNXB4JScsXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTAzNjc2MjYwNzI4LTFjMDBkYTA5NGEwYj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5Jnc9MTAwMCZxPTgwKScsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MF0sXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoOCwgNCksXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICB9LFxuICBmb3JtOiB7XG4gICAgd2lkdGg6ICcxMDAlJywgLy8gRml4IElFIDExIGlzc3VlLlxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxuICB9LFxufSkpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrIChlLHByb3BzKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZVxuICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL3N0dWRlbnQvbG9naW4nLFxuICAgIHtcbiAgICAgIFwic3R1ZGVudElkXCI6ZW1haWwsXG4gICAgICBcInBhc3N3b3JkXCI6cGFzc3dvcmRcbiAgICB9KVxuXG4gICAgaWYocmVzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhdXRoJyxyZXMuZGF0YS5kYXRhLnN0dWRlbnQuX2lkKVxuICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvZGFzaGJvYXJkJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhbGVydChcIlBscyBFbnRlciBWYWxpZCBEZXRhaWxzXCIpO1xuICAgIH1cbiAgfSBjYXRjaChlcnIgKXtcbiAgICBhbGVydChlcnIpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IFtzaWduSW4sc2V0U2luZ0luXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgaGFuZGxlU2lnbnVwID0gKCkgPT4ge1xuICAgIHNpZ25JbiA/IHNldFNpbmdJbihmYWxzZSkgOiBzZXRTaW5nSW4odHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxHcmlkIGl0ZW0geHM9e2ZhbHNlfSBzbT17NH0gbWQ9ezd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gLz5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0gbWQ9ezV9IGNvbXBvbmVudD17UGFwZXJ9ID5cbiAgICAgICAgeyBzaWduSW4gPyAoXG4gICAgICAgICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJzbVwiID5cbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICAgICAgICAgIDxMb2NrT3V0bGluZWRJY29uIC8+XG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IHZhbHVlPVwicmVtZW1iZXJcIiBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVtZW1iZXIgbWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrID0geyAoZSkgPT4geyBoYW5kbGVDbGljayhlLHByb3BzKSB9IH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgey8qIDxMaW5rdG8gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IHRvPVwiL3NpZ251cFwiPiAqL31cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2lnbnVwKClcbiAgICAgICAgICAgICAgICAgICAgfSB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIHsvKiA8L0xpbmt0bz4gKi99XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge1wiRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBTaWduIFVwXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEJveCBtdD17NX0+XG4gICAgICAgICAgICAgICAgICA8Q29weXJpZ2h0IC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICA8L0NvbnRhaW5lcj4pXG4gICAgICAgIDogXG4gICAgICAgIChcbiAgICAgICAgICA8U2lnblVwIGhhbmRsZVNpZ251cD17IGhhbmRsZVNpZ251cCB9IC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBOUJBO0FBQ0E7QUFtQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFhQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFRQTtBQUFBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./React/Shared/Components/Login.js\n");
=======
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["FormControlLabel"], {
    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
      value: "remember",
      color: "primary"
    }),
    label: "Remember me"
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
  }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    href: "#",
    variant: "body2"
  }, "Forgot password?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    href: "#",
    variant: "body2"
  }, "Don't have an account? Sign Up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    mt: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleSignup: handleSignup
  })));
}
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/Signup.js":
/*!*******************************************!*\
  !*** ./React/Shared/Components/Signup.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SignUp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ \"@material-ui/core/FormControlLabel\");\n/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Checkbox */ \"@material-ui/core/Checkbox\");\n/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Link */ \"@material-ui/core/Link\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ \"@material-ui/icons/LockOutlined\");\n/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Copyright() {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\"\n  }, 'Copyright © ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    color: \"inherit\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__[\"Link\"], {\n    to: \"/\",\n    className: classes.link\n  }, \"Chill Studies\")), ' ', new Date().getFullYear(), '.');\n}\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__[\"makeStyles\"])(theme => ({\n  paper: {\n    marginTop: theme.spacing(8),\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center'\n  },\n  avatar: {\n    margin: theme.spacing(1),\n    backgroundColor: theme.palette.secondary.main\n  },\n  form: {\n    width: '100%',\n    // Fix IE 11 issue.\n    marginTop: theme.spacing(1)\n  },\n  submit: {\n    margin: theme.spacing(3, 0, 2)\n  }\n}));\n\nfunction handleClick(_x, _x2) {\n  return _handleClick.apply(this, arguments);\n}\n\nfunction _handleClick() {\n  _handleClick = _asyncToGenerator(function* (e, props) {\n    e.preventDefault();\n    var name = document.getElementById('name').value,\n        email = document.getElementById('email').value,\n        password = document.getElementById('password').value,\n        confirmPassword = document.getElementById('confirmPassword').value;\n\n    if (name === '' || email === '' || password === '' || confirmPassword === '') {\n      alert(\"Provide Valid Informations\");\n    } else {\n      var data = {\n        \"name\": name,\n        \"studentId\": email,\n        \"password\": password,\n        \"passwordConfrim\": confirmPassword\n      };\n\n      try {\n        var res = yield axios__WEBPACK_IMPORTED_MODULE_14___default.a.post('http://127.0.0.1:8000/api/v1/student/signup', data);\n\n        if (res.status === 201) {\n          alert('You Successfully Signed Up !!! \\n Now Sign In To Continue');\n        }\n      } catch (err) {\n        alert(err);\n        console.log(err);\n      }\n\n      props.handleSignup();\n    }\n  });\n  return _handleClick.apply(this, arguments);\n}\n\nfunction SignUp(props) {\n  var classes = useStyles();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13___default.a, {\n    component: \"main\",\n    maxWidth: \"xs\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.paper\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: classes.avatar\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    component: \"h1\",\n    variant: \"h5\"\n  }, \"Sign Up\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: classes.form,\n    noValidate: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"outlined\",\n    margin: \"normal\",\n    required: true,\n    fullWidth: true,\n    id: \"name\",\n    label: \"Name\",\n    name: \"name\",\n    autoComplete: \"name\",\n    autoFocus: true,\n    required: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"outlined\",\n    margin: \"normal\",\n    required: true,\n    fullWidth: true,\n    id: \"email\",\n    label: \"Email Address\",\n    name: \"email\",\n    autoComplete: \"email\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"outlined\",\n    margin: \"normal\",\n    required: true,\n    fullWidth: true,\n    name: \"password\",\n    label: \"Password\",\n    type: \"password\",\n    id: \"password\",\n    autoComplete: \"current-password\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"outlined\",\n    margin: \"normal\",\n    required: true,\n    fullWidth: true,\n    name: \"confirmPassword\",\n    label: \"Confirm Password\",\n    type: \"password\",\n    id: \"confirmPassword\",\n    autoComplete: \"current-password\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      value: \"remember\",\n      color: \"primary\"\n    }),\n    label: \"Remember me\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    fullWidth: true,\n    variant: \"contained\",\n    color: \"primary\",\n    className: classes.submit,\n    onClick: e => handleClick(e, props)\n  }, \"Sign Up\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    fullWidth: true,\n    variant: \"outlined\",\n    color: \"primary\",\n    className: classes.submit,\n    onClick: e => {\n      props.handleSignup();\n    }\n  }, \"Sign In\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    container: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    item: true,\n    xs: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"#\",\n    variant: \"body2\"\n  }, \"Forgot password?\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    item: true\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"#\",\n    variant: \"body2\"\n  }, \"Don't have an account? Sign Up\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    mt: 8\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9TaWdudXAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy9TaWdudXAuanM/Zjg0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgTG9ja091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQge0xpbmsgYXMgTGlua3RvIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgIHsnQ29weXJpZ2h0IMKpICd9XG4gICAgICA8TGluayBjb2xvcj1cImluaGVyaXRcIj5cbiAgICAgICAgPExpbmt0byB0bz0nLycgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgQ2hpbGwgU3R1ZGllc1xuICAgICAgICA8L0xpbmt0bz5cbiAgICAgIDwvTGluaz57JyAnfVxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgIHsnLid9XG4gICAgPC9UeXBvZ3JhcGh5PlxuICApO1xufVxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBwYXBlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gIH0sXG4gIGZvcm06IHtcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBzdWJtaXQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXG4gIH0sXG59KSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUscHJvcHMpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlLFxuICAgIGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWUsXG4gICAgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS52YWx1ZSxcbiAgICBjb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybVBhc3N3b3JkJykudmFsdWVcblxuICBpZihuYW1lID09PSAnJyB8fCBlbWFpbCA9PT0gJycgfHwgcGFzc3dvcmQgPT09ICcnIHx8IGNvbmZpcm1QYXNzd29yZCA9PT0gJycgKSB7XG4gICAgYWxlcnQoXCJQcm92aWRlIFZhbGlkIEluZm9ybWF0aW9uc1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgXCJuYW1lXCI6IG5hbWUsXG4gICAgICBcInN0dWRlbnRJZFwiOiBlbWFpbCxcbiAgICAgIFwicGFzc3dvcmRcIjogcGFzc3dvcmQsXG4gICAgICBcInBhc3N3b3JkQ29uZnJpbVwiOiBjb25maXJtUGFzc3dvcmRcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS92MS9zdHVkZW50L3NpZ251cCcsIGRhdGEgKVxuICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIGFsZXJ0KCdZb3UgU3VjY2Vzc2Z1bGx5IFNpZ25lZCBVcCAhISEgXFxuIE5vdyBTaWduIEluIFRvIENvbnRpbnVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGVycikge1xuICAgICAgYWxlcnQoZXJyKVxuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbiAgICBwcm9wcy5oYW5kbGVTaWdudXAoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcChwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cbiAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxuICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICBTaWduIFVwXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG5vVmFsaWRhdGU+XG4gICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuYW1lXCJcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IHZhbHVlPVwicmVtZW1iZXJcIiBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgICAgICAgIGxhYmVsPVwiUmVtZW1iZXIgbWVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICAgIG9uQ2xpY2sgPSB7IChlKSA9PiBoYW5kbGVDbGljayhlLHByb3BzKX0gXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0fVxuICAgICAgICAgICAgICBvbkNsaWNrID0geyAoZSkgPT4geyBwcm9wcy5oYW5kbGVTaWdudXAoKSB9fSBcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgIHtcIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiBVcFwifVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCb3ggbXQ9ezh9PlxuICAgICAgICA8Q29weXJpZ2h0IC8+XG4gICAgICA8L0JveD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQWZBO0FBQ0E7QUFtQkE7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./React/Shared/Components/Signup.js\n");
=======
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
    control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      value: "remember",
      color: "primary"
    }),
    label: "Remember me"
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
  }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    variant: "body2"
  }, "Forgot password?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    href: "#",
    variant: "body2"
  }, "Don't have an account? Sign Up"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copyright, null)));
}
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Components/theme.js":
/*!******************************************!*\
  !*** ./React/Shared/Components/theme.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n // Create a theme instance.\n\nvar theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: '#556cd6'\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"red\"].A400\n    },\n    background: {\n      default: '#fff'\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvQ29tcG9uZW50cy90aGVtZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9Db21wb25lbnRzL3RoZW1lLmpzPzkyNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcblxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjNTU2Y2Q2JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMxOTg1N2InLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46IHJlZC5BNDAwLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBVkE7QUFEQTtBQWlCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Components/theme.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Data/categories.js":
/*!*****************************************!*\
  !*** ./React/Shared/Data/categories.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_Course_GeneralMaterials_Activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Activity */ \"./React/Shared/Components/Course/GeneralMaterials/Activity.js\");\n/* harmony import */ var _Components_Course_GeneralMaterials_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Content */ \"./React/Shared/Components/Course/GeneralMaterials/Content.js\");\n/* harmony import */ var _Components_Course_GeneralMaterials_Definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Definitions */ \"./React/Shared/Components/Course/GeneralMaterials/Definitions.js\");\n/* harmony import */ var _Components_Course_GeneralMaterials_Summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Summary */ \"./React/Shared/Components/Course/GeneralMaterials/Summary.js\");\n/* harmony import */ var _Components_Course_GeneralMaterials_Visual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Visual */ \"./React/Shared/Components/Course/GeneralMaterials/Visual.js\");\n/* harmony import */ var _Components_Course_GeneralMaterials_Overview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Course/GeneralMaterials/Overview */ \"./React/Shared/Components/Course/GeneralMaterials/Overview.js\");\n/* harmony import */ var _Components_Course_LSMaterials_ActivityVisual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Course/LSMaterials/ActivityVisual */ \"./React/Shared/Components/Course/LSMaterials/ActivityVisual.js\");\n/* harmony import */ var _Components_Course_LSMaterials_AcivityVerbal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Course/LSMaterials/AcivityVerbal */ \"./React/Shared/Components/Course/LSMaterials/AcivityVerbal.js\");\n/* harmony import */ var _Components_Course_LSMaterials_ContentVerbalDetailed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Course/LSMaterials/ContentVerbalDetailed */ \"./React/Shared/Components/Course/LSMaterials/ContentVerbalDetailed.js\");\n/* harmony import */ var _Components_Course_LSMaterials_ContentVerbalOverview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Course/LSMaterials/ContentVerbalOverview */ \"./React/Shared/Components/Course/LSMaterials/ContentVerbalOverview.js\");\n/* harmony import */ var _Components_Course_LSMaterials_ContentVisualDetailed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Course/LSMaterials/ContentVisualDetailed */ \"./React/Shared/Components/Course/LSMaterials/ContentVisualDetailed.js\");\n/* harmony import */ var _Components_Course_LSMaterials_ContentVisualOverview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Course/LSMaterials/ContentVisualOverview */ \"./React/Shared/Components/Course/LSMaterials/ContentVisualOverview.js\");\n/* harmony import */ var _Components_Course_LSMaterials_DefinitionVerbalDetailed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/Course/LSMaterials/DefinitionVerbalDetailed */ \"./React/Shared/Components/Course/LSMaterials/DefinitionVerbalDetailed.js\");\n/* harmony import */ var _Components_Course_LSMaterials_DefinitionVerbalOverview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/Course/LSMaterials/DefinitionVerbalOverview */ \"./React/Shared/Components/Course/LSMaterials/DefinitionVerbalOverview.js\");\n/* harmony import */ var _Components_Course_LSMaterials_DefinitionVisualDetailed__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/Course/LSMaterials/DefinitionVisualDetailed */ \"./React/Shared/Components/Course/LSMaterials/DefinitionVisualDetailed.js\");\n/* harmony import */ var _Components_Course_LSMaterials_DefinitionVisualOverview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Components/Course/LSMaterials/DefinitionVisualOverview */ \"./React/Shared/Components/Course/LSMaterials/DefinitionVisualOverview.js\");\n/* harmony import */ var _Components_Course_LSMaterials_OverviewVerbal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/Course/LSMaterials/OverviewVerbal */ \"./React/Shared/Components/Course/LSMaterials/OverviewVerbal.js\");\n/* harmony import */ var _Components_Course_LSMaterials_OverviewVisual__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Components/Course/LSMaterials/OverviewVisual */ \"./React/Shared/Components/Course/LSMaterials/OverviewVisual.js\");\n/* harmony import */ var _Components_Course_LSMaterials_SummaryVerbal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Components/Course/LSMaterials/SummaryVerbal */ \"./React/Shared/Components/Course/LSMaterials/SummaryVerbal.js\");\n/* harmony import */ var _Components_Course_LSMaterials_SummaryVisual__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Components/Course/LSMaterials/SummaryVisual */ \"./React/Shared/Components/Course/LSMaterials/SummaryVisual.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar categories = [{\n  name: 'Activity',\n  component: _Components_Course_GeneralMaterials_Activity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  name: 'Content',\n  component: _Components_Course_GeneralMaterials_Content__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  name: 'Definitons',\n  component: _Components_Course_GeneralMaterials_Definitions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  name: 'Summary',\n  component: _Components_Course_GeneralMaterials_Summary__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}, {\n  name: 'Visual',\n  component: _Components_Course_GeneralMaterials_Visual__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  name: 'Overview',\n  component: _Components_Course_GeneralMaterials_Overview__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, {\n  name: 'Overview-Verbal',\n  component: _Components_Course_LSMaterials_OverviewVerbal__WEBPACK_IMPORTED_MODULE_16__[\"default\"]\n}, {\n  name: 'Overview-Visual',\n  component: _Components_Course_LSMaterials_OverviewVisual__WEBPACK_IMPORTED_MODULE_17__[\"default\"]\n}, {\n  name: 'Summary-Visual',\n  component: _Components_Course_LSMaterials_SummaryVisual__WEBPACK_IMPORTED_MODULE_19__[\"default\"]\n}, {\n  name: 'Summary-Verbal',\n  component: _Components_Course_LSMaterials_SummaryVerbal__WEBPACK_IMPORTED_MODULE_18__[\"default\"]\n}, {\n  name: 'Activity-Verbal',\n  component: _Components_Course_LSMaterials_AcivityVerbal__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n}, {\n  name: 'Activity-Visual',\n  component: _Components_Course_LSMaterials_ActivityVisual__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, {\n  name: 'Content-Verbal-Detailed',\n  component: _Components_Course_LSMaterials_ContentVerbalDetailed__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n}, {\n  name: 'Content-Verbal-Overview',\n  component: _Components_Course_LSMaterials_ContentVerbalOverview__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n}, {\n  name: 'Content-Visual-Detailed',\n  component: _Components_Course_LSMaterials_ContentVisualDetailed__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n}, {\n  name: 'Content-Visual-Overview',\n  component: _Components_Course_LSMaterials_ContentVisualOverview__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n}, {\n  name: 'Definition-Verbal-Detailed',\n  component: _Components_Course_LSMaterials_DefinitionVerbalDetailed__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n}, {\n  name: 'Definition-Verbal-Overview',\n  component: _Components_Course_LSMaterials_DefinitionVerbalOverview__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n}, {\n  name: 'Definition-Visual-Detailed',\n  component: _Components_Course_LSMaterials_DefinitionVisualDetailed__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n}, {\n  name: 'Definition-Visual-Overview',\n  component: _Components_Course_LSMaterials_DefinitionVisualOverview__WEBPACK_IMPORTED_MODULE_15__[\"default\"]\n}, {\n  name: 'Summary-Verbal',\n  component: _Components_Course_LSMaterials_SummaryVerbal__WEBPACK_IMPORTED_MODULE_18__[\"default\"]\n}, {\n  name: 'Summary-Visual',\n  component: _Components_Course_LSMaterials_SummaryVisual__WEBPACK_IMPORTED_MODULE_19__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (categories);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvRGF0YS9jYXRlZ29yaWVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0RhdGEvY2F0ZWdvcmllcy5qcz9kNDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpdml0eSBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9HZW5lcmFsTWF0ZXJpYWxzL0FjdGl2aXR5J1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vQ29tcG9uZW50cy9Db3Vyc2UvR2VuZXJhbE1hdGVyaWFscy9Db250ZW50J1xuaW1wb3J0IERlZmluaXRpb25zIGZyb20gJy4uL0NvbXBvbmVudHMvQ291cnNlL0dlbmVyYWxNYXRlcmlhbHMvRGVmaW5pdGlvbnMnXG5pbXBvcnQgU3VtbWFyeSBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9HZW5lcmFsTWF0ZXJpYWxzL1N1bW1hcnknXG5pbXBvcnQgVmlzdWFsIGZyb20gJy4uL0NvbXBvbmVudHMvQ291cnNlL0dlbmVyYWxNYXRlcmlhbHMvVmlzdWFsJ1xuaW1wb3J0IE92ZXJ2aWV3IGZyb20gJy4uL0NvbXBvbmVudHMvQ291cnNlL0dlbmVyYWxNYXRlcmlhbHMvT3ZlcnZpZXcnXG5pbXBvcnQgQWN0aXZpdHlWaXN1YWwgZnJvbSAnLi4vQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvQWN0aXZpdHlWaXN1YWwnXG5pbXBvcnQgQWNpdml0eVZlcmJhbCBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9MU01hdGVyaWFscy9BY2l2aXR5VmVyYmFsJ1xuaW1wb3J0IENvbnRlbnRWZXJiYWxEZXRhaWxlZCBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9MU01hdGVyaWFscy9Db250ZW50VmVyYmFsRGV0YWlsZWQnXG5pbXBvcnQgQ29udGVudFZlcmJhbE92ZXJ2aWV3IGZyb20gJy4uL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0NvbnRlbnRWZXJiYWxPdmVydmlldydcbmltcG9ydCBDb250ZW50VmlzdWFsRGV0YWlsZWQgZnJvbSAnLi4vQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvQ29udGVudFZpc3VhbERldGFpbGVkJ1xuaW1wb3J0IENvbnRlbnRWaXN1YWxPdmVydmlldyBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9MU01hdGVyaWFscy9Db250ZW50VmlzdWFsT3ZlcnZpZXcnXG5pbXBvcnQgRGVmaW5pdGlvblZlcmJhbERldGFpbGVkIGZyb20gJy4uL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0RlZmluaXRpb25WZXJiYWxEZXRhaWxlZCdcbmltcG9ydCBEZWZpbml0aW9uVmVyYmFsT3ZlcnZpZXcgZnJvbSAnLi4vQ29tcG9uZW50cy9Db3Vyc2UvTFNNYXRlcmlhbHMvRGVmaW5pdGlvblZlcmJhbE92ZXJ2aWV3J1xuaW1wb3J0IERlZmluaXRpb25WaXN1YWxEZXRhaWxlZCBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9MU01hdGVyaWFscy9EZWZpbml0aW9uVmlzdWFsRGV0YWlsZWQnXG5pbXBvcnQgRGVmaW5pdGlvblZpc3VhbE92ZXJ2aWV3IGZyb20gJy4uL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL0RlZmluaXRpb25WaXN1YWxPdmVydmlldydcbmltcG9ydCBPdmVydmlld1ZlcmJhbCBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9MU01hdGVyaWFscy9PdmVydmlld1ZlcmJhbCdcbmltcG9ydCBPdmVydmlld1Zpc3VhbCBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9MU01hdGVyaWFscy9PdmVydmlld1Zpc3VhbCdcbmltcG9ydCBTdW1tYXJ5VmVyYmFsIGZyb20gJy4uL0NvbXBvbmVudHMvQ291cnNlL0xTTWF0ZXJpYWxzL1N1bW1hcnlWZXJiYWwnXG5pbXBvcnQgU3VtbWFyeVZpc3VhbCBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9MU01hdGVyaWFscy9TdW1tYXJ5VmlzdWFsJ1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdBY3Rpdml0eScsXG4gICAgICBjb21wb25lbnQgOiBBY3Rpdml0eVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29udGVudCcsXG4gICAgICAgIGNvbXBvbmVudCA6IENvbnRlbnRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0RlZmluaXRvbnMnLFxuICAgICAgICBjb21wb25lbnQgOiBEZWZpbml0aW9uc1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU3VtbWFyeScsXG4gICAgICAgIGNvbXBvbmVudCA6IFN1bW1hcnlcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1Zpc3VhbCcsXG4gICAgICAgIGNvbXBvbmVudCA6IFZpc3VhbFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnT3ZlcnZpZXcnLFxuICAgICAgICBjb21wb25lbnQgOiBPdmVydmlld1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnT3ZlcnZpZXctVmVyYmFsJyxcbiAgICAgICAgY29tcG9uZW50IDogT3ZlcnZpZXdWZXJiYWxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ092ZXJ2aWV3LVZpc3VhbCcsXG4gICAgICAgIGNvbXBvbmVudCA6IE92ZXJ2aWV3VmlzdWFsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTdW1tYXJ5LVZpc3VhbCcsXG4gICAgICAgIGNvbXBvbmVudCA6IFN1bW1hcnlWaXN1YWxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1N1bW1hcnktVmVyYmFsJyxcbiAgICAgICAgY29tcG9uZW50IDogU3VtbWFyeVZlcmJhbFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQWN0aXZpdHktVmVyYmFsJyxcbiAgICAgICAgY29tcG9uZW50IDogQWNpdml0eVZlcmJhbFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQWN0aXZpdHktVmlzdWFsJyxcbiAgICAgICAgY29tcG9uZW50IDogQWN0aXZpdHlWaXN1YWxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NvbnRlbnQtVmVyYmFsLURldGFpbGVkJyxcbiAgICAgICAgY29tcG9uZW50IDogQ29udGVudFZlcmJhbERldGFpbGVkXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDb250ZW50LVZlcmJhbC1PdmVydmlldycsXG4gICAgICAgIGNvbXBvbmVudCA6IENvbnRlbnRWZXJiYWxPdmVydmlld1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQ29udGVudC1WaXN1YWwtRGV0YWlsZWQnLFxuICAgICAgICBjb21wb25lbnQgOiBDb250ZW50VmlzdWFsRGV0YWlsZWRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0NvbnRlbnQtVmlzdWFsLU92ZXJ2aWV3JyxcbiAgICAgICAgY29tcG9uZW50IDogQ29udGVudFZpc3VhbE92ZXJ2aWV3XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdEZWZpbml0aW9uLVZlcmJhbC1EZXRhaWxlZCcsXG4gICAgICAgIGNvbXBvbmVudCA6IERlZmluaXRpb25WZXJiYWxEZXRhaWxlZFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRGVmaW5pdGlvbi1WZXJiYWwtT3ZlcnZpZXcnLFxuICAgICAgICBjb21wb25lbnQgOiBEZWZpbml0aW9uVmVyYmFsT3ZlcnZpZXdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0RlZmluaXRpb24tVmlzdWFsLURldGFpbGVkJyxcbiAgICAgICAgY29tcG9uZW50IDogRGVmaW5pdGlvblZpc3VhbERldGFpbGVkXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdEZWZpbml0aW9uLVZpc3VhbC1PdmVydmlldycsXG4gICAgICAgIGNvbXBvbmVudCA6IERlZmluaXRpb25WaXN1YWxPdmVydmlld1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnU3VtbWFyeS1WZXJiYWwnLFxuICAgICAgICBjb21wb25lbnQgOiBTdW1tYXJ5VmVyYmFsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTdW1tYXJ5LVZpc3VhbCcsXG4gICAgICAgIGNvbXBvbmVudCA6IFN1bW1hcnlWaXN1YWxcbiAgICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Data/categories.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Data/courses.js":
/*!**************************************!*\
  !*** ./React/Shared/Data/courses.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\nvar courses = [{\n  name: 'Java',\n  image: 'https://c4.wallpaperflare.com/wallpaper/510/989/208/web-development-development-java-wallpaper-preview.jpg',\n  desc: 'Java Beginner Pack'\n}, {\n  name: 'JavaScript',\n  image: 'https://i1.wp.com/www.nishantvaity.com/wp-content/uploads/2019/05/javascript.jpg?fit=650%2C400&ssl=1',\n  desc: 'JavaScript Beginner Pack'\n}, {\n  name: 'HTML',\n  image: 'https://dinesh-ghimire.com.np/wp-content/uploads/2019/02/html5.png',\n  desc: 'HTML Beginner Pack'\n}, {\n  name: 'CSS',\n  image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg',\n  desc: 'CSS Beginner Pack'\n}, {\n  name: 'ReactJs',\n  image: 'https://embedwistia-a.akamaihd.net/deliveries/bdfbccc31132d5f0a48bbf0caacced1e.webp?image_crop_resized=1280x800',\n  desc: 'ReactJs Beginner Pack'\n}, {\n  name: 'NodeJs',\n  image: 'https://cdnblog.natrocdn.com/wp-content/uploads/2019/10/node-js-nedir-768x427.jpg',\n  desc: 'NodeJs Beginner Pack'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (courses);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvRGF0YS9jb3Vyc2VzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vUmVhY3QvU2hhcmVkL0RhdGEvY291cnNlcy5qcz8yMjIwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvdXJzZXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0phdmEnLFxuICAgICAgaW1hZ2U6ICdodHRwczovL2M0LndhbGxwYXBlcmZsYXJlLmNvbS93YWxscGFwZXIvNTEwLzk4OS8yMDgvd2ViLWRldmVsb3BtZW50LWRldmVsb3BtZW50LWphdmEtd2FsbHBhcGVyLXByZXZpZXcuanBnJyxcbiAgICAgIGRlc2MgOiAnSmF2YSBCZWdpbm5lciBQYWNrJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSmF2YVNjcmlwdCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pMS53cC5jb20vd3d3Lm5pc2hhbnR2YWl0eS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDUvamF2YXNjcmlwdC5qcGc/Zml0PTY1MCUyQzQwMCZzc2w9MScsXG4gICAgICAgIGRlc2MgOiAnSmF2YVNjcmlwdCBCZWdpbm5lciBQYWNrJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnSFRNTCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9kaW5lc2gtZ2hpbWlyZS5jb20ubnAvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDIvaHRtbDUucG5nJyxcbiAgICAgICAgZGVzYyA6ICdIVE1MIEJlZ2lubmVyIFBhY2snXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDU1MnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vY29sb3JsaWIuY29tL3dwL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8yL2NyZWF0aXZlLWNzczMtdHV0b3JpYWxzLmpwZycsXG4gICAgICAgIGRlc2MgOiAnQ1NTIEJlZ2lubmVyIFBhY2snXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSZWFjdEpzJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2VtYmVkd2lzdGlhLWEuYWthbWFpaGQubmV0L2RlbGl2ZXJpZXMvYmRmYmNjYzMxMTMyZDVmMGE0OGJiZjBjYWFjY2VkMWUud2VicD9pbWFnZV9jcm9wX3Jlc2l6ZWQ9MTI4MHg4MDAnLFxuICAgICAgICBkZXNjIDogJ1JlYWN0SnMgQmVnaW5uZXIgUGFjaydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ05vZGVKcycsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9jZG5ibG9nLm5hdHJvY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMC9ub2RlLWpzLW5lZGlyLTc2OHg0MjcuanBnJyxcbiAgICAgICAgZGVzYyA6ICdOb2RlSnMgQmVnaW5uZXIgUGFjaydcbiAgICB9LFxuXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNvdXJzZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./React/Shared/Data/courses.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Data/learningStyles.js":
/*!*********************************************!*\
  !*** ./React/Shared/Data/learningStyles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  type: \"rirs\",\n  name: \"Reflective Intuitive Reading Sequential\",\n  contents: ['Overview-Verbal', 'Content-Verbal-Detailed', 'Summary-Verbal', 'Activity-Verbal']\n}, {\n  type: \"rsrs\",\n  name: \"Reflective Sensing Reading Sequential\",\n  contents: ['Overview-Verbal', 'Definition-Verbal-Detailed', 'Summary-Verbal', 'Activity-Verbal']\n}, {\n  type: \"rivs\",\n  name: \"Reflective Intuitive Visual Sequential\",\n  contents: ['Overview-Visual', 'Content-Visual-Detailed', 'Summary-Visual', 'Activity-Visual']\n}, {\n  type: \"rsvs\",\n  name: \"Reflective Sensing Visual Sequential\",\n  contents: ['Overview-Visual', 'Content-Visual-Detailed', 'Summary-Visual', 'Activity-Visual']\n}, {\n  type: \"rirg\",\n  name: \"Reflective Intuitive Reading Global\",\n  contents: ['Overview-Verbal', 'Definition-Verbal-Overview', 'Summary-Verbal', 'Activity-Verbal']\n}, {\n  type: \"rsrg\",\n  name: \"Reflective Sensing Reading Global\",\n  contents: ['Overview-Verbal', 'Definition-Verbal-Overview', 'Summary-Verbal', 'Activity-Verbal']\n}, {\n  type: \"rivg\",\n  name: \"Reflective  Intuitive  Visual Global\",\n  contents: ['Overview-Visual', 'Content-Visual-Overview', 'Summary-Visual', 'Activity-Visual']\n}, {\n  type: \"rsvg\",\n  name: \"Reflective Sensing Visual Global\",\n  contents: ['Overview-Visual', 'Definition-Visual-Overview', 'Summary-Visual', 'Activity-Visual']\n}, {\n  type: \"asrs\",\n  name: \"Active Sensing Reading Sequential\",\n  contents: ['Overview-Verbal', 'Definition-Verbal-Detailed', 'Activity-Verbal', 'Summary-Verbal']\n}, {\n  type: \"airg\",\n  name: \"Active Intuitive Reading Global\",\n  contents: ['Overview-Verbal', 'Content-Verbal-Overview', 'Activity-Verbal', 'Summary-Verbal']\n}, {\n  type: \"airs\",\n  name: \"Active Intuitive Reading Sequential\",\n  contents: ['Overview-Verbal', 'Content-Verbal-Detailed', 'Activity-Verbal', 'Summary-Verbal']\n}, {\n  type: \"asrg\",\n  name: \"Active Sensing Reading Global\",\n  contents: ['Overview-Verbal', 'Definition-Verbal-Overview', 'Activity-Verbal', 'Summary-Verbal']\n}, {\n  type: \"aivg\",\n  name: \"Active Intuitive Visual Global\",\n  contents: ['Overview-Visual', 'Definition-Visual-Overview', 'Activity-Visual', 'Summary-Visual']\n}, {\n  type: \"aivs\",\n  name: \"Active Intuitive Visual Sequential\",\n  contents: ['Overview-Visual', 'Definition-Visual-Detailed', 'Activity-Visual', 'Summary-Visual']\n}, {\n  type: \"asvg\",\n  name: \"Active Sensing Visual Global\",\n  contents: ['Overview-Visual', 'Content-Visual-Overview', 'Activity-Visual', 'Summary-Visual']\n}, {\n  type: \"asvs\",\n  name: \"Active Sensing Visual Sequential\",\n  contents: ['Overview-Visual', 'Content-Visual-Detailed', 'Activity-Visual', 'Summary-Visual']\n}, {\n  type: \"invalid\",\n  name: \"Complete Chapter 1 First\",\n  contents: ['Overview-Visual', 'Content-Visual-Detailed', 'Activity-Visual', 'Summary-Visual']\n}]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvRGF0YS9sZWFybmluZ1N0eWxlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1JlYWN0L1NoYXJlZC9EYXRhL2xlYXJuaW5nU3R5bGVzLmpzPzUyN2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgdHlwZTogXCJyaXJzXCIsXG4gICAgbmFtZTogXCJSZWZsZWN0aXZlIEludHVpdGl2ZSBSZWFkaW5nIFNlcXVlbnRpYWxcIixcbiAgICBjb250ZW50cyA6IFsnT3ZlcnZpZXctVmVyYmFsJywnQ29udGVudC1WZXJiYWwtRGV0YWlsZWQnLCdTdW1tYXJ5LVZlcmJhbCcsJ0FjdGl2aXR5LVZlcmJhbCddXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInJzcnNcIixcbiAgICBuYW1lOiBcIlJlZmxlY3RpdmUgU2Vuc2luZyBSZWFkaW5nIFNlcXVlbnRpYWxcIixcbiAgICBjb250ZW50cyA6IFsnT3ZlcnZpZXctVmVyYmFsJywnRGVmaW5pdGlvbi1WZXJiYWwtRGV0YWlsZWQnLCdTdW1tYXJ5LVZlcmJhbCcsJ0FjdGl2aXR5LVZlcmJhbCddXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInJpdnNcIixcbiAgICBuYW1lOiBcIlJlZmxlY3RpdmUgSW50dWl0aXZlIFZpc3VhbCBTZXF1ZW50aWFsXCIsXG4gICAgY29udGVudHMgOiBbJ092ZXJ2aWV3LVZpc3VhbCcsJ0NvbnRlbnQtVmlzdWFsLURldGFpbGVkJywnU3VtbWFyeS1WaXN1YWwnLCdBY3Rpdml0eS1WaXN1YWwnXVxuICB9LFxuICB7XG4gICAgdHlwZTogXCJyc3ZzXCIsXG4gICAgbmFtZTogXCJSZWZsZWN0aXZlIFNlbnNpbmcgVmlzdWFsIFNlcXVlbnRpYWxcIixcbiAgICBjb250ZW50cyA6IFsnT3ZlcnZpZXctVmlzdWFsJywnQ29udGVudC1WaXN1YWwtRGV0YWlsZWQnLCdTdW1tYXJ5LVZpc3VhbCcsJ0FjdGl2aXR5LVZpc3VhbCddXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInJpcmdcIixcbiAgICBuYW1lOiBcIlJlZmxlY3RpdmUgSW50dWl0aXZlIFJlYWRpbmcgR2xvYmFsXCIsXG4gICAgY29udGVudHMgOiBbJ092ZXJ2aWV3LVZlcmJhbCcsJ0RlZmluaXRpb24tVmVyYmFsLU92ZXJ2aWV3JywnU3VtbWFyeS1WZXJiYWwnLCdBY3Rpdml0eS1WZXJiYWwnXVxuICB9LFxuICB7XG4gICAgdHlwZTogXCJyc3JnXCIsXG4gICAgbmFtZTogXCJSZWZsZWN0aXZlIFNlbnNpbmcgUmVhZGluZyBHbG9iYWxcIixcbiAgICBjb250ZW50cyA6IFsnT3ZlcnZpZXctVmVyYmFsJywnRGVmaW5pdGlvbi1WZXJiYWwtT3ZlcnZpZXcnLCdTdW1tYXJ5LVZlcmJhbCcsJ0FjdGl2aXR5LVZlcmJhbCddXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInJpdmdcIixcbiAgICBuYW1lOiBcIlJlZmxlY3RpdmUgIEludHVpdGl2ZSAgVmlzdWFsIEdsb2JhbFwiLFxuICAgIGNvbnRlbnRzIDogWydPdmVydmlldy1WaXN1YWwnLCdDb250ZW50LVZpc3VhbC1PdmVydmlldycsJ1N1bW1hcnktVmlzdWFsJywnQWN0aXZpdHktVmlzdWFsJ11cbiAgfSxcbiAge1xuICAgIHR5cGU6IFwicnN2Z1wiLFxuICAgIG5hbWU6IFwiUmVmbGVjdGl2ZSBTZW5zaW5nIFZpc3VhbCBHbG9iYWxcIixcbiAgICBjb250ZW50cyA6IFsnT3ZlcnZpZXctVmlzdWFsJywnRGVmaW5pdGlvbi1WaXN1YWwtT3ZlcnZpZXcnLCdTdW1tYXJ5LVZpc3VhbCcsJ0FjdGl2aXR5LVZpc3VhbCddXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImFzcnNcIixcbiAgICBuYW1lOiBcIkFjdGl2ZSBTZW5zaW5nIFJlYWRpbmcgU2VxdWVudGlhbFwiLFxuICAgIGNvbnRlbnRzIDogWydPdmVydmlldy1WZXJiYWwnLCdEZWZpbml0aW9uLVZlcmJhbC1EZXRhaWxlZCcsJ0FjdGl2aXR5LVZlcmJhbCcsJ1N1bW1hcnktVmVyYmFsJ11cbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiYWlyZ1wiLFxuICAgIG5hbWU6IFwiQWN0aXZlIEludHVpdGl2ZSBSZWFkaW5nIEdsb2JhbFwiLFxuICAgIGNvbnRlbnRzIDogWydPdmVydmlldy1WZXJiYWwnLCdDb250ZW50LVZlcmJhbC1PdmVydmlldycsJ0FjdGl2aXR5LVZlcmJhbCcsJ1N1bW1hcnktVmVyYmFsJ11cbiAgfSxcbiAge1xuICAgIHR5cGU6IFwiYWlyc1wiLFxuICAgIG5hbWU6IFwiQWN0aXZlIEludHVpdGl2ZSBSZWFkaW5nIFNlcXVlbnRpYWxcIixcbiAgICBjb250ZW50cyA6IFsnT3ZlcnZpZXctVmVyYmFsJywnQ29udGVudC1WZXJiYWwtRGV0YWlsZWQnLCdBY3Rpdml0eS1WZXJiYWwnLCdTdW1tYXJ5LVZlcmJhbCddXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImFzcmdcIixcbiAgICBuYW1lOiBcIkFjdGl2ZSBTZW5zaW5nIFJlYWRpbmcgR2xvYmFsXCIsXG4gICAgY29udGVudHMgOiBbJ092ZXJ2aWV3LVZlcmJhbCcsJ0RlZmluaXRpb24tVmVyYmFsLU92ZXJ2aWV3JywnQWN0aXZpdHktVmVyYmFsJywnU3VtbWFyeS1WZXJiYWwnXVxuICB9LFxuIFxuICB7XG4gICAgdHlwZTogXCJhaXZnXCIsXG4gICAgbmFtZTogXCJBY3RpdmUgSW50dWl0aXZlIFZpc3VhbCBHbG9iYWxcIixcbiAgICBjb250ZW50cyA6IFsnT3ZlcnZpZXctVmlzdWFsJywnRGVmaW5pdGlvbi1WaXN1YWwtT3ZlcnZpZXcnLCdBY3Rpdml0eS1WaXN1YWwnLCdTdW1tYXJ5LVZpc3VhbCddXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImFpdnNcIixcbiAgICBuYW1lOiBcIkFjdGl2ZSBJbnR1aXRpdmUgVmlzdWFsIFNlcXVlbnRpYWxcIixcbiAgICBjb250ZW50cyA6IFsnT3ZlcnZpZXctVmlzdWFsJywnRGVmaW5pdGlvbi1WaXN1YWwtRGV0YWlsZWQnLCdBY3Rpdml0eS1WaXN1YWwnLCdTdW1tYXJ5LVZpc3VhbCddXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImFzdmdcIixcbiAgICBuYW1lOiBcIkFjdGl2ZSBTZW5zaW5nIFZpc3VhbCBHbG9iYWxcIixcbiAgICBjb250ZW50cyA6IFsnT3ZlcnZpZXctVmlzdWFsJywnQ29udGVudC1WaXN1YWwtT3ZlcnZpZXcnLCdBY3Rpdml0eS1WaXN1YWwnLCdTdW1tYXJ5LVZpc3VhbCddXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcImFzdnNcIixcbiAgICBuYW1lOiBcIkFjdGl2ZSBTZW5zaW5nIFZpc3VhbCBTZXF1ZW50aWFsXCIsXG4gICAgY29udGVudHMgOiBbJ092ZXJ2aWV3LVZpc3VhbCcsJ0NvbnRlbnQtVmlzdWFsLURldGFpbGVkJywnQWN0aXZpdHktVmlzdWFsJywnU3VtbWFyeS1WaXN1YWwnXVxuICB9LFxuICB7XG4gICAgdHlwZTogXCJpbnZhbGlkXCIsXG4gICAgbmFtZTogXCJDb21wbGV0ZSBDaGFwdGVyIDEgRmlyc3RcIixcbiAgICBjb250ZW50cyA6IFsnT3ZlcnZpZXctVmlzdWFsJywnQ29udGVudC1WaXN1YWwtRGV0YWlsZWQnLCdBY3Rpdml0eS1WaXN1YWwnLCdTdW1tYXJ5LVZpc3VhbCddXG4gIH1cbl07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./React/Shared/Data/learningStyles.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./React/Shared/Data/routes.js":
/*!*************************************!*\
  !*** ./React/Shared/Data/routes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Login */ \"./React/Shared/Components/Login.js\");\n/* harmony import */ var _Components_Signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Signup */ \"./React/Shared/Components/Signup.js\");\n/* harmony import */ var _Components_Course_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Course/Home */ \"./React/Shared/Components/Course/Home.js\");\n/* harmony import */ var _Components_Course_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Course/Page */ \"./React/Shared/Components/Course/Page.js\");\n/* harmony import */ var _Components_Course_LS_LS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Course/LS/LS */ \"./React/Shared/Components/Course/LS/LS.js\");\n\n\n\n\n\nvar routes = [{\n  path: \"/\",\n  component: _Components_Login__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  path: \"/signup\",\n  component: _Components_Signup__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true\n}, {\n  path: \"/course/:course/ls:ls_type\",\n  component: _Components_Course_LS_LS__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  exact: true\n}, {\n  path: \"/course/:course/home\",\n  component: _Components_Course_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  exact: true\n}, {\n  path: \"/course/:course/ls/invalid\",\n  component: _Components_Course_LS_LS__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  exact: true\n}, {\n  path: \"/course/:course/ls/:ls_type\",\n  component: _Components_Course_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  exact: true\n}, {\n  path: \"/course/:course/ls/:ls_type/:category\",\n  component: _Components_Course_Page__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  exact: true\n}, {\n  path: \"/dashboard\",\n  component: _Components_Course_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  exact: true\n}, {\n  path: \"/course/:course\",\n  component: _Components_Course_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  exact: true\n}, {\n  path: \"/course/:course/:category\",\n  component: _Components_Course_Page__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  exact: true\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9SZWFjdC9TaGFyZWQvRGF0YS9yb3V0ZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SZWFjdC9TaGFyZWQvRGF0YS9yb3V0ZXMuanM/ZTI2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9naW4gZnJvbSAnLi4vQ29tcG9uZW50cy9Mb2dpbidcbmltcG9ydCBTaWdudXAgZnJvbSAnLi4vQ29tcG9uZW50cy9TaWdudXAnXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9Ib21lJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vQ29tcG9uZW50cy9Db3Vyc2UvUGFnZSdcbmltcG9ydCBMUyBmcm9tICcuLi9Db21wb25lbnRzL0NvdXJzZS9MUy9MUydcblxuXG5jb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgcGF0aDogXCIvXCIsXG4gICAgICBjb21wb25lbnQ6IExvZ2luLFxuICAgICAgZXhhY3QgOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL3NpZ251cFwiLFxuICAgICAgICBjb21wb25lbnQ6IFNpZ251cCxcbiAgICAgICAgZXhhY3QgOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NvdXJzZS86Y291cnNlL2xzOmxzX3R5cGVcIixcbiAgICAgICAgY29tcG9uZW50IDogTFMsXG4gICAgICAgIGV4YWN0IDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9jb3Vyc2UvOmNvdXJzZS9ob21lXCIsXG4gICAgICAgIGNvbXBvbmVudCA6IEhvbWUsXG4gICAgICAgIGV4YWN0IDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9jb3Vyc2UvOmNvdXJzZS9scy9pbnZhbGlkXCIsXG4gICAgICAgIGNvbXBvbmVudCA6IExTLFxuICAgICAgICBleGFjdCA6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvY291cnNlLzpjb3Vyc2UvbHMvOmxzX3R5cGVcIixcbiAgICAgICAgY29tcG9uZW50IDogSG9tZSxcbiAgICAgICAgZXhhY3QgOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NvdXJzZS86Y291cnNlL2xzLzpsc190eXBlLzpjYXRlZ29yeVwiLFxuICAgICAgICBjb21wb25lbnQgOiBQYWdlLFxuICAgICAgICBleGFjdCA6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZSxcbiAgICAgICAgZXhhY3QgOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NvdXJzZS86Y291cnNlXCIsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZSxcbiAgICAgICAgZXhhY3QgOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL2NvdXJzZS86Y291cnNlLzpjYXRlZ29yeVwiLFxuICAgICAgICBjb21wb25lbnQ6IFBhZ2UsXG4gICAgICAgIGV4YWN0IDogdHJ1ZVxuICAgIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU9BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./React/Shared/Data/routes.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _React_Server_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./React/Server/index */ \"./React/Server/index.js\");\n\n\nvar cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar globalErrorHandler = __webpack_require__(/*! ./APIs/Controllers/ErrorController */ \"./APIs/Controllers/ErrorController.js\");\n\nvar AppErr = __webpack_require__(/*! ./APIs/utils/appError */ \"./APIs/utils/appError.js\");\n\nvar studentRouter = __webpack_require__(/*! ./APIs/Routers/studentRouter */ \"./APIs/Routers/studentRouter.js\");\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.use(morgan(\"dev\"));\napp.use(cors()); //===============Routers=====================\n\napp.use(\"/api/v1/student\", studentRouter);\napp.use(\"/\", _React_Server_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.all(\"*\", (req, res, next) => {\n  next(new AppErr(\"Can't find a route - BAD URL\", 404));\n});\napp.use(globalErrorHandler);\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuY29uc3QgY29ycyA9IHJlcXVpcmUoXCJjb3JzXCIpO1xuY29uc3QgbW9yZ2FuID0gcmVxdWlyZShcIm1vcmdhblwiKTtcbmNvbnN0IGdsb2JhbEVycm9ySGFuZGxlciA9IHJlcXVpcmUoXCIuL0FQSXMvQ29udHJvbGxlcnMvRXJyb3JDb250cm9sbGVyXCIpO1xuY29uc3QgQXBwRXJyID0gcmVxdWlyZShcIi4vQVBJcy91dGlscy9hcHBFcnJvclwiKTtcbmNvbnN0IHN0dWRlbnRSb3V0ZXIgPSByZXF1aXJlKFwiLi9BUElzL1JvdXRlcnMvc3R1ZGVudFJvdXRlclwiKTtcblxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9SZWFjdC9TZXJ2ZXIvaW5kZXhcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKG1vcmdhbihcImRldlwiKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5cbi8vPT09PT09PT09PT09PT09Um91dGVycz09PT09PT09PT09PT09PT09PT09PVxuYXBwLnVzZShcIi9hcGkvdjEvc3R1ZGVudFwiLCBzdHVkZW50Um91dGVyKTtcblxuYXBwLnVzZShcIi9cIiwgUm91dGVyKTtcblxuYXBwLmFsbChcIipcIiwgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIG5leHQobmV3IEFwcEVycihcIkNhbid0IGZpbmQgYSByb3V0ZSAtIEJBRCBVUkxcIiwgNDA0KSk7XG59KTtcblxuYXBwLnVzZShnbG9iYWxFcnJvckhhbmRsZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./knn/knn.js":
/*!********************!*\
  !*** ./knn/knn.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
eval("var KNN = __webpack_require__(/*! ml-knn */ \"ml-knn\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nfunction csvJSON(csv) {\n  var lines = csv.split(\"\\n\");\n  var result = [];\n  var headers = lines[0].trim().split(\",\");\n\n  for (var i = 1; i < lines.length; i++) {\n    var obj = {};\n    var currentline = lines[i].trim().split(\",\");\n\n    for (var j = 0; j < headers.length; j++) {\n      obj[headers[j]] = currentline[j];\n    }\n\n    result.push(obj);\n  } //return result; //JavaScript object\n\n\n  return JSON.parse(JSON.stringify(result)); //JSON\n}\n\nexports.getType = input => {\n  var knn;\n  var type;\n  var csvFilePath = __dirname + '/../knn/dataset.csv'; // Data\n\n  var names = ['ABC_%', 'D_%', 'C_%', 'AAC_%', 'A_%', 'V_%', 'ABC_T', 'D_T', 'C_T', 'AAC_T', 'A_T', 'LS'];\n  var data = [],\n      X = [],\n      Y = [];\n  var csv = fs.readFileSync(csvFilePath, 'utf-8');\n  data = csvJSON(csv);\n  var types = new Set();\n  data.forEach(row => {\n    if (row.LS === undefined) console.log(row);\n    types.add(row.LS);\n  });\n  typesArray = [...types]; // console.log(typesArray)\n\n  data.forEach(row => {\n    var rowArray, typeNumber;\n    rowArray = Object.values(row).map(key => parseFloat(key)).slice(0, 11); // typeNumber = typesArray.indexOf(row.LS); \n\n    type = row.LS;\n    X.push(rowArray);\n    Y.push(type);\n  });\n  knn = new KNN(X, Y, {\n    k: 1\n  });\n  type = knn.predict(input);\n  return type;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9rbm4va25uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4va25uL2tubi5qcz8wZWE3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEtOTiA9IHJlcXVpcmUoJ21sLWtubicpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cblxuZnVuY3Rpb24gY3N2SlNPTihjc3Ype1xuXG4gICAgdmFyIGxpbmVzPWNzdi5zcGxpdChcIlxcblwiKTtcbiAgXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICBcbiAgICB2YXIgaGVhZGVycz1saW5lc1swXS50cmltKCkuc3BsaXQoXCIsXCIpO1xuICBcbiAgICBmb3IodmFyIGk9MTtpPGxpbmVzLmxlbmd0aDtpKyspe1xuICBcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICB2YXIgY3VycmVudGxpbmU9bGluZXNbaV0udHJpbSgpLnNwbGl0KFwiLFwiKTtcbiAgXG4gICAgICAgIGZvcih2YXIgaj0wO2o8aGVhZGVycy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgIG9ialtoZWFkZXJzW2pdXSA9IGN1cnJlbnRsaW5lW2pdO1xuICAgICAgICB9XG4gIFxuICAgICAgICByZXN1bHQucHVzaChvYmopO1xuICBcbiAgICB9XG4gICAgXG4gICAgLy9yZXR1cm4gcmVzdWx0OyAvL0phdmFTY3JpcHQgb2JqZWN0XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7IC8vSlNPTlxuICB9XG5cbmV4cG9ydHMuZ2V0VHlwZSA9IChpbnB1dCkgPT4ge1xuXG4gICAgbGV0IGtubjtcbiAgICBsZXQgdHlwZTtcbiAgICBjb25zdCBjc3ZGaWxlUGF0aCA9IF9fZGlybmFtZSsnLy4uL2tubi9kYXRhc2V0LmNzdic7IC8vIERhdGFcbiAgICBjb25zdCBuYW1lcyA9IFsnQUJDXyUnLCdEXyUnLCdDXyUnLCdBQUNfJScsJ0FfJScsJ1ZfJScsJ0FCQ19UJywnRF9UJywnQ19UJywnQUFDX1QnLCdBX1QnLCdMUyddO1xuICAgIGxldCBkYXRhID0gW10sIFggPSBbXSwgWSA9IFtdO1xuXG4gICAgY29uc3QgY3N2ID0gZnMucmVhZEZpbGVTeW5jKGNzdkZpbGVQYXRoLCd1dGYtOCcpXG5cbiAgICBkYXRhID0gY3N2SlNPTihjc3YpXG5cbiAgICBsZXQgdHlwZXMgPSBuZXcgU2V0KCk7IFxuXG4gICAgZGF0YS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgaWYocm93LkxTID09PSB1bmRlZmluZWQpIGNvbnNvbGUubG9nKHJvdylcbiAgICAgICAgdHlwZXMuYWRkKHJvdy5MUyk7XG4gICAgfSk7XG5cbiAgICB0eXBlc0FycmF5ID0gWy4uLnR5cGVzXTsgXG5cbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlc0FycmF5KVxuXG4gICAgZGF0YS5mb3JFYWNoKChyb3cpID0+IHtcblxuICAgICAgICBsZXQgcm93QXJyYXksIHR5cGVOdW1iZXI7XG5cbiAgICAgICAgcm93QXJyYXkgPSBPYmplY3QudmFsdWVzKHJvdykubWFwKGtleSA9PiBwYXJzZUZsb2F0KGtleSkpLnNsaWNlKDAsMTEpXG5cbiAgICAgICAgLy8gdHlwZU51bWJlciA9IHR5cGVzQXJyYXkuaW5kZXhPZihyb3cuTFMpOyBcblxuICAgICAgICB0eXBlID0gcm93LkxTXG5cbiAgICAgICAgWC5wdXNoKHJvd0FycmF5KTtcbiAgICAgICAgWS5wdXNoKHR5cGUpO1xuICAgIH0pO1xuXG4gICAga25uID0gbmV3IEtOTihYLCBZLCB7azogMX0pO1xuXG4gICAgdHlwZSA9IGtubi5wcmVkaWN0KGlucHV0KTtcblxuICAgIHJldHVybiB0eXBlXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./knn/knn.js\n");
=======
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
>>>>>>> origin/master

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./app.js\");\n\n\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\ndotenv.config({\n  path: \"./config.env\"\n});\nvar DB = process.env.DB_CON.replace(\"<password>\", process.env.DB_PASS);\nconsole.log(DB);\nmongoose.connect(DB, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useFindAndModify: false,\n  useUnifiedTopology: true\n}).then(() => {\n  console.log(\"Database connection Done !\");\n}).catch(err => {\n  console.log(err);\n});\nvar port = process.env.CON_PORT;\n_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(port, () => {\n  console.log(\"Server Started at http://localhost:8000\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIuanM/MWQ2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gJy4vYXBwJ1xuY29uc3QgZG90ZW52ID0gcmVxdWlyZShcImRvdGVudlwiKTtcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuZG90ZW52LmNvbmZpZyh7IHBhdGg6IFwiLi9jb25maWcuZW52XCIgfSk7XG5cbmNvbnN0IERCID0gcHJvY2Vzcy5lbnYuREJfQ09OLnJlcGxhY2UoXCI8cGFzc3dvcmQ+XCIsIHByb2Nlc3MuZW52LkRCX1BBU1MpO1xuXG5jb25zb2xlLmxvZyhEQik7XG5cbm1vbmdvb3NlXG4gIC5jb25uZWN0KERCLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuICB9KVxuICAudGhlbigoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0aW9uIERvbmUgIVwiKTtcbiAgfSlcbiAgLmNhdGNoKGVyciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5DT05fUE9SVDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgU3RhcnRlZCBhdCBodHRwOi8vbG9jYWxob3N0OjgwMDBgKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./server.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

<<<<<<< HEAD
/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI/OTFjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/AppBar\n");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI/MDBkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Avatar\n");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Box\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQm94LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCI/NTA2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Box\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI/NTcwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIj9iMGYxIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Card\n");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiPzRkNGEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/CardContent\n");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardMedia\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCI/MTYzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/CardMedia\n");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Checkbox\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiP2YyYjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Checkbox\n");

/***/ }),

=======
>>>>>>> origin/master
/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI/MDgyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Container\n");

/***/ }),

<<<<<<< HEAD
/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/FormControlLabel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIj8xZGQzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/FormControlLabel\n");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIj9mNmZjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Grid\n");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvTGluay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIj9iMjFkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Link\n");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiPzBlZjIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Paper\n");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI/OTExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/TextField\n");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIj8zNmUyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Toolbar\n");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIj8wYmViIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/Typography\n");

/***/ }),

=======
>>>>>>> origin/master
/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI/N2UzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/colors\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI/NDEwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "@material-ui/icons/ArrowForwardIosRounded":
/*!************************************************************!*\
  !*** external "@material-ui/icons/ArrowForwardIosRounded" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ArrowForwardIosRounded\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvc1JvdW5kZWQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dGb3J3YXJkSW9zUm91bmRlZFwiPzljN2IiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvc1JvdW5kZWRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/icons/ArrowForwardIosRounded\n");

/***/ }),

/***/ "@material-ui/icons/CheckCircleSharp":
/*!******************************************************!*\
  !*** external "@material-ui/icons/CheckCircleSharp" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/CheckCircleSharp\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlU2hhcnAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tDaXJjbGVTaGFycFwiP2ZmNDIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQ2lyY2xlU2hhcnBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/icons/CheckCircleSharp\n");

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

eval("module.exports = require(\"@material-ui/icons/LockOutlined\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWRcIj8wMWZmIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@material-ui/icons/LockOutlined\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNyeXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0XCI/Y2Y5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIj83ZTllIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCI/NGM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///crypto\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90ZW52LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG90ZW52XCI/ZTcwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbndlYnRva2VuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCI/NjQ5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "ml-knn":
/*!*************************!*\
  !*** external "ml-knn" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ml-knn\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWwta25uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWwta25uXCI/YWQ0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtbC1rbm5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///ml-knn\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZ2FuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCI/MzIwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///morgan\n");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZW1haWxlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGVtYWlsZXJcIj8zZDU1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///nodemailer\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLWRvbS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj81M2I5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWFsaXplLWphdmFzY3JpcHQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiPzE2ZjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VyaWFsaXplLWphdmFzY3JpcHRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///serialize-javascript\n");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIj9iZTBiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///util\n");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidmFsaWRhdG9yXCI/YjBjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2YWxpZGF0b3JcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///validator\n");

/***/ })

/******/ });