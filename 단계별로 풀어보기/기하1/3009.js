const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" "));

let x = 0;
let y = 0;

if (input[0][0] === input[1][0]) {
  x = input[2][0];
} else if (input[0][0] === input[2][0]) {
  x = input[1][0];
} else if (input[1][0] === input[2][0]) {
  x = input[0][0];
}

if (input[0][1] === input[1][1]) {
  y = input[2][1];
} else if (input[0][1] === input[2][1]) {
  y = input[1][1];
} else if (input[1][1] === input[2][1]) {
  y = input[0][1];
}

console.log(x, y);
