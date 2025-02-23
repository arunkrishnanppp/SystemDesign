const express = require('express');
const fs = require('fs');
const https = require('https');
const http2 = require('http2'); // Import http2 module
const path = require('path');
const http2Express = require('http2-express-bridge');
console.log(__dirname);
const spdy = require('spdy');
const app = express();
// const app = http2Express(express);

const PORT = 8443;
// Load SSL certificates
app.use(express.static(__dirname + '/public'));
const options = {
  key: fs.readFileSync('server.key'), // Path to private key
  cert: fs.readFileSync('server.crt') // Path to certificate
  // allowHTTP1: true
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// app.listen(PORT, () => console.log('Server is runnning on ', PORT));

// https.createServer(options, app).listen(PORT, () => {
//   console.log(`HTTPS server running at https://localhost:${PORT}`);
// });

// const server = http2.createServer(options, app);

const server = spdy.createServer(options, app);
server.listen(PORT, () => console.log('Server is runnning on ', PORT));
