import express from 'express';
import cookieParser from 'cookie-parser';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const app = express();
/*
console.log('Import meta url', import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log('__dirname', __dirname);
console.log('path.resolve()', path.resolve());
*/

const data = {
  films: [{ name: 'marco' }],
  books: [{ name: 'Book1' }],
  songs: [{ name: 'Song1' }]
};
app.use(cookieParser());
app.use(express.static(path.resolve('./client')));
app.get('/', function (req, res) {
  res.send('Srver is up');
});

app.get('/setPreference', function (req, res) {
  console.log(req.cookies);
  res.send('OK');
});
app.get('/getRecommendation', function (req, res) {
  console.log(req.cookies);
  const preference = req.cookies.preference;
  console.log(preference, 'preference');
  res.json(data[preference]);
});
app.get('/login', (req, res) => {
  console.log('Login Route');
  res.cookie('user-id', 'sadasdasdffadf', { httpOnly: true, secure: true });
  res.sendFile(path.resolve('./client/index.html'));
  // res.send('Login succssfull');
});

//Logn Sesson Management Example

app.get('/user-login', (req, res) => {
  const sessionId = 123456;
  res.cookie('session_id', sessionId, { httpOnly: true, maxAge: 1000 * 3 });
  const html = `
      <html>
      <head>
      
      </head>
      <body>
      <h1>Login Successfull </h1>
      <a href="/dashboard">
       <button>Go To dashboard</button>
      </a>
     
      </body>
      </html>
      `;
  res.send(html);
});
app.get('/dashboard', (req, res) => {
  const sessionId = req.cookies.session_id;
  if (sessionId) {
    res.send(`Welcome back! Your session ID is: ${sessionId})`);
  } else {
    res.status(401).send('Unauthorized: No session ID found. Please log in.');
  }
});
app.get('/logout', (req, res) => {
  res.clearCookie('session_id');
  res.send('Logged out! Session ID cleared.');
});

app.listen(4000, () => console.log('Cookie server is running on 4000'));
