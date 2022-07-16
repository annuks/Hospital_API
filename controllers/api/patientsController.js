const Patients = require("../../models/patients");


//Controller for patient registration
module.exports.registerPatient = async (req, res) => {
    try{
        const patient = await Patients.findOne({phone:req.body.phone}).populate('doctor');
        if(patient){
            return res.json(200, {
                message: 'Patient Already Registered',
                success: true,
                data:  {
                    patients: {
                        patientId : patient._id,
                        patientName:patient.name,
                        phone: patient.phone,
                        doctor:patient.doctor.name,
                    }
                }
            })
        }else{
            let patients = await Patients.create({
                name:  req.body.name,
                phone: req.body.phone,
                doctor: req.user._id,
            });
    
    
            return res.json(200, {
                message: 'Patients Registarion Done Succesfully',
                data:  {
                    patients: {
                        patientId : patients._id,
                        patientName:patients.name,
                        phoneNo:patients.phone,
                    }
                }
            })
        }


    

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: " **Internal Server Error**"
        });
    }
};

//Controller for patients reports creation

module.exports.create_Report = async (req, res) => {
    try{
        // let patients_reports = await Patients_Reports.create({
        //     pateintsName: req.body.pateintsName,
        //     phoneNo:req.body.phoneNo,
        //     testStatus:req.body.testStatus,
        //     doctorName:req.body.doctorName,
        // });


        return res.json(200, {
            message: 'Patients Report Created Succesfully',
            // data:  {
            //     patients_reports: {
            //         pateintsName:patients_reports.pateintsName,
            //         phoneNo:patients_reports.phoneNo,
            //         testStatus:patients_reports.testStatus,
            //         doctorName:patients_reports.doctorName,
            //     }
            // }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: " **Internal Server Error**"
        });
    }
};

//Controllers for All patients report 

module.exports.all_Report = async (req, res) => {
    try{
        // let all_reports = await All_Reports.create({
        //     pateintsName: req.body.pateintsName,
        //     phoneNo:req.body.phoneNo,
        //     testStatus:req.body.testStatus,
        //     doctorName:req.body.doctorName,
        // });


        return res.json(200, {
            message: 'Showing All Patients Reports Status ',
            // data:  {
            //     patients_reports: {
            //         pateintsName:patients_reports.pateintsName,
            //         testStatus:patients_reports.testStatus,
            //         doctorName:patients_reports.doctorName,
            //     }
            // }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: " **Internal Server Error**"
        });
    }
};