const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const n = parseInt(input.shift());
// ** 최소공배수 = 두 자연수의 곱 / 최대공약수
for (let i = 0; i < n; i++) {
  // 유클리드 호제법
  let [a, b] = input[i]
    .split(" ")
    .map((n) => parseInt(n))
    .sort((a, b) => b - a);
  const ab = a * b;
  if (b === 1) console.log(a);
  else {
    while (b > 0) {
      const tem = a;
      a = b;
      b = tem % b;
    }
    console.log(ab / a);
  }
}
