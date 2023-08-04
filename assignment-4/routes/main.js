const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
  res.render('main', {
    pageTitle: 'Assignment 4',
    path: '/',
  });
});

router.post('/', (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect('/users');
});

module.exports = { router, users };
