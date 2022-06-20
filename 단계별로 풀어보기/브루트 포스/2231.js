const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);
let res = 0;
for (let i = 1; i < n; i++) {
  let tem = 0;
  //각 자릿수의 합
  for (let j = i; j >= 1; j /= 10) {
    tem += parseInt(j % 10);
  }
  if (i + tem === n) {
    res = i;
    break;
  }
}
console.log(res);
