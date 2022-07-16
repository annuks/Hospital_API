
//Calling the Express Server and Fetching Router
const express = require('express');
const router = express.Router();

// router for reports status Controller
router.post("/reports/status",reportsController.reportsStatus);
