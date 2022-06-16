const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);
let nCopy = n;
let fact = [];
if (n !== 1) {
  for (let i = 2; i <= n; i++) {
    if (nCopy % i === 0) {
      fact.push(i);
      nCopy /= i;
      i--;
    }
    if (nCopy === 1) break;
  }
  console.log(fact.join("\n"));
}

/* 시간 초과 코드 */
// //에라토스테네스의 체
// let prime = Array(parseInt(Math.sqrt(n + 1))).fill(true);
// prime[0] = false;
// prime[1] = false;
// for (let i = 2; i * i <= n; i++) {
//   if (prime[i]) {
//     for (let j = i * i; j <= n; j += i) {
//       prime[j] = false;
//     }
//   }
// }
// prime = prime.map((n, i) => (n ? i : 0)).filter((n) => n); // == .filter((n) => n !== 0)

// while (!(n in prime)) {
//   for (let i = 0; i < prime.length; i++) {
//     if (n % prime[i] === 0) {
//       n /= prime[i];
//       fact.push(prime[i]);
//       i--;
//     }
//   }
// }

// console.log(fact.join("\n"));
