const mongoose = require("mongoose");

const custSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
    },
    email : {
        type: String,
        required:true,
    },
    age : {
        type:Number,
        required : false,
    }
});

const cust = mongoose.model("cust",custSchema);

module.exports = cust;
