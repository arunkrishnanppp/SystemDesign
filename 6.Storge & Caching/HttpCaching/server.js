import express from 'express';
import path from 'path';
import fs from 'fs';
const app = express();
app.use((req, res, next) => {
  console.log(req.url);
  // res.setHeader('Cache-Control', 'private, max-age=5,  must-revalidate');
  // res.setHeader('Cache-Control', 'no-cache');

  next();
});
app.use(
  express.static(path.resolve('./static'), {
    cacheControl: false,
    etag: false,
    lastModified: false
  })
);

app.get('/', (req, res) => {
  console.log(req.headers);
  const ifNoneMatch = req.headers['if-none-match'];
  console.log(ifNoneMatch);
  // Manually set the Cache-Control header
  // res.setHeader('Cache-Control', 'public, max-age=3700');

  // Manually set the ETag header

  if (ifNoneMatch && ifNoneMatch == 'askdhasdhasdh') {
    res.status(304).end();
  }
  res.setHeader('ETag', 'askdhasdhasdh');

  // Send the file
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/last-modified', (req, res) => {
  const filePath = path.resolve('public/example.txt');
  fs.stat(filePath, (err, stats) => {
    if (err) {
      return res.status(404).send('File not found');
    }

    const lastModified = stats.mtime.toUTCString();
    const clientLastModified = req.headers['if-modified-since'];

    // Compare the client's Last-Modified header with the server's Last-Modified time
    if (clientLastModified && new Date(clientLastModified) >= new Date(lastModified)) {
      return res.status(304).end(); // Not Modified
    }

    // Set Last-Modified header and serve the file
    res.setHeader('Last-Modified', lastModified);
    res.sendFile(filePath);
  });
});
app.listen(4000, () => {
  console.log('HTTP{ Caching APp started on  4000');
});
