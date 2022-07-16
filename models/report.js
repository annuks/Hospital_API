const mongoose = require("mongoose");
//defining schema for all reports
const reportsSchema = mongoose.Schema({
  patient: {
      type:mongoose.Schema.Types.ObjectId,
      ref : 'Patients'
  },
  status: {
    type: String,
    enum : ['Negative','Travelled-Quarantine','Symptom-Quarantine','Positive-Admit'],
    required: true,
  },
  doctor: {
    type:mongoose.Schema.Types.ObjectId,
    ref : 'Doctors'
  },
},
  {
    timestamps: true,
  }
);
const Report = mongoose.model("Report", reportsSchema);

module.exports = Report;
