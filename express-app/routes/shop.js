const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  res.send('<h1>Hello from Express.js app</h1>');
});

module.exports = router;
