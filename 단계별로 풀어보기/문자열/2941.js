const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim();
const cr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
for (let c of cr) {
  input = input.split(c).join("a");
}
console.log(input.length);

/* 왜 안되는지 모르겠는 코드;; */
// let mVal = 0;
// for (let i = 0; i < 7; i++) {
//   let j = 0;
//   while (input.indexOf(cr[i], j) != -1) {
//     mVal++;
//     j += input.indexOf(cr[i], j) + 2;
//   }
// }
// //dz=이 있을 경우 위의 반복문에서 z=에 걸려 mVal을 ++ 해주지만 추가로 1을 더 빼줘야 함
// let j = 0;
// while (input.indexOf("dz=", j) != -1) {
//   mVal++;
//   j += input.indexOf("dz=", j) + 2;
// }
// console.log(input.length - mVal);
