const express = require("express");
const Fruit = require("../model/fruit");

// TODO: init
const router = express.Router();

router.get("/fruits", (req, res) => {
  Fruit.find().then((data) => {
    res.send({ type: "GET", object: data });
  });
});

router.post("/fruits", (req, res) => {
  Fruit.create(req.body).then((data) => {
    res.send(data);
  });
});

module.exports = router;

// update a ninja in the db
// router.put('/ninjas/:id', function(req, res,next){
//     Ninja.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((ninja)=>{
//         res.send(ninja);
//     }).catch(next);
// });

// delete a ninja from the db
// router.delete('/ninjas/:id', function(req, res,next){
//     Ninja.findByIdAndRemove({_id:req.params.id}).then((ninja)=>{
//         res.send(ninja);
//     }).catch(next);
//     res.send({type: 'DELETE'});
// });
