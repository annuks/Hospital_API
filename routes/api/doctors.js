//Calling the Express Server and Fetching Router
const express = require("express");
const router = express.Router();

const doctorsController = require('../../controllers/api/doctorsController');


// router for doctor registartion Controller
router.post("/register", doctorsController.registerDoctor);
// router for doctor login Controller
router.post("/login", doctorsController.loginDoctor);

module.exports = router;
