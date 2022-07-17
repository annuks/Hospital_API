//Calling the Express Server and Fetching Router
const express = require('express');
const router = express.Router();

//Refering data for Home Page
router.get('/',(req, res) => {
    res.send(`<h1 style='color:orange'>Hospital API</h1> <h3>(User Guide)<br>
    [http://localhost:8000/api/]</h3>
   
    1	For Doctor Registartion use in POSTMAN as POST request <b>[/doctors/register] </b>route and  need to pass data in "x-www-urlencoded". <hr>
    2	For Login as Doctor , in POSTMAN use POST request <b>[/doctors/login] </b> route and  need to pass data in "www-urlencoded" section. <hr>
    3	For Patients Registartion in  POSTMAN as POST request <b> [/patients/register] </b> route and  need to pass token in "Header" and name,phone in "x-www-urlencoded" <hr>
    4   For Patients Reports Creation in  POSTMAN as POST request <b> [/patients/:id/create_report] </b>route and  need to pass data in "x-www-urlencoded". <br>
        (Give Patient ID in url and Doctor ID as Bearer token in  Header)<hr>
    5	For Viewing Patients Reports (oldest to new), in  POSTMAN as POST request <b>[/patients/:id/all_reports] </b> route and  need to pass data in "x-www-urlencoded". <hr>
    6   For getting All Reports Status use  in POSTMAN as GET request <b>[/patients/:status] </b> route and  need to pass data in "params" section. <hr>
    `)

})




// router.get('/',doctorsController.registerDoctor);
router.use('/api',require('./api'))


module.exports = router;
