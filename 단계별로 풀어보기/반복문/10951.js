const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  tem = input[i].split(" ");
  console.log(parseInt(tem[0]) + parseInt(tem[1]));
}
