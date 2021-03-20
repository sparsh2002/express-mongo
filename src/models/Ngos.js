const mongoose = require("mongoose");

const employeeSchema2 = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    mnumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    pass:{
        type:String,
        required:true,
        unique:true,
    },
    
   
    add:{
        type:String,
        required:true
    }
    

});

const Ngo = new mongoose.model("Ngo",employeeSchema2);

module.exports = Ngo;