const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
let res = "";
for (let i = 0; input[i] != "0 0"; i++) {
  tem = input[i].split(" ");
  res += parseInt(parseInt(tem[0]) + parseInt(tem[1])) + "\n";
}
console.log(res);
