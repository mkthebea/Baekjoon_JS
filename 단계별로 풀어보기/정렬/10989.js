/* js로 풀면 무조건 메모리 초과 나서 못풂 */
//파이썬으로 동일한 코드 그대로 작성함

const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => parseInt(n));
const n = input.shift();
// 카운팅 정렬
let count = new Array(Math.max(...input) + 1).fill(0);
let res = new Array(input.length);

for (let i = 0; i < input.length; i++) {
  count[input[i]]++;
}
for (let i = 1; i < count.length; i++) {
  count[i] += count[i - 1];
}
for (let i = 0; i < input.length; i++) {
  const idx = count[input[i]];
  res[idx - 1] = input[i];
  count[input[i]]--;
}

console.log(res.join("\n"));
