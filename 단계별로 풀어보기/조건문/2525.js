const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");
tem = input[0].split(" ").concat(input[1]);

let a = parseInt(tem[0]);
let b = parseInt(tem[1]);
let c = parseInt(tem[2]);

a += parseInt(c / 60);
if (b + (c % 60) >= 60) {
  a += 1;
  b = b + (c % 60) - 60;
} else {
  b += c % 60;
}

if (a >= 24) {
  a -= 24;
}
console.log(a, b);
