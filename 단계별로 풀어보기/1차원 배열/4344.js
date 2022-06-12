const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const c = parseInt(input[0]);
for (let i = 1; i < c + 1; i++) {
  const score = input[i].split(" ").map(Number);
  const n = score.shift();
  let total = 0;
  for (let j = 0; j < n; j++) {
    total += score[j];
  }
  const avg = total / n;
  console.log(((score.filter((score) => score > avg).length / n) * 100).toFixed(3) + "%");
}
