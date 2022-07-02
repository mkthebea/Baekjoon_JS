const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const N = input[1].split(" ").map((n) => parseInt(n));
const M = input[3].split(" ").map((n) => parseInt(n));

let nDict = {};
N.forEach((v) => {
  if (v in nDict) nDict[v]++;
  else nDict[v] = 1;
});

let res = "";
M.forEach((v) => {
  if (v in nDict) res += nDict[v] + " ";
  else res += "0 ";
});
console.log(res.trim());
