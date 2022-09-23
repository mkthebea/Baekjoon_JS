const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const k = parseInt(input.shift()); // 1m^2의 넓이에 자라는 참외의 개수
const order = input.map((x) => x.trim().split(" "));
const widths = order.filter((x) => x[0] === "1" || x[0] === "2");
const width = Math.max(...widths.map((x) => parseInt(x[1]))); // 최종 너비
const widthDirection = widths.find((x) => x[1] === width.toString())[0]; // 너비의 방향
const smallWidthDirection = widthDirection === "1" ? "2" : "1";

const heights = order.filter((x) => x[0] === "3" || x[0] === "4");
const height = Math.max(...heights.map((x) => parseInt(x[1]))); // 최종 높이
const heightDirection = heights.find((x) => x[1] === height.toString())[0]; // 너비의 방향
const smallHeightDirection = heightDirection === "3" ? "4" : "3";

const bigArea = width * height;

let shape = [];
if (smallWidthDirection === "1" && smallHeightDirection === "3") shape = ["1", "3"];
if (smallWidthDirection === "1" && smallHeightDirection === "4") shape = ["4", "1"];
if (smallWidthDirection === "2" && smallHeightDirection === "4") shape = ["2", "4"];
if (smallWidthDirection === "2" && smallHeightDirection === "3") shape = ["3", "2"];

for (let i = 0; i < order.length; i++) {
  if (i === order.length - 1) {
    console.log(k * (bigArea - parseInt(order[i][1]) * parseInt(order[0][1])));
  } else if (order[i][0] === shape[0] && order[i + 1][0] === shape[1]) {
    console.log(k * (bigArea - parseInt(order[i][1]) * parseInt(order[i + 1][1])));
    break;
  }
}
