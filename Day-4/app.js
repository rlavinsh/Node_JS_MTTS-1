const http = require("http");

const app = http.createServer((req, res) => {
  console.log(req.url);
  console.log("Method konsa hein", req.method);
  res.end("Hello duniya kaise ho!!");

  if (req.url == "/student" && req.method == "GET") {
    res.end("All Students Detail");
  } else if (req.url == "/student" && req.method == "POST") {
  } else if (req.url == "/student" && req.method == "PUT") {
  } else if (req.url == "/student" && req.method == "PATCH") {
  } else {
  }
});

app.listen(3000, () => {
  console.log("mera server chal gaya !!");
});

// METHODS
// GET -> by default hota hein and jab bhi mujhe poora data chaiye then we use this get method
// POST-> when you want create the user jab bhi tumhe data bhejna hein aur entry create karni hein
// PUT -> Jab bhi mujhe exsiting resource yaha update karna ho then we use this put method
// PATCH -> jab bhi mujhe partially update karna ho
// DELETE -> jab mujhe completely delete karna ho
// console.log(http);
