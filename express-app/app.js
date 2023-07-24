const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(express.json()); // for parsing application/json

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(shopRoutes);
app.use(adminRoutes);

app.listen(3000, () => {
  console.log(`Server running on localhost:3000`);
});
