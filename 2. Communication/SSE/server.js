import express from 'express';

const app = express();

const PORT = 4000;

app.use((req, res, next) => {
  // res.setHeader('Allow-Access-Control-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  next();
});

const sseClients = [];
app.get('/sse', (req, res) => {
  console.log('SSE request: ' + req);
  res.setHeader('Connection', 'Keep-Alive');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Content-Type', 'text/event-stream');

  res.write('data: Connection established \n\n');
  sseClients.push(res);
  // let count = 1;
  // const interval = setInterval(() => {
  //   res.write(`Message from server ${count++} \n\n`);
  // }, 1000);

  req.on('close', () => {
    console.log('Connection clo sed');
    // clearInterval(interval);
  });
});

app.get('/sse/push', (req, res) => {
  console.log(req.params);
  console.log(req.query);

  sseClients.forEach((client) => {
    client.write(`data: Message pushed from server ${req.query.message} \n\n`);
  });
  res.send('OK');
});
app.listen(PORT, () => console.log(' Server Running on Port ', PORT));
