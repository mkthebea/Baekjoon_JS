const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
let res = "";
for (let i = 97; i < 123; i++) {
  res += input.indexOf(String.fromCharCode(i)) + " ";
}
console.log(res);
