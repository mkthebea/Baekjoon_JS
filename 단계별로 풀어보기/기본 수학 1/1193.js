const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);

let sum = 0;
let i = 1;
for (i = 1; sum + i < n; i++) {
  sum += i;
}
if (i % 2 === 0) {
  console.log(`${n - sum}/${i - (n - sum) + 1}`);
} else {
  console.log(`${i - (n - sum) + 1}/${n - sum}`);
}
// 1/1
// 1/2 2/1
// 3/1 2/2 1/3
// 1/4 2/3 3/2 4/1
// 5/1 4/2 3/3 2/4 1/5

// n/1 n-1/2 n-2/3 ... 1/n (n개)

// 1+2+3+4+... < n
