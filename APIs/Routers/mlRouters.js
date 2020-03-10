
const express = require("express");
const router = express.Router();
const mlController = require("../Controllers/mlControllers");

router.route("/post").post(mlController.post);

module.exports = router;
