const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);
let res = "";
for (let i = 1; i < n + 1; i++) {
  res += "*".repeat(i) + "\n";
}
console.log(res);
