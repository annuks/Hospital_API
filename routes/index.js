const express = require('express');
const router = express.Router();





// Getting doctors Contrller
router.get('/doctors',(req,res)=>{
    res.send("Hey From Route/Doctors");
})


// Getting patients Contrller
router.get('/patients',(req,res)=>{
    res.send("Hey From Route/Patients");
})







module.exports = router;
