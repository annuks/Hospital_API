const Doctors = require("../../models/doctors");

module.exports.registerDoctor = async (req, res) => {
    try{
        let doctors = await Doctors.create({
            email: req.body.email,
            password:req.body.password,
            name:req.body.name,
        });


        return res.json(200, {
            message: 'Doctor Registarion Done Succesfully',
            data:  {
                doctors: {
                   email : doctors.email,
                    id: doctors._id
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