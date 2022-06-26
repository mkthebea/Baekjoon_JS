const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a.split(" "));
const n = parseInt(input[0]);

// 중복 원소 제거 후 정렬
let set = new Set(input[1]);
let com = [...set].sort((a, b) => a - b);

// 원래 값: 압축 값 딕셔너리 생성
let dic = {};
com.forEach((v, i) => {
  dic[v] = i;
});

let res = "";
for (let i = 0; i < n; i++) {
  res += dic[input[1][i]] + " ";
}

console.log(res);
