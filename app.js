const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const saltRounds = 10;

const app = express()


const hostname = '127.0.0.1';
const port = 3000;
const {mongoUrl} = require('./keys')


require('./models/User')
require('./models/Post')
app.use(express.json())
app.use(require('./routes/authRoutes'))
app.use(require('./routes/postRoutes'))
app.use(require('./routes/userRoutes'))
// app.use(require('./routes/chatRoutes'))





mongoose.connect(mongoUrl,{
    useFindAndModify: false,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})



app.listen(port,hostname,() =>{
console.log("server running"+port)
})
