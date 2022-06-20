const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const nm = input[0].trim().split(" ");
const cards = input[1].trim().split(" ");
const n = parseInt(nm[0]);
const m = parseInt(nm[1]);
let res = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      let tem = parseInt(cards[i]) + parseInt(cards[j]) + parseInt(cards[k]);
      if (tem > res && tem <= m) res = tem;
    }
  }
}
console.log(res);
