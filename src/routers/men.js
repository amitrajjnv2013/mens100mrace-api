const express= require("express");
const router= new express.Router();

const MensRanking= require("../models/mens");

router.get("/mens", async(req,res)=>{
    try{
        const getRecords=await MensRanking.find({}).sort({ranking:1});
        console.log(req.body);
        res.send(getRecords);
    }catch(e){
        res.status(400).send(e);
    }
})

router.post("/mens", async(req,res)=>{
    try{
        const addRecords=new MensRanking(req.body)
        console.log(req.body);
        const result= await addRecords.save();
        res.status(201).send(result);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports= router;