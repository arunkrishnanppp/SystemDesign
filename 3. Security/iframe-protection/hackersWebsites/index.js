import express from 'express';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.get('/websiteone', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/websiteOne.html'));
});
const PORT = 5001;

app.listen(PORT);
