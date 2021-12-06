const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name:String,
    surname:String,
    email:{
       type: String,
       unique:true,
    },
    password:{
        type:String,
    },
    phone:{
        type: String,
        unique:true,
        required:true
     },
    startupName:String,
    picture:String

})


userSchema.pre('save',function(next){
    const user = this;
    if(!user.isModified('password')){
        return next()
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
     bcrypt.hash(user.password,salt,(err,hash)=>{
         if(err){
             return next(err)
         }
         user.password = hash;
         next()
     })

    })

})



mongoose.model('User',userSchema);