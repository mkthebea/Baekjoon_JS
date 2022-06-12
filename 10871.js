const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const nx = input[0].split(" ");
const n = parseInt(nx[0]);
const x = parseInt(nx[1]);
const a = input[1].split(" ");
let res = "";
for (let i = 0; i < n; i++) {
  if (a[i] < x) {
    res += a[i] + " ";
  }
}
console.log(res);
