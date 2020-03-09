
const ML = require("../Model/MlDataModel");
const catchAsync = require("../utils/catchErr");

exports.post = catchAsync(async (req, res) => {
  console.log(req.body);
  const NewMldata = await ML.create(req.body);

  res.status(200).json({
    message: "Ml Data posted !",
    data: {
      NewMldata
    }
  });
});
