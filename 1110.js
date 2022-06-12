const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);
let tem = n;
let i = 0;
while (true) {
  let a = 0;
  if (tem >= 10) {
    a = parseInt(tem / 10);
  }
  let b = tem % 10;
  tem = b * 10 + ((a + b) % 10);
  i++;
  if (tem == n) {
    break;
  }
}
console.log(i);
