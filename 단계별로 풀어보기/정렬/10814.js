const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" "));
const n = parseInt(input.shift());
let res = "";
input.sort((a, b) => a[0] - b[0]);
for (let i = 0; i < n; i++) {
  res += input[i].join(" ") + "\n";
}
console.log(res);
