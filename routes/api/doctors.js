
//Calling the Express Server and Fetching Router
const express = require('express');
const router = express.Router();

const doctorsController = require('../../controllers/api/doctorsController')


// // calling   doctors 
// router.get('/doctors',(req,res)=>{
//     res.send("Hi From Route/Doctors");
// })

// router for doctor registartion Controller
router.post("/doctors/register", doctorsController.registerDoctor);
