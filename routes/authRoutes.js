const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const{jwtkey} =require('../keys')
const router = express.Router();
const User = mongoose.model('User')
const accountSid = 'AC675cf2140159e4585164f17044b16f02';
const authToken = '457fab19ed12139e312f6e3819f35ca4';
const client = require('twilio')(accountSid, authToken);



//signup1 
router.post('/firstsignup',async(req,res)=>{
  const {phone} = req.body
  const user1 = await User.findOne({phone})
  const code=Math.floor(Math.random()*90000) + 10000
  try{
    if(!phone){
      return res.status(422).send({error :"must provide phone"})
  }
  if(!user1){
  const user = new User({
    name:req.body.name,
    phone:req.body.phone,
    picture:req.body.picture  
    })
    await user.save()
    .then(data=>{
      const token = jwt.sign({userId:user._id},jwtkey)
       console.log(data)
       res.send({token})

    })
  }
}
  catch(err){
    return res.status(422).send({error :"must provide email or password"})
}
  
})

//signin
router.post('/signin',async (req,res)=>{
  const {phone} = req.body
  const code=Math.floor(Math.random()*90000) + 10000
  if(!phone){
      return res.status(422).send({error :"must provide phone"})
  }
  const user = await User.findOne({phone})
  if(!user){
      return res.status(422).send({error :"user not found"})
  }
  try{
    client.messages
  .create({
     body: 'Your verification code is '+code,
     from: '+16692134239',
     to: '+216'+phone
   })
  .then(message => {
    console.log(message.sid);
    console.log(code);
  return res.sendStatus(code);
  })
  }catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
})
//verifCode
router.post('/verifCoder',async (req,res)=>{
  const code1 = req.body.code1
  const code2 = req.body.code2
 
  if(code1!=code2){
    return res.status(422).send({error :"wrong verification code"})
  }
  try{
    console.log("success");
    res.send("success");
}
  catch(err){
    return res.status(422).send({error :"error"})
}


})


module.exports = router

