const express = require("express");
const path = require("path");

const homeRoutes = require("./routes/home.route");
const userRoutes = require("./routes/users.route");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRoutes);
app.use("/users", userRoutes);

app.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});
