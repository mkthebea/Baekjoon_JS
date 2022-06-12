const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ");
let a = input[0][2] + input[0][1] + input[0][0];
let b = input[1][2] + input[1][1] + input[1][0];

console.log(a > b ? a : b);
