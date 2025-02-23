const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sha256 = require('crypto-js/sha256');
const session = require('express-session');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let balance = 1000;
app.use(cookieParser());

/**
 
CSRF Mitgatons 
1. Using CSRF Token
 */
// Simulated authentication middleware
function generateRandomCSRF() {
  return sha256('ARUN' + Math.random(32)).toString();
}

// Configure session middleware
app.use(
  session({
    secret: 'your_secret_key', // Replace with a secure, random key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure: true in production if using HTTPS
  })
);

// Middleware to generate and validate CSRF tokens
app.use((req, res, next) => {
  if (!req.session.csrfToken) {
    req.session.csrfToken = generateRandomCSRF();
  }
  next();
});

// Middleware to validate CSRF token on POST requests
function validateCsrfTokenFromBody(req, res, next) {
  console.log('Validating validateCsrfToken');
  const csrfTokenFromBody = req.body._csrf;
  console.log('csrfTokenFromBody', csrfTokenFromBody);

  console.log('Token In req', req.session.csrfToken);
  if (csrfTokenFromBody && csrfTokenFromBody === req.session.csrfToken) {
    next();
  } else {
    res.status(403).send('Invalid CSRF token');
  }
}

app.get('/transfer', (req, res) => {
  console.log('Payment done');
  // res.send('Payment Done');
  const { to, amount } = req.body;
  balance -= parseInt(amount, 10);
  res.send(`<h1>Transferred $${amount} to ${to}. Your new balance is $${balance}.</h1>`);
});

app.get('/', (req, res) => {
  const html = `
  <html>
  <head>
  
  </head>
  <body>
  <h1>Trusted Banking Sitess</h1>
  </body>
  
  </html>
  `;

  res.send(html);
});

app.get('/make-payment', (req, res) => {
  const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Bank Payment Page Page</title>
</head>
<body>
    <h1>Click anywhere to win a prize!</h1>
    <form action="/transfer" method="POST">
    <input type="hidden" name="_csrf" value="${req.session.csrfToken}"/>
    <label for="to"> Transfer to</label>
    <input id="to" name='to'/>
    <label for="amount"> Amount</label>
    <input id="amount"  name="amount"/>
    <button type="submit">Transfer Money</button>
    </form>
</body>
</html>`;
  res.send(html);
});

app.post('/transfer', validateCsrfTokenFromBody, (req, res) => {
  console.log('Payment done');
  const { to, amount } = req.body;
  balance -= parseInt(amount, 10);
  res.send(`<h1>Transferred $${amount} to ${to}. Your new balance is $${balance}.</h1>`);
});

app.listen(5003, () => console.log('Bank Server started at 5003'));
