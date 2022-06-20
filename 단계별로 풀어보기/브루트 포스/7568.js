const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((n) => parseInt(n)));
const n = parseInt(input[0]);

let res = [];
for (let i = 1; i < n + 1; i++) {
  let grade = 1;
  for (let j = 1; j < n + 1; j++) {
    if (j === i) continue;
    if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) grade++;
  }
  res.push(grade);
}

console.log(res.join(" "));
