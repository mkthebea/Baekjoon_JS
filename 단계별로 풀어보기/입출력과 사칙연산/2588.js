const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a * (b % 10), a * parseInt((b % 100) / 10), a * parseInt(b / 100), a * b);
