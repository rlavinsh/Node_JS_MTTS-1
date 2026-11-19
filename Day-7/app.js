const express = require("express");
// mein ek app naam ka instance crete karunga
const app = express();

app.get("/student", (req, res) => {
  res.send("All Students Detail");
});

app.post("/student", (req, res) => {
  res.send("Student Created Successfully");
});

app.listen(3000, () => {
  console.log("mera server 3000 port par run ho rha hein");
});

// /student -> GET -> All Students Detail
// /student -> POST -> Student Created Successfully
// / student -> PUT -> Student Detail Updated
// /student -> PATCH -> Student Name Updated
// /student -> DELETE -> Student Deleted
