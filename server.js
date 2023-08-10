const express = require("express");
const app = express();


////used to update the source and delete the source using _method in the form 
const methodOverride = require("method-override");
app.use(methodOverride('_method'));


//db connection
require("./models/db.js");


//view engine
app.set("view engine","ejs");


//dotenv the env file
const dotenv = require("dotenv");
dotenv.config({path:"config.env"});
const port = process.env.PORT || 3010;


//built in middleware in express 
app.use(express.urlencoded({extended:true}));


//load assets
const path = require("path");
app.use("/css",express.static(path.resolve(__dirname,"assets/css")));


//routes controllers
const user_controller = require("./controllers/user_controller");
app.use("/",user_controller);   //add data
app.use("/my_college_data",user_controller);    //show data
app.use("/my_college_data/:id/add_student_info_edit",user_controller);  //edit button
app.use("/my_college_data/:id",user_controller);    //delete button


//server connection establishment
app.listen(3000,()=>{
    console.log(`server is running at ${port}`);
});