const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const n = parseInt(input.shift());
const divisors = input[0]
  .split(" ")
  .map((n) => parseInt(n))
  .sort((a, b) => a - b);
if (n % 2 === 0) console.log(divisors[0] * divisors[n - 1]);
else console.log(divisors[parseInt(n / 2)] ** 2);
