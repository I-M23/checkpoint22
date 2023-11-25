const express = require('express')
const indexRoute = express.Router();

indexRoute.get('/',(req,res)=>{
    res.render('home')
})

indexRoute.get('/contact',(req,res)=>{
    res.render('contact')
})

indexRoute.get('/service',(req,res)=>{
    res.render('service')
})


module.exports = indexRoute