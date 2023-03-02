const express=require("express")
const {connection}=require("./config/db")
const {wordRoute}=require("./route/word.route")
const app=express();
const cors=require("cors")

app.use(express.json())
app.use(cors({
    origin:"*"
}))
app.use("/wordgame",wordRoute)
app.listen(4500,async()=>{
    try{
        await connection;
        console.log("Connected to database")
    }
    catch(err){
        console.log("error while connectig to database")
    }
})