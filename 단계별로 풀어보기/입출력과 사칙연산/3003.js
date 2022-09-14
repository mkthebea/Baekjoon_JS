const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map((n) => parseInt(n));
let correct = [1, 1, 2, 2, 2, 8];
for (let i = 0; i < 6; i++) {
  correct[i] -= input[i];
}
console.log(correct.join(" "));
