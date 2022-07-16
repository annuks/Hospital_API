
//Calling the Express Server and Fetching Router
const express = require('express');
const router = express.Router();
const reportsController = require('../../controllers/api/reportsController');

// router for reports status Controller
router.get("/:status",reportsController.reportsStatus);




module.exports = router;
