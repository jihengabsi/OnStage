const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const{jwtkey} =require('../keys')
const router = express.Router();
const User = mongoose.model('User')
const accountSid = 'AC8fecfeedbbcae881405a99446b76b7e6';
const authToken = 'd4c0743a12cec225061b0e03c3709320';

let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({

  service:'gmail',
  auth: {
      user: 'onstageinterx@gmail.com',
      pass: 'onStageInterX2022'
  }
});


/**
 * @swagger
 * /sendCode:
 *  post:
 *    description: Use to signin
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/sendCode',async (req,res)=>{
  const {email} = req.body
  const code=Math.floor(Math.random()*90000) + 10000
  let mailOptions = {
    from: 'onstageinterx@gmail.com',
    to: email,
    subject: 'Verification Code',
    text: 'Confirm your email address! Verification code:'+code
};
transporter.sendMail(mailOptions,(error,info)=>{
  if (error) {
      console.log(error);
  } else {
    console.log(code);
    res.json(code)
  }
});
    
})
/**
 * @swagger
 * /verifCode:
 *  post:
 *    description: Use to verif code
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/verifCode',async (req,res)=>{
  const {email} = req.body
  const code1 = req.body.code1
  const code2 = req.body.code2
  const user = await User.findOne({email})
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
        userId: "null"
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
      userId: user._id,
      picture:user.picture,
      name:user.name
  })
    
  }
    
  }

}
  catch(err){
    return res.status(422).send({error :"error"})
}


})

/**
 * @swagger
 * /signup:
 *  post:
 *    description: Use to signup
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/signup',async(req,res)=>{
  try{
  const user = new User({
    name:req.body.name,
    email:req.body.email,
    picture:req.body.picture  
    })
    await user.save()
    .then(data=>{
       console.log(data)
       res.send(data)

    })
  }
  catch(err){
    return res.status(422).send(err)
}
  
})

/**
 * @swagger
 * /updateUser:
 *  post:
 *    description: Use to update user's info
 *    responses:
 *      '200':
 *        description: A successful response
 */
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






module.exports = router

