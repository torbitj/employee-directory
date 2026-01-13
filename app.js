import express from 'express';
import employees from '#db/employees';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello employees!')
})

app.get('/employees', (req, res) => {
  res.send(employees)
})

app.get('/employees/:id', (req, res) => {
  const { id } = req.params;
  const idNum = Number(id);
  const foundEmployee = employees.find((employee) => employee.id === idNum)

  if (foundEmployee) {
    res.send(foundEmployee)
  } else {
    res.status(404)
    res.send(`No employee with ID# ${id}`);
  }
})

export default app;