const express = require('express');
const { users } = require('./main');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).render('users', {
    pageTitle: 'Users Page',
    path: '/users',
    users,
  });
});

module.exports = router;
