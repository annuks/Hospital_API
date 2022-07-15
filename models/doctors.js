const mongoose = require("mongoose");

const doctorsSchecma = mongoose.Schema(
  {
    email: {
      type:email,
      required: true,
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