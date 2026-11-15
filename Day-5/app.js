const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url == "/student" && req.method == "GET") {
    res.end("All Students Detail");
  } else if (req.url == "/student" && req.method == "POST") {
    res.end("Student Created Successfully");
  } else if (req.url == "/student" && req.method == "PUT") {
    res.end("Student Detail Updated");
  } else if (req.url == "/student" && req.method == "PATCH") {
    res.end("Student Name Updated");
  } else if (req.url == "/student" && req.method == "DELETE") {
    res.end("Student Deleted");
  } else {
    res.end("No Route Matched");
  }
});

app.listen(3000, () => {
  console.log("mera server chal gaya !!");
});

// /student -> GET -> All Students Detail
// /student -> POST -> Student Created Successfully
// / student -> PUT -> Student Detail Updated
// /student -> PATCH -> Student Name Updated
// /student -> DELETE -> Student Deleted
