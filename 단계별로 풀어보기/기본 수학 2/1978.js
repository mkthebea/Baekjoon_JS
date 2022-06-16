const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
const list = input[1].split(" ");
let count = 0;
for (let i = 0; i < n; i++) {
  let isPrime = true;
  const num = parseInt(list[i]);
  if (num === 1) isPrime = false;
  else {
    for (let j = 2; j * j <= num; j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) count++;
}
console.log(count);
