//usig mongoose as database 
const mongoose =require('mongoose');

//connection between mongoose and mongodb
mongoose.connect('mongodb://localhost/hospital_API');
const db= mongoose.connection;
db.on('error',console.error.bind(console,'Error Connecting to Database'));
db.once('open', function(){
    console.log ("Connected to Database--> MongoDB :")
});
module.exports=db; 