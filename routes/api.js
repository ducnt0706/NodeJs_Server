const express = require("express");
const Fruit=require('../model/fruit');

// TODO: init 
const router=express.Router();

router.get('/fruits',(req,res)=>{
    res.send({type:'GET',object:'fruits'});
})

router.post('/fruits',(req,res)=>{
    Fruit.create(req.body).then((data)=>{
        res.send(data);
    })
})

module.exports =router;