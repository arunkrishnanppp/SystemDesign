import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';
// import App from '../dist/App.js';
import App from '../client/App.js';

// import path from 'path';

const app = express();
const PORT = 3000;
// const __dirname = dirname(fileURLToPath(import.meta.url));
// Serve static files
console.log(__dirname);
app.use(express.static(path.resolve(__dirname, '../dist')));

// Handle all routes with SSR

app.get('/js/:bundleName', (req, res) => {
  console.log(req.params);
  res.sendFile(path.resolve(__dirname, `../dist/${req.params.bundleName}`));
});
app.get('/full-hydration', (req, res) => {
  const appString = renderToString(<App />);
  console.log(appString);

  fs.readFile(path.resolve(__dirname, '../dist/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Internal Server Eerror');
    }
    console.log(data);
    const updatedData = data
      .replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
      .replace('</body>', `<script src="../js/full.client.js"></script></body>`);
    console.log(updatedData);
    return res.send(updatedData);

    // data.replace('</body>', `<script src="../dist/full.client.js"></script></body>`);
    // return res.send(data);
  });
});

app.get('/partial', (req, res) => {
  const appString = renderToString(<App />);
  console.log(appString);

  fs.readFile(path.resolve(__dirname, '../dist/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Internal Server Eerror');
    }
    console.log(data);
    const updatedData = data
      .replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
      .replace('</body>', `<script src="../js/partial.client.js"></script></body>`);
    console.log(updatedData);
    return res.send(updatedData);

    // data.replace('</body>', `<script src="../dist/full.client.js"></script></body>`);
    // return res.send(data);
  });
});
app.get('/progressive', (req, res) => {
  const appString = renderToString(<App />);
  console.log(appString);

  fs.readFile(path.resolve(__dirname, '../dist/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Internal Server Eerror');
    }
    console.log(data);
    const updatedData = data
      .replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
      .replace('</body>', `<script src="../js/progressive.client.js"></script></body>`);
    console.log(updatedData);
    return res.send(updatedData);

    // data.replace('</body>', `<script src="../dist/full.client.js"></script></body>`);
    // return res.send(data);
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
