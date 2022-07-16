//Calling the Express Server and Fetching Router
const express = require("express");
const router = express.Router();
const passport = require('passport')


const patientsController = require('../../controllers/api/patientsController');
// ,passport.authenticate('jwt')


// router for patient registartion Controller
router.post("/register",passport.authenticate('jwt',{session:false}),patientsController.registerPatient);

// router for patient report Controller
router.post("/create_report", patientsController.create_Report);
// router for patients All reports Controller
router.post("/all_report", patientsController.all_Report);



module.exports = router;

