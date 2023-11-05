const mongoose=require("mongoose")

let pass = encodeURIComponent("Ashish@1234");
mongoose.connect('mongodb+srv://srijanjain2004:'+pass+'@cluster0.hie0aev.mongodb.net/CodeTracker')
.then(() => {
    console.log("mongodb connected");
})
.catch((e) => {
    console.log(e)
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cfid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",LogInSchema)

module.exports=collection