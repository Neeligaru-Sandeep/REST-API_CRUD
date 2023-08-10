const mongoose = require("mongoose");
const student_schema = new mongoose.Schema({
    fullName:{
        type:String
    },
    course:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    }
});

const student_model = mongoose.model("student_details",student_schema);
module.exports = student_model;