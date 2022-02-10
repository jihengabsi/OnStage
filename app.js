const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const saltRounds = 10;
const socketio = require('socket.io');
const http = require('http');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express()
var multer, storage, path, crypto;
multer = require('multer')
path = require('path');
crypto = require('crypto');

const hostname = '192.168.1.15';
const port = 8083;
const {mongoUrl} = require('./keys')

require('./models/Chat');  
require('./models/User')
require('./models/Post')
require('./models/Todo')
require('./models/Startup')
app.use(express.json())
app.use(require('./routes/authRoutes'))
app.use(require('./routes/postRoutes'))
app.use(require('./routes/userRoutes'))
app.use(require('./routes/chatRoutes'))
app.use(require('./routes/todoRoutes'))
app.use(require('./routes/startupRoutes'))
app.use(express.static('public'));
const Chat =  mongoose.model("Chat")

const SocketServer = require('websocket').server
const server = http.createServer((req, res) => {})
server.listen(3000, ()=>{
  console.log("Listening on port 3000...")
})
var fs = require('fs');
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "OnStage API",
      description: "Onstage API Information",
      contact: {
        name: "interX"
      },
      servers: ["http://192.168.1.13:8083"]
    }
  },
  // ['.routes/*.js']
  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


wsServer = new SocketServer({httpServer:server})

const connections = []

wsServer.on('request', (req) => {
    const connection = req.accept()
    console.log('new connection')
    connections.push(connection)

    connection.on('message', (mes) => {
        connections.forEach(element => {
            if (element != connection){
                element.sendUTF(mes.utf8Data)
            
            }
          
               
        })
        var msg = JSON.parse(mes.utf8Data);
        const chat = new Chat({
          sender:msg.sender,
          receiver:msg.receiver,
          message:msg.message,
        })
         chat.save()
          console.log(chat)
    })

    connection.on('close', (resCode, des) => {
        console.log('connection closed')
        connections.splice(connections.indexOf(connection), 1)
    })

})

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
