const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
for (let i = 1; i < n + 1; i++) {
  let score = 0;
  let oCount = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "X") {
      oCount = 0;
    } else if (input[i][j] == "O") {
      oCount++;
      score += oCount;
    }
  }
  console.log(score);
}
