const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input[0].split(" ")[1]);
let res = "";

const pocketmons = input.slice(1, n + 1);
const pMap = new Map(pocketmons.map((v, i) => [v, i]));
const question = input.slice(n + 1);
question.forEach((v) => {
  if (isNaN(parseInt(v))) res += pMap.get(v) + 1 + "\n";
  else res += pocketmons[parseInt(v) - 1] + "\n";
});
console.log(res);
