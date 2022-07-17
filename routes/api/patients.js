//Calling the Express Server and Fetching Router
const express = require("express");
const router = express.Router();
const passport = require('passport')


const patientsController = require('../../controllers/api/patientsController');



// router for patient registartion 
//authenticating , whether user is logged in or not
router.post("/register",passport.authenticate('jwt',{session:false}),patientsController.registerPatient);

// router for creating patient report Controller
router.post("/:id/create_report",passport.authenticate('jwt',{session:false}), patientsController.create_Report);
// router for creating patients All reports Controller
router.get("/:id/all_reports", patientsController.all_Report);



module.exports = router;

