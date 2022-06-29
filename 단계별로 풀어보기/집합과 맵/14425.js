const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input[0].split(" ")[1]);

let N = new Set();
for (let i = 1; i < n + 1; i++) {
  N.add(input[i]);
}
let count = 0;
for (let i = n + 1; i < n + m + 1; i++) {
  if (N.has(input[i])) count++;
}
console.log(count);
