const exp= require('express');
const commonApp = require('./common-api');
const commonApp = exp. Router();

adminApp.get('/test-common',( req,res)=>{
    res.send({message:"This from commmon api"})
})

//export userApp
module.exports= commonApp;