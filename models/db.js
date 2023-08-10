const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/my_college",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("mongodb connected successfully"));
require("./student_model.js");