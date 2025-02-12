const express =require('express')
const app=express();
const mongoose=require("mongoose")
const cors=require("cors")
const bodyparser =require("body-parser")
const TeaRoutes=require("./routes/TeaRoutes")
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/teacher").then(()=>{
    console.log("DB connected!!!");
})
app.use("/teacher",TeaRoutes)

app.listen(8000)
