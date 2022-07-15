
//Calling the Express Server and Fetching Router
const express = require('express');
const router = express.Router();

const doctorsController = require('../../controllers/api/doctorsController')


// calling   doctors controller
router.get('/doctors',(req,res)=>{
    res.send("Hi From Route/Doctors");
})

// router for doctor registartion
router.post("/doctors/registration", doctorsController.registerDoctor);
