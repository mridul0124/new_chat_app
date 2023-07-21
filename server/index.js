const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
app.use(cors());
const { Server } = require("socket.io");

const io = new Server(server,{
    cors: {
      origin: "http://localhost:3000",
      methods:["GET","POST"],
    }
  });

let users = [];

  io.on('connection', (socket) => {

    socket.on('new-user-joined',(data)=>{
      users.push(data);
      //console.log(data.userName);
      //console.log(JSON.stringify(users));
      io.emit('newUserResponse',users);
    });

    socket.on ('message',(data)=>{
      console.log(data);
      io.emit('receive',data)
    })

    socket.on('disconnect', () => {
    users = users.filter((user)=>user.socketID !== socket.id);
    io.emit('newUserResponse',users);
    socket.disconnect();
    });
  });

server.listen(3001, () => {
    console.log('Server Running');
  });

