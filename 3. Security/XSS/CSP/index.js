import express from 'express';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const PORT = 4000;
app.use((req, res, next) => {
  res.set(
    'Content-Security-Policy',
    // "default-src 'self'; script-src 'self' 'nonce-416d1177-4xd12-4e3b-b7c9-f6c409789fb8' 'sha256-v5AgTYdwnrpCSzJhphkaWFvyfM8Ai67ULz+/3riiTJw=' 'unsafe-inline';"
    // "default-src 'self'; script-src 'self';"
    "default-src 'self'; script-src 'self' 'sha256-W9aqmGOXdmf5F7E+sft4AfKFVvmVr5/snJ6ZhuisMAA=' '*google.com' 'strict-dynamic';"

    // "default-src 'self'; script-src 'self'  'unsafe-inline';"
  );
  next();
});
app.use(express.static(path.join(__dirname, '/')));
app.get('/', (req, res) => {
  // console.log(path.resolve('/foo', './bar', 'baz'));
  // console.log(path.resolve('index.html'));
  // console.log(path.join(__dirname, 'index.html'));

  // // res.sendFile(path.resolve(__dirname, 'index.html'));

  // res.set('Content-Security-Policy', `default-src 'self'; script-src 'self';`);
  res.sendFile(path.resolve('index.html'));
});
app.listen(PORT, () => console.log('CSP SERVER STARTED IN ', PORT));
