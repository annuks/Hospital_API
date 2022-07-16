//using reports schema from model
const Report = require("../../models/report");
// controller for generating test status of patients
module.exports.reportsStatus = async (req, res) => {
    try{
        const reports = await Report.find({status:req.params.status}).populate('patient').populate('doctor');
        //filtering which data to shown on report
        let all_reports = [];
        for(val of reports){
            let value = {};
            value.patient_name = val.patient.name;
            value.patient_phone = val.patient.phone;
            value.doctor = val.doctor.name;

            all_reports.push(value);
        }

        if(reports){
            return res.json(200,{
                message:'Showing All Reports Associated to Result Status',
                success:true,
                data : {
                    status : req.params.status,
                    reports:all_reports
                }
            })
        }
        else{
            return res.json(200,{
                message:'Failed to Showing Test Result',
                success:false,
             
            })
        }



    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: " **Internal Server Error**"
        });
    }
};