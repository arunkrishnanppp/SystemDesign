const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname);

app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', 'www.google.com');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4001');

  res.setHeader('Access-Control-Allow-Methods', 'PUT');

  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin'); //same-origin, same-site, cross-origin

  next();
});

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, '/server2js.js'));
});

app.post('/post', (req, res) => {
  res.send('OK');
});
app.put('/put', (req, res) => {
  res.send('OK');
});

app.listen(5001, () => console.log('Server 2 Running on port 5001'));
