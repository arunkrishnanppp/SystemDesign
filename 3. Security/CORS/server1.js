const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client1.html'));
});
app.listen(4001, () => console.log('Server 1 Running on port 4001'));
