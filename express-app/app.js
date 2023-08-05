const express = require('express');
const morgan = require('morgan');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/errors');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json()); // for parsing application/json

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'public'))); // for serving static files

app.use(morgan('dev'));

app.use('/', shopRoutes);
app.use('/admin', adminRoutes);

app.use('*', errorController.get404);

app.listen(3000, () => {
  console.log(`Server running on localhost:3000`);
});
