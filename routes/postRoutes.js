const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post =  mongoose.model("Post")
/**
 * @swagger
 * /allpost:
 *  get:
 *    description: Use to get all posts
 *    responses:
 *      '200':
 *        description: A successful response
 */

router.get('/allpost',(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .populate("comments.postedBy","_id name")
    .sort('-createdAt')
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
    
})
/**
 * @swagger
 * /searchPosts:
 *  post:
 *    description: Use to search posts
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/searchPosts',(req,res,next)=>{
    const searchedField = req.body.name;
    Post.find({$or: [
        {
      $and: [{title:{$regex: `${searchedField}`,$options: '$i'},description:{$regex: `${searchedField}`,$options: '$i'}}]
    
    } ]
})
        .then(posts=>{
            res.send({posts});
        })

})
/**
 * @swagger
 * /createpost:
 *  post:
 *    description: Use to add a post
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/createpost',async(req,res)=>{
    const {title,description,pic} = req.body 
    if(!title ){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    try{
    const post = new Post({
        title:req.body.title,
        description:req.body.description,
        photo:req.body.photo,
        postedBy:req.body.postedBy
    })
    await post.save()
    .then(result=>{
        console.log(result)
        res.json({post:result})
    })
}
catch(err){
    return res.status(422).send({err})
}
})
/**
 * @swagger
 * /like:
 *  put:
 *    description: Use to like a post
 *    responses:
 *      '200':
 *        description: A successful response
 */

router.put('/like',(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.body.user_id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
/**
 * @swagger
 * /unlike:
 *  put:
 *    description: Use to unlike a post
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/unlike',(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.body.user_id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
/**
 * @swagger
 * /getComments:
 *  post:
 *    description: Use to get all comments of a post
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/getComments',async(req,res)=>{
    const {_id} = req.body
    const post = await Post.findOne({_id})
    try{
      res.json({
      comments: post.comments
  })
    }
    catch(err){
    return res.status(422).send({error :"error"})
}
})
/**
 * @swagger
 * /addComment:
 *  put:
 *    description: Use to add a comment
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/addComment',(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.body.user_id,
        username:req.body.username,
        userpicture:req.body.userpicture
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.postedBy","_id name")
    .populate("postedBy","_id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
           console.log(result)
            res.json(result)
        }
    })
})


module.exports = router