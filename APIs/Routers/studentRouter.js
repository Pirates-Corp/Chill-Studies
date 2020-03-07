const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const studentController = require("../Controllers/studentController");

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/forgetPassword").post(authController.passwordForget);
router.route("/resetPassword/:token").post(authController.resetPassword);
router
  .route("/updatePassword")
  .post(authController.protect, authController.updatePassword);
router.route("/getAll").get(authController.protect, studentController.getAll);

module.exports = router;
