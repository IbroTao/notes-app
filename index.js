const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/signup", (req, res) => {
  res.send("User signed up");
});

app.get("/login", (req, res) => {
  res.send("User logged in");
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
