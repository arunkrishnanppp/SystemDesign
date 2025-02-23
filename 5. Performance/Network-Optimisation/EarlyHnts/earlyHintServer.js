const express = require('express');
const app = express();
const path = require('path');
const spdy = require('spdy');
const http2 = require('http2');
const fs = require('fs');
// Middleware to serve static files
app.use(express.static(__dirname + '/public'));
// Route with early hints
app.get('/', (req, res) => {
  res.writeEarlHints({
    link: ['</script>; rel=preload; as=script', '</style.css>; rel=preload; as=style']
  });
  // Delay response to simulate heavy processing (for demonstration purposes)
  setTimeout(() => {
    res.sendFile(path.join(__dirname, 'index-earlyhint.html'));
  }, 1000); // 1-second delay
});
app.get('/script', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/script.js'));
});

// Start the server
const PORT = 8443;

// Load SSL certificates

const options = {
  key: fs.readFileSync('server.key'), // Path to private key
  cert: fs.readFileSync('server.crt') // Path to certificate
  // allowHTTP1: true
};

const server = spdy.createServer(options, app);
server.listen(PORT, () => console.log('Server is runnning on ', PORT));
