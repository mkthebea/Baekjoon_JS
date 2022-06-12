const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
for (let i = 1; i < n + 1; i++) {
  let s = input[i].split(" ");
  const r = parseInt(s.shift());
  let res = "";
  for (let j = 0; j < s[0].length; j++) {
    res += s[0][j].repeat(r);
  }
  console.log(res);
}
