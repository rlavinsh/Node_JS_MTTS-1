const express = require("express");

const app = express();

// Route Level wala Middleware

function middle1(req, res, next) {
  console.log("Middleware1");
  next();
}

function middle2(req, res, next) {
  console.log("Middleware 2");
  next();
}

app.use(middle1);
app.use(middle2);

function checkMyAge(req, res, next) {
  const age = 16;

  if (age >= 18) {
    next();
  } else {
    return res.status(400).send("Not Eligible");
  }
}

app.get("/", (req, res) => {
  res.send("welcome to my Homepage");
});

app.get("/dashboard", checkMyAge, (req, res) => {
  res.send("Welcome to my Dashboard");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
