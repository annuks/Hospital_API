//Calling the Express Server and Fetching Router
const express = require('express');
const router = express.Router();


// Send to  patients Contrller
router.get('/patients',(req,res)=>{
    res.send("Hello From Route/Patients");
})
