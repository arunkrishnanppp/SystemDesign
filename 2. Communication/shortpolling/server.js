import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-Type, Accept');
  next();
});
app.listen(3000, () => {
  console.log('Short poling server is running of port 3000');
});

const data = [
  {
    name: 'Arun',
    age: 27
  }
];

const MESSAGESTACK = [];

app.get('/getResource', (req, res) => {
  console.log('Called getResource');
  res.send(data);
});

app.post('/addResource', (req, res) => {
  console.log('Called getResource');
  data.push(req.body);
  res.send(data);
});

app.post('/message', (req, res) => {
  console.log('Called sendMessage');
  console.log(req.body);
  MESSAGESTACK.push({ ...req.body, id: MESSAGESTACK.length + 1 });
  console.log(MESSAGESTACK);
  res.send(MESSAGESTACK);
});

app.get('/message', (req, res) => {
  res.send(MESSAGESTACK);
});
