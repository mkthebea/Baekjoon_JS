const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const t = parseInt(input.shift());
const maxNum = Math.max(...input);

let prime = Array(parseInt(maxNum + 1)).fill(true);
prime[0] = false;
prime[1] = false;
for (let i = 2; i * i <= maxNum; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= maxNum; j += i) {
      prime[j] = false;
    }
  }
}
prime = prime.map((num, i) => (num ? i : 0)).filter((num) => num);
let res = "";

for (let i = 0; i < t; i++) {
  const n = parseInt(input[i]);
  let par = [];
  let diff = maxNum;
  for (let j = 0; j < prime.length; j++) {
    if (prime.indexOf(n - prime[j]) !== -1) {
      let diff_tem = Math.abs(2 * prime[j] - n);
      if (diff_tem < diff) {
        par = [prime[j], n - prime[j]];
        diff = diff_tem;
      }
    }
  }
  res += par.join(" ") + "\n";
  // console.log(par.join(" "));
}
console.log(res);
