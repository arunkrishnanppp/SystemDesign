import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import grpcClient from './grpcclinet.js';

app.use(bodyParser.json());
const PORT = 4001;
app.listen(PORT, () => {
  console.log('Grpc Clients is booted in PORT', PORT);
});

app.get('/customers', (req, res) => {
  console.log(
    grpcClient.GetAll(null, (err, data) => {
      console.log(err);
      console.log(data);
      res.send(data);
    })
  );
});

app.get('/customers/:id', (req, res) => {
  console.log(req.params);

  grpcClient.GetCustomer({ id: Number(req.params.id) }, (err, data) => {
    console.log('Error is', err);
    console.log(data);
    res.send(err || data);
  });
});

app.post('/customers', (req, res) => {
  console.log(req.params);

  grpcClient.AddCustomer(req.body, (err, data) => {
    console.log('Error is', err);
    console.log(data);
    res.send(err || data);
  });
});

app.delete('/customers/:id', (req, res) => {
  console.log(req.params);

  grpcClient.RemoveCustomer({ id: Number(req.params.id) }, (err, data) => {
    console.log('Error is', err);
    console.log(data);
    res.send(err || data);
  });
});

app.put('/customers/:id', (req, res) => {
  console.log(req.params);

  grpcClient.UpdateCustomer({ id: Number(req.params.id), customer: req.body }, (err, data) => {
    console.log('Error is', err);
    console.log(data);
    res.send(err || data);
  });
});
