const Report = require("../../models/report");

module.exports.reportsStatus = async (req, res) => {
    try{
        const reports = await Report.find({status:req.params.status}).populate('patient').populate('doctor');
        
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
                message:'All Reports Associated to Status',
                success:true,
                data : {
                    status : req.params.status,
                    reports:all_reports
                }
            })
        }
        else{
            return res.json(200,{
                message:'Fsiled to Showing Test Result',
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