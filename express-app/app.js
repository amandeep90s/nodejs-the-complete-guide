const express = require('express');
const http = require('http');

const app = express();

app.use((req, res, next) => {
  console.log('I am inside the middleware');
  next();
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log(`Server running on localhost:3000`);
});
