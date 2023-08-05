const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/users');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', mainRoutes.router);
app.use('/users', userRoutes);

app.use('*', (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});
