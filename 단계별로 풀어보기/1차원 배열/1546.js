const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
const m = parseInt(Math.max(...input[1].split(" ")));
const score = input[1].split(" ").map((score) => (score / m) * 100);
let total = 0;
score.forEach((score) => {
  total += score;
});
console.log(total / n);
