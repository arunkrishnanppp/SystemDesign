const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
let balance = 1000;
app.use(cookieParser());
// Simulated authentication middleware
app.use((req, res, next) => {
  if (!req.cookies.authenticated) {
    res.cookie('authenticated', true); // Fake authentication for demonstration
  }
  next();
});
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

app.post('/transfer', (req, res) => {
  console.log('Payment done');
  // res.send('Payment Done');
  const { to, amount } = req.body;
  balance -= parseInt(amount, 10);
  res.send(`<h1>Transferred $${amount} to ${to}. Your new balance is $${balance}.</h1>`);
});

app.listen(5001, () => console.log('Bank Server started at 5000'));
