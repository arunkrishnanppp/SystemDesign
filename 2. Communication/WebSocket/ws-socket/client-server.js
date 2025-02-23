import express from 'express';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'path';
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '/client')));
console.log('__dirname', __dirname);
app.get('/', (req, res) => {
  console.log('Controll comes in get /');
  res.sendFile(path.join(__dirname, '/client/client.html'));
});

app.listen(3000, () => {
  console.log('Client server started in 3000');
});
