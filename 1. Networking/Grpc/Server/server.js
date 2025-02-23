import express from 'express';
import bodyParser from 'body-parser';
import grpc from 'grpc';
import protoLoader from '@grpc/proto-loader';
const PROTO_PATH = './customers.proto';

const customers = [
  {
    id: 1,
    name: 'Arun',
    age: 27,
    address: 'Kadannappalli'
  }
];

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true
});

const customerProto = grpc.loadPackageDefinition(packageDefinition);
// console.log(customerProto);

const server = new grpc.Server();
server.addService(customerProto.CustomerService.service, {
  GetAll: (call, callback) => {
    console.log('Calls comes on get All');
    console.log(customers);
    callback(null, { customers: customers });
  },
  GetCustomer: (call, callback) => {
    const customer = customers.find((customer) => customer.id == call.request.id);
    if (!customer) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: `Customer with ID ${call.request.id} not found`
      });
    }

    callback(null, customer);
  },
  AddCustomer: (call, callback) => {
    console.log('Insert Grpc function');
    console.log(call.request);
    const newCustomer = { ...call.request, id: customers.length + 1 };

    console.log('New Customer is', newCustomer);
    customers.push(newCustomer);
    callback(null, newCustomer);
  },
  UpdateCustomer: (call, callback) => {
    console.log('call in UpdateCustomer');
    console.log(call.request);
    const index = customers.findIndex((customer) => customer.id == call.request.id);
    if (index == -1) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: `Customer with ID ${call.request.id} not found`
      });
    }
    customers[index] = { ...customers[index], ...call.request.customer };

    callback(null, customers[index]);
  },
  RemoveCustomer: (call, callback) => {
    const index = customers.findIndex((customer) => customer.id == call.request.id);
    if (index == -1) {
      return callback({
        code: grpc.status.NOT_FOUND,
        message: `Customer with ID ${call.request.id} not found`
      });
    }
    customers.splice(index, 1);
    callback(null, {});
  }
});

server.bind('127.0.0.1:4000', grpc.ServerCredentials.createInsecure());
server.start();

/*const app = express();

app.use(bodyParser.json());
const PORT = 4000;
app.listen(PORT, () => {
  console.log('Grpc Server is booted in PORT', PORT);
});


*/
