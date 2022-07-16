//Calling the Express Server and Fetching Router
const express = require('express');
const router = express.Router();

//Refering data for Home Page
router.get('/',(req, res) => {
    res.send("<h1 style='color:orange'><marquee>Hospital API</h1>")
})



//Creating Middleware
// router.get('/',doctorsController.registerDoctor);
router.use('/api',require('./api'))


module.exports = router;
