import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import bodyParser from 'body-parser';
import Expense from './model/expense';


const app = express();
app.use(bodyParser.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/expense', async (req, res) => {
  try {
    const expenses = await Expense.get();

    res.setHeader('content-type', 'application/json');
    res.send(expenses);
  } catch (e) {
    // ValidationError
    res.status(e.status || 400).send(e.errors || { error: e.message || 'An error has occured' });
  }
});

app.post('/expense', async (req, res) => {
  const rawExpense: any = req.body;
  global.console.log('POST', rawExpense);

  try {
    const expense = await Expense.create(rawExpense);

    res.setHeader('content-type', 'application/json');
    res.send(expense);
  } catch (e) {
    global.console.error(e);
    // ValidationError
    res.status(e.status || 400).send(e.errors || { error: e.message || 'An error has occured' });
  }
});

app.delete('/expense/:id', async (req, res) => {
  global.console.log('DELETE', req.params.id);
  try {
    const expense = await Expense.remove(req.params.id);

    res.setHeader('content-type', 'application/json');
    res.send(expense);
  } catch (e) {
    // ValidationError
    res.status(e.status || 400).send(e.errors || { error: e.message || 'An error has occured' });
  }
});

const PORT = +process.env.PORT || 4000;
app.listen(PORT, 'localhost', () => global.console.log(`Server listening on port ${PORT}`));
