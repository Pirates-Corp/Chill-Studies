const mongoose = require("mongoose");

const MLSchema = new mongoose.Schema({
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
});

const Mldata = mongoose.model("Ml", MLSchema);

module.exports = Mldata;
