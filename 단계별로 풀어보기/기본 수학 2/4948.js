const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
let t = 0;
while (input[t] != 0) {
  const n = parseInt(input[t]);
  const m = 2 * n;

  //에라토스테네스의 체
  let prime = Array(parseInt(m + 1)).fill(true);
  prime[0] = false;
  prime[1] = false;
  for (let i = 2; i * i <= m; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= m; j += i) {
        prime[j] = false;
      }
    }
  }
  prime = prime.map((num, i) => (num ? i : 0)).filter((num) => num && num > n);
  console.log(prime.length);
  t++;
}
