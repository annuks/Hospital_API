const express = require('express');
const app = express();
const port = 4000;


// arrow function
//app.listen (port,(err)=>{
app.listen (port,function(err){  
if(err){
        console.log("Error in Running Server");
        return;
    }
    console.log("Server is up and running on Port :",port);

});