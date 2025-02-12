const TeaModel= require("../models/TeaModel");
const dataSave=async(req, res)=>{
    const { Teacherno, Teachername, department, salary} = req.body;
 const Data= await  TeaModel.create({
    Teacherno:Teacherno,
    Teachername:Teachername,
        department:department,
        salary:salary
       })
res.send("Data Submit");
}
const Display=async(req,res)=>{
   const data = await TeaModel.find();
   res.send(data)

}

  
  const empDelete=async(req,res)=>{
 const{empid}=req.query;
 await TeaModel.findByIdAndDelete(empid);
 res.send("data deleted")
  }

  const empEditshow=async(req,res)=>{
    const{empid}=req.body;
    const Data =await TeaModel.findById(empid);
    res.send(Data)
  }

  const empEditSave=async(req,res)=>{
    const{_id}=req.body;
    await TeaModel.findByIdAndUpdate(_id,req.body);
  }

module.exports={
    dataSave,
    Display,
   
    empDelete,
    empEditshow,
    empEditSave
}