import WebSocket, { WebSocketServer } from 'ws';
import express from 'express';
// for modules we have to import from node:http
import { createServer } from 'node:http';

const app = express();
app.use((req, res, next) => {
  console.log(req);
  // console.log(req.headers);
  // console.log(res.headers);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

// const httpServer = createServer(app);
const server = app.listen(4000, () => {
  console.log('Express server is running on port 4000');
});
// const wss = new WebSocketServer({ server: server });
const wss = new WebSocketServer({ noServer: true });

// httpServer.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });

app.get('/health', (req, res) => {
  res.send('Server is up and running');
});

const onSocketPreError = (e) => {
  console.log('Socket pre error', r);
};
const onSocketPostError = (e) => {
  console.log('Socket post error', r);
};
server.on('upgrade', (req, socket, head) => {
  console.log('I got upgrade request');
  console.log(req.url);
  // console.log(socket);

  // console.log(req.headers);
  // console.log(req.rawHeaders);

  socket.on('error', (err) => onSocketPreError(err));
  //Perform any kind of auth
  // web use cookie/
  //from mobile app pass the token on req

  const authHeader = req.headers['auth'] || new URLSearchParams(req.url.split('?')[1]).get('token');
  if (!authHeader) {
    console.log('Unauthorized access, closing connection.');
    socket.write(
      'HTTP/1.1 401 Unauthorized\r\n' +
        'Content-Type: text/plain\r\n' +
        'Connection: close\r\n' +
        '\r\n' +
        'Unauthorized access'
    );
    socket.destroy(); // Close the socket immediately
    return; // Don't proce
  }
  wss.handleUpgrade(req, socket, head, (ws) => {
    socket.removeListener('error', onSocketPreError);
    wss.emit('connection', ws, req);
  });
});

wss.on('connection', (ws, req) => {
  console.log('Client Connected');

  console.log(req);
  // console.log(req.headers);

  console.log(ws);
  ws.on('error', onSocketPostError);
  ws.on('message', (message, isBinary) => {
    console.log('Message recived on server');
    let data;
    if (Buffer.isBuffer(message)) {
      data = message.toString(); // Converts buffer to string
      // console.log('received message:', data);
    } else {
      // console.log('received message:', data);
      data = message;
    }
    wss.clients.forEach((client, i) => {
      console.log('Connected clients', client);
      if (client != ws && client.readyState == WebSocket.OPEN) {
        client.send('server-message', data);
      }
    });
  });
  ws.on('close', (req, socket) => {
    console.log('Connection closed');
  });
});

// wss.on('connection', (ws) => {
//   ws.on('error', (err) => {
//     console.log(err);
//   });
//   ws.on('message', function message(data) {
//     console.log('received: %s', data);
//   });
// });
