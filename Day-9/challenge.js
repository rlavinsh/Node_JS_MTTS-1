const express = require("express");

const app = express();

const students = [
  { id: 1, name: "Rahul", course: "MERN", city: "Bhopal" },
  { id: 2, name: "Aman", course: "Java", city: "Indore" },
  { id: 3, name: "Priya", course: "MERN", city: "Delhi" },
  { id: 4, name: "Neha", course: "Python", city: "Bhopal" },
  { id: 5, name: "Rohit", course: "Java", city: "Delhi" },
];

app.get("/students", (req, res) => {
  let filterStudents = [...students];
  const course = req.query.course;
  const city = req.query.city;

  if (course) {
    filterStudents = filterStudents.filter((student) => {
      return student.course == "MERN";
    });
  }
  if (city) {
    filterStudents = filterStudents.filter((student) => {
      return student.city == "Bhopal";
    });
  }
  res.send(filterStudents);
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
