const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);
//(x-2)(x-1) < (n-1)/3 <= x(x-1)을 만족하는 x 찾기
if (n === 1) {
  console.log(1);
} else {
  let i = 1;
  while (n - 1 > 3 * i * (i - 1)) {
    i++;
  }
  console.log(i);
}

// 굳이 공식 안써도
// let i = 1;
// let sum = 1;
// while (sum < n) {
//   sum += 6 * i;
//   i++;
// }
// 이렇게 단순하게 가능
