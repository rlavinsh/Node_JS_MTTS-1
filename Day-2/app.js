const os = require("os");
const fs = require("fs");

// console.log(os);
// Returns a string identifying the operating system platform.
// console.log(os.platform());

// arch: Returns the operating system CPU architecture for which the Node.js binary was compiled.
// console.log(os.arch());

// console.log(os.type());

// console.log(os.hostname());

// console.log(os.cpus().length);

// const totalMemory = os.totalmem() / 1024 / 1024 / 1024;
// console.log(`My total Memory ${totalMemory}GB`);

// const freeMemory = os.freemem() / 1024 ** 3;
// console.log(`My Free Memory ${freeMemory + " "}GB`);

// const totalTime = os.uptime() / 60;
// console.log(totalTime);

// https://github.com/rlavinsh/Node_JS_MTTS-1

const hostName = os.hostname();
const platform = os.platform();
const architecture = os.arch();
const type = os.type();
const version = os.version();
const uptime = os.uptime() / 60 / 60;
const totalMemory = os.totalmem() / 1024 / 1024 / 1024;
const freeMemory = os.freemem() / 1024 ** 3;
const cpus = os.cpus().length;

const fullInfo = `
  ========= SYSTEM REPORT =========

Hostname : ${hostName}
Platform : ${platform}
Architecture : ${architecture}
OS Type : ${type}
Version : ${version}
Uptime : ${uptime} Hours

## Memory

Total RAM : ${totalMemory.toFixed(2)} GB
Free RAM : ${freeMemory.toFixed(2)} GB
Used RAM : ${totalMemory - freeMemory.toFixed(2)} GB

## CPU

CPU Count : ${cpus}

=================================
Generated Successfully
`;

fs.writeFile("systemReport.md", fullInfo, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("file Created successfully");
});
