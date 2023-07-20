const express = require('express');

const app = express();

app.use(express.json()); // for parsing application/json

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form method="POST" action="/product"><input type="text" name="product" /><input type="submit"  /></form>'
  );
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  res.send('<h1>Hello from Express.js app</h1>');
});

app.listen(3000, () => {
  console.log(`Server running on localhost:3000`);
});
