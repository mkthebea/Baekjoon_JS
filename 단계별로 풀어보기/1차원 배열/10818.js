const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
const l = input[1].split(" ");
console.log(Math.min(...l), Math.max(...l));
