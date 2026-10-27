// const sum = require("./Calc");

// console.log("Welcome students !!");
// console.log(sum(10, 20));

const fs = require("fs");
// console.log(fs);

// fs.writeFileSync("first.txt", "first class of modules");

// fs.writeFileSync("first.txt", "first class");
// console.log("file created");

// const data = fs.readFileSync("first.txt", "utf-8");

// console.log(data.toString());
// console.log(data);

// fs.appendFileSync("first.txt", "of Node JS");

// fs.renameSync("first.txt", "student.txt");
// console.log("file name updated");

// fs.unlinkSync("student.txt");
// console.log("file deleted");

// fs.mkdirSync("StudentRecords");
// console.log("folder created");

// fs.writeFileSync("./StudentRecords/students.txt", "Rahul\nAman\npriya\nNeha\n");
// console.log("file created");

//==============================================================

// console.log("operation start");

// fs.writeFile(
//   "student.txt",
//   "Hello Students\nwe are learning \n FS Module",
//   (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("file created");
//   },
// );

fs.readFile("student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(data);
});
// console.log(data);

// console.log("operation completed");

let data = `Employee ID : 101
Name : Rahul
Department : Developer

Employee ID : 102
Name : Priya
Department : HR`;

fs.writeFile("./Company/employees.txt", data, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("file created ");
});
