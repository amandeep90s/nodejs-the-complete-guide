const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('This is middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('This is middleware 2');
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Hello, this is my second assignment</h1>');
});

app.get('/users', (req, res) => {
  const users = '<ul><li>John Doe</li><li>John Wick</li></ul>';
  res.send(users);
});

app.listen(3000, () => {
  console.log('App is running on localhost:3000');
});
