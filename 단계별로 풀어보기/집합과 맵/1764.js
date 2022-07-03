const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((n) => parseInt(n));
// array 사용시 시간 초과, Set으로 변경
const N = new Set(input.slice(1, n + 1));
const M = new Set(input.slice(n + 1));
const res = [...N].filter((n) => M.has(n)).sort();
console.log(res.length);
console.log(res.join("\n"));
