const passport = require("passport");
//using java web token for authorisation 
const JWTStrategy =require ("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
//calling doctors schema  from models
const Doctors = require ('../models/doctors');
//authorising for generating token
let opts = {
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'hospitalapi',
}
passport.use(new JWTStrategy(opts, function(jwtPayLoad,done){
    Doctors.findById(jwtPayLoad._id, function(err,doctor){
        if(err){
            console.log("Error in finding user from JWT");
            return;
              }
            if(doctor){
                return done(null, doctor);
                    }
                else{
                    return done(null, false);
                }

        })
}))
module.exports=passport;