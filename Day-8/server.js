const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hello Students</h1>`);
});

app.post("/login", (req, res) => {
  // Logic
  //   console.log(req.body);
  if (req.body.email == "test@gmail.com" && req.body.password == "Hello@123") {
    res.send("Login ho gaya");
  } else {
    res.send("Invalid email or password");
  }
});

//Params

app.get("/posts/:loginId/:appId", (req, res) => {
  console.log(req.params.loginId);
  res.send("maine apko Id dedi");
});

app.get("/products", (req, res) => {
  console.log(req.query);
  res.send("name");
});

// https://jsonplaceholder.typicode.com/posts
//https://www.amazon.in/s?k=mobile&rh=n%3A91320596031&ref=nb_sb_noss

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
