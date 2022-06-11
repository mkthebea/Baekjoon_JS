const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (b >= 45) {
  b -= 45;
} else {
  if (a == 0) a = 23;
  else a -= 1;
  b += 15;
}
console.log(a, b);
