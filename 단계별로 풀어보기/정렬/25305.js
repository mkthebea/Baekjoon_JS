const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" "));
const n = parseInt(input[0][0]);
const k = parseInt(input[0][1]);
const x = input[1].sort((a, b) => b - a);
console.log(x[k - 1]);
