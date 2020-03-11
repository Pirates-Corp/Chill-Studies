const Student = require("../Model/StudentModel");
const catchAsync = require("../utils/catchErr");
const knn = require("../../knn/knn");
const fs = require("fs");
const path = require("path");

exports.post = catchAsync(async (req, res) => {
  const student = await Student.findById(req.params.id);
  console.log(req.body);

  // const body = {
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

  student.mlData = {
    ...student.mlData,
    ...req.body
  };

  await student.save({ validateBeforeSave: false });
  res.status(200).json({
    message: "Ml Data posted !",
    data: {
      student
    }
  });
});

exports.getData = catchAsync(async (req, res) => {
  const student = await Student.findById(req.params.id);

  const mlData = Object.values(student.mlData).slice(1);

  console.log(mlData);

  let learningStyle = knn.getType(mlData);

  res.status(200).json(learningStyle);
});
