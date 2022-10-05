const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const n = parseInt(input.shift());
let rings = input[0].split(" ").map((n) => parseInt(n));
const firstR = rings.shift();
for (let i = 0; i < n - 1; i++) {
  // 유클리드 호제법으로 최대공약수 구하기
  let a = Math.max(firstR, rings[i]);
  let b = Math.min(firstR, rings[i]);
  if (a === b) console.log("1/1");
  else {
    while (b > 0) {
      const tem = a;
      a = b;
      b = tem % b;
    }
    console.log(firstR / a + "/" + rings[i] / a);
  }
}
