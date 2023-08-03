const express = require("express");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(express.json()); // for parsing application/json

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, "public"))); // for serving static files

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "errors", "404.html"));
});

app.listen(3000, () => {
  console.log(`Server running on localhost:3000`);
});
