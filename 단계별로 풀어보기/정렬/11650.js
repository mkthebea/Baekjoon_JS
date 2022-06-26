const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((xy) => xy.split(" "));
let res = "";
const n = parseInt(input.shift());
input.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
for (let i = 0; i < n; i++) {
  res += input[i].join(" ") + "\n";
}
console.log(res);
