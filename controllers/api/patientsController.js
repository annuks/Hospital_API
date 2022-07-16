//using patients schema from model
const Patients = require("../../models/patients");
//using reports schema from model
const Report = require("../../models/report");

//Controller for patient registration
module.exports.registerPatient = async (req, res) => {
  try {
    const patient = await Patients.findOne({ phone: req.body.phone }).populate(
      "doctor"
    );
    if (patient) {
      return res.json(200, {
        message: "Patient Already Registered",
        success: true,
        data: {
          patients: {
            patientId: patient._id,
            patientName: patient.name,
            phone: patient.phone,
            doctor: patient.doctor.name,
          },
        },
      });
    } else {
      let patients = await Patients.create({
        name: req.body.name,
        phone: req.body.phone,
        doctor: req.user._id,
      });

      return res.json(200, {
        message: "Patients Registarion Done Succesfully",
        data: {
          patients: {
            patientId: patients._id,
            patientName: patients.name,
            phoneNo: patients.phone,
          },
        },
      });
    }
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: " **Internal Server Error**",
    });
  }
};

//Controller for patients reports creation

module.exports.create_Report = async (req, res) => {
  try {
    // console.log("Patients",req.params.id)
    const patient = await Patients.findById(req.params.id);
    console.log("Patient", patient);
    if (patient) {
      const doctor = req.user._id;
      const report = await Report.create({
        patient: patient._id,
        doctor,
        status: req.body.status,
      });
      patient.reports.push(report._id);
      patient.save();
      return res.json(200, {
        message: "Patients Report Created Succesfully",
        success: true,
      });
    } else {
      return res.json(400, {
        message: "Patient id Not Found",
        success: false,
      });
    }
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      success: false,
      message: " **Internal Server Error**-- Patient id Not Found",
    });
  }
};

//Controllers for All patients report

module.exports.all_Report = async (req, res) => {
  try {
    const patient = await Patients.findById(req.params.id).populate("reports");
    if (patient) {
      return res.json(200, {
        message: "Patients All Reports Generated",
        success: true,
        data: {
          patient_id: patient._id,
          patientName: patient.name,
          patient_phone: patient.phone,
          patient_reports: patient.reports,
        },
      });
    }else{
        return res.json(400, {
            message: "Patient id Not Found",
            success: false,
          });
    }

  } catch (err) {
    console.log("********", err);
    return res.json(500, {
        success: false,
        message: " **Internal Server Error**-- Patient id Not Found",
    });
  }
};
