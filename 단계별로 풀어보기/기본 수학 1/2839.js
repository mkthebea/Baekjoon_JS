const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);

// 3x + 5y = n
let x = 0;
let y = parseInt(n / 5);
while ((n - 5 * y) % 3 !== 0) {
  y--;
  if (y < 0) {
    console.log(-1);
    break;
  }
}
if (y >= 0) {
  x = (n - 5 * y) / 3;
  console.log(x + y);
}
