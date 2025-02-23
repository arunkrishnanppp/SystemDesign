import { Server } from 'socket.io';
import express from 'express';
import bodyParser from 'body-parser';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { instrument } from '@socket.io/admin-ui';
import path from 'path';
const app = express();
app.use((req, res, next) => {
  // console.log(req);
  console.log(req.method, req.url);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204); // Handle preflight requests
  }
  if (req.path.startsWith('/admin')) {
    next('route'); // Skip to the next middleware for '/admin'
  } else {
    next();
  }
});
const httpServer = createServer(app);

app.use(bodyParser.json());
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../client/index.html'));
});

const io = new Server(httpServer, {
  cors: {
    // origin: ['http://localhost:4000', 'https://admin.socket.io'],
    origin: '*',
    credentials: true
  }
});

/*
For creating seperate namespace we can use io.off('/user) it will create new name space and every activity can be performed 

*/
const userIo = io.of('/user');
/*Middle ware for userIo  */
userIo.use((socket, next) => {
  if (socket.handshake.auth.token) {
    socket.username = getAndAddUserInfo(socket.handshake.auth.token);
    next();
  } else {
    next(new Error('Please add token'));
  }
});

const getAndAddUserInfo = (token) => {
  return token;
};

userIo.on('connection', (socket) => {
  console.log('User Name space got connection request', socket.username);
});
io.on('connection', (socket) => {
  console.log('User connected to socket', socket.id);
  // socket.on('chat message', (message) => {
  //   console.log('Message received from socket', message);
  //   // io.emit('receive-message', message);
  //   socket.broadcast.emit('receive-message', message);
  // });

  socket.on('chat message', (message, room) => {
    console.log('Message received from socket', message);
    if (room == '') {
      socket.broadcast.emit('receive-message', message);
    } else {
      socket.to(room).emit('receive-message', message);
    }
    // io.emit('receive-message', message);
  });

  socket.on('chat message with ack', (message, room, callback) => {
    console.log('chat message with ack received', message);
    if (room == '') {
      socket.broadcast.emit('receive-message', message);
    } else {
      socket.to(room).emit('receive-message', message);
    }
    setTimeout(() => {
      callback({
        status: 'ok'
      });
    }, 6000);
    io.emit('receive-message', message);
  });

  socket.on('join-room', (room, callback) => {
    console.log('Joining room');
    socket.join(room);
    callback();
  });
  socket.on('ping', (count) => {
    console.log(count);
  });
});

instrument(io, {
  auth: false
  // mode: 'development'
});

httpServer.listen(3000, () => {
  console.log('Node server is running on port 3000');
});

//Socket

/* 
    io.emit will send message to all connected clients and
    socket.broadcast.emit() will send messages to all other connected clients
    */

/*
      Socket rooms
      Each connection created is in a room with it self , if we need to send a privat message we need to send the 
      room of the receiver 


    */
