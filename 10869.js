var fs = require("fs");
var input = fs.readFileSync("./dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b, a - b, a * b, parseInt(a / b), a % b);
