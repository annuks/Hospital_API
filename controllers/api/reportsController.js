const Reports = require("../../models/reports");

module.exports.reportsStatus = async (req, res) => {
    try{
        let reports = await Reports.find({
            pateintsName: req.body.pateintsName,
            phoneNo:req.body.phoneNo,
            testStatus:req.body.testStatus,
            doctorName:req.body.doctorName,
        });


        return res.json(200, {
            message: 'Reports Generated Succesfully',
            data:  {
                reports: {
                   name:reports.pateintsName,
                    testResults:reports.testResult,
                    phoneNo:reports.phoneNo,
                    doctorName:reports.doctorName,
                }
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: " **Internal Server Error**"
        });
    }
};