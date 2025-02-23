import express from 'express';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

console.log(import.meta.url);
console.log(fileURLToPath(import.meta.url));
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

const app = express();
app.use(express.static(path.join(__dirname, '/public')));

app.get('/iframesiteone', (req, res) => {
  console.log('Controll here');
  // res.setHeader('X-Frame-Options', 'deny');
  // res.setHeader('X-Frame-Options', 'sameorigin');
  // res.setHeader('Content-Security-Policy', "frame-ancestors 'none'");

  res.sendFile(path.join(__dirname, '/public/iframewebsiteone.html'));
});
app.listen(5002, (req, res) => {
  console.log('Iframe server is on 5002');
});
