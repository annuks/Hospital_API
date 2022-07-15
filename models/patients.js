const mongoose = require("mongoose");

const patientsSchecma = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    testStatus: {
      type:String,
      required:true,
    },
    doctorName: {
        type:String,
        required:true,
      },
      
  },
  {
    timestamps: true,
  }
);

const Patients = mongoose.model("Patients", patientsSchema);

module.exports = Patients;