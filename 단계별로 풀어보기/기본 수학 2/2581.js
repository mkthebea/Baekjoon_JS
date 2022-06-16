const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const m = parseInt(input[0]);
const n = parseInt(input[1]);
let prime = [];
let sum = 0;
for (let i = m; i < n + 1; i++) {
  let isPrime = true;
  if (i === 1) isPrime = false;
  else {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    prime.push(i);
    sum += i;
  }
}
if (prime.length === 0) {
  console.log(-1);
} else {
  console.log(sum + "\n" + Math.min(...prime));
}
