const express=require("express")
const app=express()
const cors=require("cors")
const bodyparser=require("body-parser")
const port=3078

app.use(bodyparser.urlencoded({
        extended:true
    }))
app.use(bodyparser.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.send("server is starting")
})
app.post("/newData",(req,res)=>{
   const {name,age,password,fruit}=req.body
   console.log(name,age,password,fruit)
   res.send("added successfully")
})

app.listen(port,()=>console.log("server is running on port 3078"))


