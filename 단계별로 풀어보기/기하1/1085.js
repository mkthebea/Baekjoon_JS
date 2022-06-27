const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
const x = parseInt(input[0]);
const y = parseInt(input[1]);
const w = parseInt(input[2]);
const h = parseInt(input[3]);
console.log(Math.min(x, w - x, y, h - y));
