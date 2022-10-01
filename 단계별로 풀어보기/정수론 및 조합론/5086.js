const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map((n) => parseInt(n));
  if (a === 0) break;
  else if (a < b && b % a === 0) console.log("factor");
  else if (a > b && a % b === 0) console.log("multiple");
  else console.log("neither");
}
