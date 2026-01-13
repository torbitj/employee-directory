import express from 'express';
import employees from '#db/employees';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello employees!')
})

app.get('/employees', (req, res) => {
  res.send(employees)
})

export default app;