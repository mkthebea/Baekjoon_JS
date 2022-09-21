const fs = require("fs");
let input = fs.readFileSync("././input.txt").toString().trim().split("\n");
const k = parseInt(input.shift()); // 1m^2의 넓이에 자라는 참외의 개수
const order = input.map((x) => x.trim().split(" "));
const widths = order.filter((x) => x[0] === "1" || x[0] === "2");
const width = Math.max(...widths.map((x) => parseInt(x[1]))); // 최종 너비
const heights = order.filter((x) => x[0] === "3" || x[0] === "4");
const height = Math.max(...heights.map((x) => parseInt(x[1]))); // 최종 높이

console.log(width, height);
