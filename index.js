const express = require("express");
const { mongoConnect } = require("./configs/mongoConnect");
const { User } = require("./models/User");
const { Note } = require("./models/Notes");
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTML Endpoints
app.get("/", (req, res) => {
  res.sendFile("pages/index.html", {
    root: __dirname,
  });
});

app.get("/signup", (req, res) => {
  res.sendFile("pages/signup.html", {
    root: __dirname,
  });
});

app.get("/login", (req, res) => {
  res.sendFile("pages/login.html", {
    root: __dirname,
  });
});

// Endpoints for Notes APIs
app.post("/signup", (req, res) => {
  res.sendFile("pages/login.html", {
    root: __dirname,
  });
});

app.post("/login", (req, res) => {
  res.sendFile("pages/login.html", {
    root: __dirname,
  });
});

app.post("/addnotes", (req, res) => {
  res.sendFile("pages/login.html", {
    root: __dirname,
  });
});

app.post("/getnotes", (req, res) => {
  const { userToken } = req.body;
  res.sendFile("pages/login.html", {
    root: __dirname,
  });
});

app.post("/deletenotes", (req, res) => {
  res.sendFile("pages/login.html", {
    root: __dirname,
  });
});

const port = process.env.PORT;

const runServer = (port) => {
  mongoConnect()
    .then((res) => {
      app.listen(port);
      console.log("MonogoDB Connected Successfully");
      console.log(`App is running on http://localhost:${port}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

runServer(port);
