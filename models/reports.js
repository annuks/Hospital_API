const mongoose = require("mongoose");

const reportsSchecma = mongoose.Schema(
  {
    pateintsName: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    testResult: {
      type:String,
      required:true,
    },
    doctorName: {
        type:String,
        required:true,
      },
  },
);
const Reports = mongoose.model("Reports", reportssSchema);

module.exports = Reports;