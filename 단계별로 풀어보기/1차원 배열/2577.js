const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
let abc = a * b * c;
let res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
while (abc > 0) {
  res[abc % 10]++;
  abc = parseInt(abc / 10);
}
res.forEach((n) => console.log(n));
