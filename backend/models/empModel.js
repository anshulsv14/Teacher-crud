
const mongoose= require("mongoose");

const teaSchema=new mongoose.Schema({
    employeeno:String,
    employeename:String,
    department:String,
    city:String,
    salary:String
})

module.exports= mongoose.model("employeerecord", teaSchema);
