const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const t = parseInt(input[0]);
for (let i = 1; i < t + 1; i++) {
  const test = input[i].split(" ");
  const h = parseInt(test[0]);
  const n = parseInt(test[2]);
  if (n % h === 0) {
    console.log(`${h}${String(parseInt(n / h)).padStart(2, "0")}`);
  } else {
    console.log(`${n % h}${String(parseInt(n / h) + 1).padStart(2, "0")}`);
  }
}
