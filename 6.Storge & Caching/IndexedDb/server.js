const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
let tasks = []; // Mock server-side database

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // A
  next();
});
// Fetch all tasks from the server
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Sync tasks with the server
app.post('/tasks/sync', (req, res) => {
  const clientTasks = req.body;
  tasks = [...tasks, ...clientTasks.filter((task) => !tasks.find((t) => t.id === task.id))];
  res.status(200).send({ message: 'Tasks synced successfully', tasks });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
