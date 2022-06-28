const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0]);
const N = new Set(input[1].split(" ").map((n) => parseInt(n)));
const m = parseInt(input[2]);
const M = new Set(input[3].split(" ").map((m) => parseInt(m)));
let res = "";
M.forEach((m) => {
  if (N.has(m)) res += "1 ";
  else res += "0 ";
});
console.log(res);
