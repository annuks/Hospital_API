const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');




app.use(express.urlencoded());
//Setting Route folder to use routes
//app.use('/',require('./routes'));



app.use('*',(req,res)=>{
    res.send("Error !! No such Pages");
});

// Starting the Server
app.listen (port,function(err){  
if(err){
        console.log("Error in Running Server");
        return;
    }
    console.log("Server is up and running on Port :",port);

});