const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);
let res = "";
for (let i = n; i > 0; i--) {
  res += i + "\n";
}
console.log(res);
