const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
let resSet = new Set();
for (let i = 0; i < 10; i++) {
  resSet.add(input[i] % 42);
}
console.log(resSet.size);
