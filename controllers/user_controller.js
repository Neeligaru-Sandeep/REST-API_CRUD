const express = require("express");
var router = express.Router();
const student_model = require("../models/student_model.js");


//route to home page
router.get("/",(req,res)=>{
    res.render("add_student_info");
});


//route to post data to the server
router.post("/",(req,res)=>{
    const data = new student_model({
        fullName:req.body.fullName,
        course:req.body.course,
        age:req.body.age,
        email:req.body.email,
        phone:req.body.phone
    });
    data.save().then(()=>res.redirect("/my_college_data"))
});


//retrieve data from the server
router.get("/my_college_data",async (req,res)=>{
    const items = await student_model.find({});
    res.render("../views/my_college_data.ejs",{items:items})
});


//retrive specific id's data
router.get("/my_college_data/:id/add_student_info_edit",async (req,res)=>{
    const {id} = req.params;
    const items = await student_model.findById(id);
    res.render("../views/add_student_info_edit.ejs",{items});
});


//retrieve specific id data and put is used to update the existing source
router.put("/my_college_data/:id",async (req,res)=>{
    const {id} =req.params;
    const items = await student_model.findByIdAndUpdate(id,req.body,{runValidators:true,new:true});
    res.redirect("/my_college_data");
});


//used delete existing source based on id
router.delete("/my_college_data/:id",async(req,res)=>{
    const {id} = req.params;
    const item = await student_model.findByIdAndDelete(id);
    res.redirect("/my_college_data");
});

module.exports = router;