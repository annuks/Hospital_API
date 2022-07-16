const mongoose = require("mongoose");

const reportsSchecma = mongoose.Schema({
  pateint: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true
    
  },
  testResult: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true,
  }

);
const Reports = mongoose.model("Reports", reportsSchema);

module.exports = Reports;
