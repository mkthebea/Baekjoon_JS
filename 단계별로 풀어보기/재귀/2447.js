const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);
let res = "";

const star = (i, j, num) => {
  if (i % 3 === 1 && j % 3 === 1) res += " ";
  else {
    if (num === 1) res += "*";
    else star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    star(i, j, n);
  }
  res += "\n";
}

console.log(res);

// 별이 찍히지 않는 경우
// x%3 === 1 && y%3 === 1 (기본)
// (x/3)%3 !== 1 && (y/3)%3 !== 1
