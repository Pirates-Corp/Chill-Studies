const Student = require("../Model/StudentModel");
const catchAsync = require("../utils/catchErr");

exports.post = catchAsync(async (req, res) => {
  const student = await Student.findById(req.params.id);
  console.log(req.body);
  student.mlData = req.body; //machan body acces pann mataingithu

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

  const mlData = Object.values(student.mlData);

  let arr = mlData.slice(1, 10);

  res.status(200).json(arr);
});
