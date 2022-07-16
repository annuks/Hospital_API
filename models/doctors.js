const mongoose = require("mongoose");
//creating schema for doctors
const doctorsSchema = mongoose.Schema(
  {
    email: {
      type:String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required:true
    },
  },

);
const Doctors = mongoose.model("Doctors", doctorsSchema);

module.exports = Doctors;