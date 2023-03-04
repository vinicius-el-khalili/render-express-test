const express = require("express")
const app = express()
app.listen(3000,()=>{console.log("listening")})
app.get("/test",(req,res)=>{
    res.json({"msg":"hello world!"})
})
app.get("/yolo",(req,res)=>{
    res.json({"yolo":"lol"})
})