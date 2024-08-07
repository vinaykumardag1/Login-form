const mongoose=require("mongoose")

const NewSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const NewModel=mongoose.model("form",NewSchema)

module.exports=NewModel