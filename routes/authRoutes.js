const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const{jwtkey} =require('../keys')
const router = express.Router();
const User = mongoose.model('User')
const accountSid = 'AC43be5b8033cb98eec20f6ec69ff9cd39';
const authToken = '9842461e7761b0428935f9df29991ac8';
const client = require('twilio')(accountSid, authToken);
const SERVICE_PLAN_ID = 'ec7b8b0dd2174104a6dfb7057af6cee1';
const API_TOKEN = '08e87930c8174fa7907450897b48caf0';
const SINCH_NUMBER = '+447537455259';

const fetch = require('cross-fetch');

//signin
router.post('/sendCode',async (req,res)=>{
  const {phone} = req.body
  const code=Math.floor(Math.random()*90000) + 10000
  try{
    client.messages
  .create({
     body: 'Your verification code is '+code,
     from: '+19704425102',
     to: '+216'+phone
   })
  .then(message => {
    console.log(code);
    res.json(code)

  })
  }catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
})
//verifCode
router.post('/verifCode',async (req,res)=>{
  const {phone} = req.body
  const code1 = req.body.code1
  const code2 = req.body.code2
  const user = await User.findOne({phone})
  try{
  if(code1!=code2){
    res.json({
      found: "fail"
  })
  }
  else{
    if(!user){
      console.log("user not found");
      res.json({
        found: "user not found",
        userId: user._id
    })
  }
  else if(!user.name||!user.picture){
    console.log("must complete info",user._id);
    res.json({
      found: "must complete info",
      userId: user._id
  })
  }
  else{
    console.log(user._id);
    res.json({
      found: "found",
      userId: user._id
  })
    
  }
    
  }

}
  catch(err){
    return res.status(422).send({error :"error"})
}


})

//signup 
router.post('/signup',async(req,res)=>{
  try{
  const user = new User({
    name:req.body.name,
    phone:req.body.phone,
    picture:req.body.picture  
    })
    await user.save()
    .then(data=>{
       console.log(data)
       res.send(data)

    })
  }
  catch(err){
    return res.status(422).send({error :"must provide email or password"})
}
  
})

//update
router.post('/updateUser',(req,res)=>{
  User.findByIdAndUpdate(req.body._id,{
      name:req.body.name,
      picture:req.body.picture
      
  }).then(data=>{
      console.log(data)
      res.send(data)
  })
  .catch(err=>{
    console.log(err)
  })

})



router.post('/sendCode1',async (req,res)=>{
  const {phone} = req.body
  const code=Math.floor(Math.random()*90000) + 10000
  const sendSMS = {
    from: SINCH_NUMBER,
    to: [phone],
    body: 'Your verification code is '+code,
  };
 
  try{
    fetch('https://us.sms.api.sinch.com/xms/v1/' + SERVICE_PLAN_ID + '/batches', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + API_TOKEN,
  },
  body: JSON.stringify(sendSMS),
})
  .then(message => {
    console.log(code);
    res.json(code)
   
  })
  }catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
})



module.exports = router

