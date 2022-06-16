const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const m = parseInt(input[0]);
const n = parseInt(input[1]);

//에라토스테네스의 체
let prime = Array(parseInt(n + 1)).fill(true);
prime[0] = false;
prime[1] = false;
for (let i = 2; i * i <= n; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= n; j += i) {
      prime[j] = false;
    }
  }
}
prime = prime.map((num, i) => (num ? i : 0)).filter((num) => num && num >= m); // == .filter((num) => num !== 0 && num >= m)
console.log(prime.join("\n"));
