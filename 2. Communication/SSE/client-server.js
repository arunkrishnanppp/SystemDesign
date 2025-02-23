import express from 'express';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);
const app = express();
app.use(express.static(path.join(__dirname, '/')));
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client.html'));
});

app.listen(PORT, () => console.log('Client Server Running on Port ', PORT));
