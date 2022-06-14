const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const v = parseInt(input[2]);
let days = Math.ceil((v - b) / (a - b));

console.log(days);

// a*x - b(x-1) >= v
// ax - bx +b >= v
// (a-b)x >= v-b
// x>= v-b/a-b

/* 시간 초과 */
// let len = 0;
// while (len < v) {
//   len += a;
//   if (len >= v) {
//     break;
//   } else {
//     len -= b;
//     days++;
//   }
// }
