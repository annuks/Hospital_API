const mongoose = require("mongoose");

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
    }
  },
  {
    timestamps: true,
  }
);

const Patients = mongoose.model("Patients", patientsSchema);

module.exports = Patients;