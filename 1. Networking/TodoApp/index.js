import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const TODOS = [{ id: 1, task_name: 'Wakup', description: 'Wakup Early' }];
const PORT = 4000;
app.listen(4000, (req, res) => {
  console.log('server is running on port', 4000);
});

app.get('/todos', (req, res) => {
  res.send(TODOS);
});

app.get('/todos/:id', (req, res) => {
  const todoToDelete = Number(req.params.id);
  const index = TODOS.findIndex((todo) => todo.id == todoToDelete);
  if (index == -1) return res.status(404).send('Not Found');

  res.send(TODOS[index]);
});

app.post('/todos', (req, res) => {
  console.log(req.body);
  console.log(typeof req.body);

  const newId = TODOS.length > 0 ? TODOS[TODOS.length - 1].id + 1 : 1;
  TODOS.push({ id: newId, ...req.body });
  res.send(JSON.stringify(TODOS));
});

app.delete('/todos/:id', (req, res) => {
  console.log(req.params);
  const todoToDelete = Number(req.params.id);

  console.log(todoToDelete);
  if (TODOS.length == 0) return res.status(404).send('Todos is emoty');

  // const found = TODOS.some((todo) => todo.id == todoToDelete);
  // console.log(found);
  // if (!found) res.status(404).send('Not Found');

  const index = TODOS.findIndex((todo) => todo.id == todoToDelete);
  if (index == -1) return res.status(404).send('Not Found');
  const toto = TODOS[index];
  TODOS.splice(index, 1);

  console.log(toto);
  res.status(200).send(toto);
});

app.put('/todos/:id', (req, res) => {
  console.log(req.params);
  const todoToUpdate = Number(req.params.id);

  // const found = TODOS.some((todo) => todo.id == todoToDelete);
  // console.log(found);
  // if (!found) res.status(404).send('Not Found');

  const index = TODOS.findIndex((todo) => todo.id == todoToUpdate);
  if (index == -1) return res.status(404).send('Not Found');
  TODOS[index] = { id: TODOS[index].id, ...req.body };

  res.status(200).send(TODOS[index]);
});

app.patch('/todos/:id', (req, res) => {
  console.log(req.params);
  const todoToUpdate = Number(req.params.id);

  // const found = TODOS.some((todo) => todo.id == todoToDelete);
  // console.log(found);
  // if (!found) res.status(404).send('Not Found');

  const index = TODOS.findIndex((todo) => todo.id == todoToUpdate);
  if (index == -1) return res.status(404).send('Not Found');
  console.log(req.body);
  TODOS[index] = { ...TODOS[index], ...req.body };

  res.status(200).send(TODOS[index]);
});
app.head('/todos', (req, res) => {
  res.header['arun'] = 'xx';
  console.log(res.header);
});
