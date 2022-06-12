const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
let res = "";

for (let i = 0; i < n; i++) {
  tem = input[i + 1].split(" ");
  res += "Case #" + (i + 1) + ": " + parseInt(parseInt(tem[0]) + parseInt(tem[1])) + "\n";
}
console.log(res);
