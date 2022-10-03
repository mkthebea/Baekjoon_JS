const fs = require("fs");
const [big, small] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => parseInt(n))
  .sort((a, b) => b - a);

let factor = 1;
for (let i = 1; i <= small; i++) {
  if (small % i === 0 && big % i === 0) factor = i;
}

let multiple = big;
for (let i = 1; i <= small; i++) {
  if ((big * i) % small === 0) {
    multiple = big * i;
    break;
  }
}

console.log(factor);
console.log(multiple);
