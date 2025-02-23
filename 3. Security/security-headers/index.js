const express = require('express');
const path = require('path');

const app = express();

const redirectToHttps = (req, res, ext) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
};
app.use(redirectToHttps);
app.use((req, res, next) => {
  res.removeHeader('X-Powered-By');
  res.setHeader('Referrer-Policy', 'origin');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  next();
});
app.get('/getindex', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/getAnother', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(5001, () => console.log('Security Header Server Started'));
