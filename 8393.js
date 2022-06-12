const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);
let res = 0;

for (let i = 1; i < n + 1; i++) {
  res += i;
}

console.log(res);
