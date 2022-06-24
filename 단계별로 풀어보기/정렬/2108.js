const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => parseInt(n));
const n = input.shift();

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += input[i];
}
console.log(sum / n < 0 && sum / n > -1 ? -1 * Math.round(sum / n) : Math.round(sum / n)); //산술평균

input.sort((a, b) => a - b);
const half = parseInt(n / 2);
console.log(input[half]); //중앙값

let count = 0;
let most = [];
for (let i = 0; i < n; i++) {
  const tem = input[i];
  let count_tem = 0;
  while (input[i] === tem) {
    count_tem++;
    i++;
  }
  i--;
  if (count_tem === count) {
    most.push(input[i]);
  } else if (count_tem > count) {
    count = count_tem;
    most = [input[i]];
  }
}
console.log(most.length === 1 ? most[0] : most[1]); //최빈값

console.log(input[input.length - 1] - input[0]); //범위
