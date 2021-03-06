//using doctors schema from model
const Doctors = require("../../models/doctors");
//using jwt for login authentication
const jwt = require("jsonwebtoken");

// controllers for doctor registration
module.exports.registerDoctor = async (req, res) => {
  try {
    let doctor = await Doctors.findOne({ email: req.body.email });
    if (doctor) {
      return res.json(409, {
        message: "Doctor Email Already Registered",
        success: false,
      });
    } else {
      if (req.body.password !== req.body.c_password) {
        return res.json(500, {
          message: "Password and Confirm Password are not Same",
          success: false,
        });
      }
      let doctor = await Doctors.create(req.body);
      console.log(doctor);
      return res.json(200, {
        message: "Doctor Registarion Done Succesfully",
        success: true,
        data: {
          doctor: {
            email: doctor.email,
            id: doctor._id,
            name:doctor.name,
          },
        },
      });
    }
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: " **Internal Server Error**",
    });
  }
};
//controller for login as doctor
//Usig json web token to authentication

module.exports.loginDoctor = async function (req, res) {
  try {
    //if login details is invalid
    let doctors = await Doctors.findOne({ email: req.body.email });
    if (!doctors || doctors.password != req.body.password) {
      return res.json(422, {
        message: "Invalid Username/Password",
        success : false
      });
    }
// if login details are correct
    return res.json(200, {
      message: "Sign In Succesfull, Here is your Token",
      success: true,
      data: {
        token: jwt.sign(doctors.toJSON(), "hospitalapi", { expiresIn: "1000000" }),
      },
    });
  } catch (err) {
    console.log(" Errrrrrror in JWT", err);
    return res.json(500, {
      message: "Internal Server error",
    });
  }
};
