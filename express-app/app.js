const express = require("express");
const morgan = require("morgan");
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.json()); // for parsing application/json

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, "public"))); // for serving static files

app.use(morgan("dev"));

app.use(shopRoutes);
app.use("/admin", adminData.router);

app.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "errors", "404.html"));
});

app.listen(3000, () => {
  console.log(`Server running on localhost:3000`);
});
