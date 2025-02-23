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
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  next();
});

app.use(bodyParser.json());
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../client/index.html'));
});

app.listen(4000, () => {
  console.log('Node server is running on port 4000');
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
