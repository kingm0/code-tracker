
const express = require("express")
const app = express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const mongoose = require("mongoose");
const {PythonShell} = require('python-shell')
const cors = require('cors')


const tempelatePath = path.join(__dirname,'../tempelates')

// let option = {
//     scriptPath: "/home/srijan/Desktop/",
//     args:["Fremder"],
// }

// PythonShell.run("handel.py",option,(err,res) => {
//     if(err) console.log(err);
//     if(res) console.log(res);
// })

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/",(req,res)=>{
    res.render("login")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})


app.post("/signup",async (req,res) =>{

    const data={
        name:req.body.name,
        cfid:req.body.cfid,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.render("home")

})

app.post("/login",async (req,res) =>{

    try{
        const check=await collection.findOne({name:req.body.name})

        if(check.password===req.body.password){
            res.render("home")
        }else{
            res.send("wrong password")
        }
    }
    catch{
        res.send("wrong details")
    }

})

app.listen(5000,()=>{
    console.log("port connected");
})