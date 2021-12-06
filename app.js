const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const saltRounds = 10;
const socketio = require('socket.io');
const http = require('http');
const formatMessage = require('./models/Message');
const app = express()


const hostname = '192.168.1.14';
const port = 8000;
const {mongoUrl} = require('./keys')

require('./models/Chat');  
require('./models/User')
require('./models/Post')
app.use(express.json())
app.use(require('./routes/authRoutes'))
app.use(require('./routes/postRoutes'))
app.use(require('./routes/userRoutes'))
// app.use(require('./routes/chatRoutes'))
const server = app.listen(port);
app.use(express.static('public'));
//const server = http.createServer(app);
const io = socketio(server);
const botName = 'ChatCord Bot';

io.on('connection', (socket) => {
  console.log('a user connected');
});
/*
io.on('connection', (socket) => {
  console.log("New socket connection: " + socket.id)
    socket.on('joinRoom', ({ username, room }) => {
      const user = userJoin(socket.id, username, room);
  
      socket.join(user.room);
  
      // Welcome current user
      socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));
  
      // Broadcast when a user connects
      socket.broadcast
        .to(user.room)
        .emit(
          'message',
          formatMessage(botName, `${user.username} has joined the chat`)
        );
  
      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    });
  
    // Listen for chatMessage
    socket.on('chatMessage', msg => {
      const user = getCurrentUser(socket.id);
  
      io.to(user.room).emit('message', formatMessage(user.username, msg));
    });
  
    // Runs when client disconnects
    socket.on('disconnect', () => {
      const user = userLeave(socket.id);
  
      if (user) {
        io.to(user.room).emit(
          'message',
          formatMessage(botName, `${user.username} has left the chat`)
        );
  
        // Send users and room info
        io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getRoomUsers(user.room)
        });
      }
    });
  });


/*
app.get('/', (req, res) => {

    res.send('Chat Server is running on port 3000')
    });

    io.on('connection', (socket) => {
    
    console.log('user connected')
    
    socket.on('join', function(userNickname) {
    
            console.log(userNickname +" : has joined the chat "  );
    
            socket.broadcast.emit('userjoinedthechat',userNickname +" : has joined the chat ");
        })
    
    
    socket.on('messagedetection', (senderNickname,messageContent) => {
    
           //log the message in console 
    
           console.log(senderNickname+" : " +messageContent)
    
          //create a message object 
    
          let  message = {"message":messageContent, "senderNickname":senderNickname}
    
           // send the message to all users including the sender  using io.emit() 
    
          io.emit('message', message )
    
          })
    
    socket.on('disconnect', function() {
    
            console.log(userNickname +' has left ')
    
            socket.broadcast.emit( "userdisconnect" ,' user has left')
    
    
    
    
        })    
    })
    
*/
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

/*
server.listen(port,()=>{

    console.log('Node app is running on port 3000')
    
    })
    */
    
app.listen(port,hostname,() =>{
console.log("server running"+port)
})
