const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const x = parseInt(input.shift());
const n = parseInt(input.shift());

let total = 0;
for (let i = 0; i < n; i++) {
  const tem = input[i].split(" ");
  total += parseInt(tem[0]) * parseInt(tem[1]);
}
if (total === x) console.log("Yes");
else console.log("No");
