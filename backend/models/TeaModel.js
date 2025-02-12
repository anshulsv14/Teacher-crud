
const mongoose= require("mongoose");

const teaSchema=new mongoose.Schema({
    Teacherno:String,
    Teachername:String,
    department:String,
    salary:String
})

module.exports= mongoose.model("Teacherrecord", teaSchema);
