const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const t = parseInt(input[0]);
for (let i = 1; i < t * 2; i += 2) {
  const k = parseInt(input[i]);
  const n = parseInt(input[i + 1]);
  let p = new Array(k + 1).fill(0).map(() => new Array(n).fill(0)); //(k+1)*n 이차원 배열
  for (let j = 0; j < n; j++) {
    p[0][j] = j + 1;
  }
  for (let kk = 1; kk < k + 1; kk++) {
    for (let nn = 0; nn < n; nn++) {
      if (nn === 0) {
        p[kk][nn] = 1;
      } else {
        p[kk][nn] = p[kk - 1][nn] + p[kk][nn - 1];
      }
    }
  }
  console.log(p[k][n - 1]);
}
