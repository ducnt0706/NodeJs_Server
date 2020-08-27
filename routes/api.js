const express = require("express");

// TODO: init 
const router=express.Router();

router.get('/fruits',(req,res)=>{
    res.send({type:'GET',object:'fruits'});
})

router.post('/fruits',(req,res)=>{
    res.send({
        type:'POST',
        payload:req.body,
    })
})

module.exports =router;