const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const n = parseInt(input[0]);

for (let i = 0; i < n; i++) {
  tem = input[i + 1].split(" ");
  console.log(parseInt(tem[0]) + parseInt(tem[1]));
}
