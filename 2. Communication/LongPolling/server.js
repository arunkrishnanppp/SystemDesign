import express from 'express';
import bodyParser from 'body-parser';
// import fs from 'fs';
import path from 'path';
const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Longg Polling Server is runing on Port 3000');
});

let data = 'INITIAL DATA';
const pollingClients = [];

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'));
});
app.get('/data', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  if (req.query.lastData === data) {
    pollingClients.push(res);
  } else {
    res.send(data);
  }
});

app.get('/updateData/:value', (req, res) => {
  data = req.params.value;

  while (pollingClients.length > 0) {
    pollingClients.pop().send(data);
  }
  res.send('OK');
});
