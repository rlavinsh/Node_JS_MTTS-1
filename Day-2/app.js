const os = require("os");

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

const totalTime = os.uptime() / 60;
console.log(totalTime);
