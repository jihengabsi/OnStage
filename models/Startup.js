const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const startupSchema = new mongoose.Schema({
    nameStartup:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    users:[{type:ObjectId,ref:"User"}]
},{timestamps:true})

mongoose.model("Startup",startupSchema);