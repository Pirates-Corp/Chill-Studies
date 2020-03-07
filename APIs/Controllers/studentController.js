const Student = require("../Model/StudentModel");

exports.getAll = async (req, res) => {
  const allStudents = await Student.find();

  res.status(200).json({
    message: "Success!",
    data: { allStudents }
  });
};
