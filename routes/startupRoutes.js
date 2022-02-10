
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Startup =  mongoose.model("Startup")

/**
 * @swagger
 * /allStartup:
 *  get:
 *    description: Use to get all startups
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/allStartup',(req,res)=>{
    Startup.find()
    .then((startups)=>{
        res.json({startups})
    }).catch(err=>{
        console.log(err)
    })
    
})
/**
 * @swagger
 * /rate:
 *  put:
 *    description: Use to rate a startup
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/rate',(req,res)=>{
    const rate = {
        rate:req.body.rate,
        postedBy:req.body.user_id,
    }
    Startup.findByIdAndUpdate(req.body._id,{
        $push:{rates:rate}
    },{
        new:true
    })
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
           console.log(result)
            res.json(result)
        }
    })
  
  })
  /**
 * @swagger
 * /addStartup:
 *  post:
 *    description: Use to add a startup
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/addStartup',async(req,res)=>{
    try{
        const startup = new Startup({
             name: req.body.name,
            logo: req.body.logo,
            rate: req.body.rate,
        
        })
        await startup.save()
        .then(result=>{
            console.log(result)
            res.json({startup:result})
        })
 }catch(err){
        return res.status(422).send({err})
    }
    })



    
module.exports = router