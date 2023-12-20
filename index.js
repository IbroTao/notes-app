const express = require("express");
const { mongoConnect } = require("./configs/mongoConnect");
const { User } = require("./models/User");
const { Note } = require("./models/Notes");
const { hashSync } = require("bcryptjs");
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
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.create({
    email: email,
    password: hashSync(password, 10),
  });
  res.status(200).json({
    success: true,
    user: user,
  });
});

app.post("/login", async (req, res) => {
  let user = await User.findOne(req.body);
  if (!user) {
    res.status(404).json({
      success: false,
      message: "No user found",
    });
  } else {
    res.status(200).json({
      success: true,
      user: {
        email: user.email,
      },
      message: "User found",
    });
  }
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
