const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
let total = 0;
for (let i = 0; i < n; i++) {
  total += parseInt(input[1][i]);
}
console.log(total);
