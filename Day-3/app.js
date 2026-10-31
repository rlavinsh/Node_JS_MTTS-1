const path = require("path");
const fs = require("fs");
// console.log(path);

// console.log("fileName k bare mein", __filename); // fullPath
// console.log("directory k bare mein", __dirname); // Current working directory

// window -> backslash(\)
// Mac+Linux -> fowardslash(/)

// record->student->Marksheet
//record/student/Marksheet

const myPath = path.join("record", "student", "Marksheet");

// humein ek file banani hein
// const fullPath = path.join(__dirname, myPath);
// fs.mkdir(fullPath, { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("folders created");
// });

// fs.writeFile(
//   path.join(fullPath, "marksheet.txt"),
//   "This is my marksheet",
//   (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("file created");
//   },
// );

const absPath = path.resolve(myPath);
console.log(absPath);

//Join
//resolve
//basename
//dirname
//extname
//parse
//format
//isAbsolute
