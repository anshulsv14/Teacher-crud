const express= require("express");
const route= express.Router();
const TeaController= require("../controllers/TeaControllers");

route.post("/datasave", TeaController.dataSave );
route.get("/display", TeaController.Display );
route.get("/empdelete", TeaController.empDelete);
route.post("/editdatashow", TeaController.empEditshow);
route.post("/editdatasave", TeaController.empEditSave);

module.exports = route;