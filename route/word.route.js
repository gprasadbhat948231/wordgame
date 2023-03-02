const express=require("express")

const {WordModel}=require("../model/word.model");

const wordRoute=express.Router();

wordRoute.post("/addword",async(req,res)=>{
    const obj=req.body;
    try{
        const wrd=new WordModel(obj)
        await wrd.save()
        res.send("Word has been stored to db")
    }catch(err){
        console.log(err)
    }
})

wordRoute.post("/getword",async(req,res)=>{
    const {difficulty}=req.body;
    console.log(difficulty)
    try{
        const data=await WordModel.find({difficulty:difficulty})
        res.send(data)
    }catch(err){
        console.log(err)
    }
})
module.exports={wordRoute}