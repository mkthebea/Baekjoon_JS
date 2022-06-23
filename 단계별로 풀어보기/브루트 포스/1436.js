const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);
let res = 666;
for (let i = 1; i < n; i++) {
  res++;
  while (!String(res).includes("666")) {
    res++;
  }
}
console.log(res);
