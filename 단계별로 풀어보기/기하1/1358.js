const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const conditions = input
  .shift()
  .split(" ")
  .map((x) => parseInt(x));
const [W, H, X, Y, P] = conditions;
const R = H / 2;
let count = 0;
for (let i = 0; i < P; i++) {
  const [a, b] = input[i].split(" ").map((n) => parseInt(n));
  if (X <= a && a <= X + W && Y <= b && b <= Y + H) {
    count++;
  } else if (a < X && (a - X) ** 2 + (b - Y - R) ** 2 <= R ** 2) {
    count++;
  } else if (X + W < a && (a - X - W) ** 2 + (b - Y - R) ** 2 <= R ** 2) {
    count++;
  }
}
console.log(count);
