const mongoose = require("mongoose");
//creating schema for patients
const patientsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    doctor: {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Doctors'
    },
    reports: [{
      type:mongoose.Schema.Types.ObjectId,
      ref : 'Report'
    }],  

  },
  {
    timestamps: true,
  }
);

const Patients = mongoose.model("Patients", patientsSchema);

module.exports = Patients;