// GET /api/students 200 – all students
// GET /api/students/1 200 – one student
// GET /api/students/99 404 – student not found
// POST /api/students 201 – new student created
// POST /api/students 400 – required field missing
// PATCH /api/students/1 200 – selected fields updated
// DELETE /api/students/1 204 – deleted, no body

const express = require("express");

const app = express();

const students = [
  { id: 1, name: "Rahul", course: "MERN", city: "Bhopal" },
  { id: 2, name: "Aman", course: "Java", city: "Indore" },
  { id: 3, name: "Priya", course: "MERN", city: "Delhi" },
  { id: 4, name: "Neha", course: "Python", city: "Bhopal" },
  { id: 5, name: "Rohit", course: "Java", city: "Delhi" },
];

let nextId = 6;

app.use(express.json());

app.get("/students", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "All students",
    data: students,
  });
});

app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  //   console.log(id);

  const student = students.find((student) => {
    return student.id == id;
  });
  if (!student) {
    return res.status(404).json({
      success: false,
      message: "student nahi mila",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Student mil gaya",
    data: student,
  });
});

// creating a student

app.post("/students", (req, res) => {
  const { name, course, city } = req.body;
  //   console.log(name, course, city);

  if (!name.trim() || !course.trim() || !city.trim()) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
      data: newStudent,
    });
  }

  const newStudent = {
    id: nextId++,
    name,
    course,
    city,
  };

  students.push(newStudent);

  return res.status(201).json({
    success: true,
    message: "Student Created",
  });
});

app.patch("/students/:id", (req, res) => {});

app.listen(3000, () => {
  console.log("server chal gaya hein");
});
