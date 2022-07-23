const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) =>
    x
      .trim()
      .split(" ")
      .map((n) => parseInt(n))
      .sort((a, b) => b - a)
  );

let res = "";
for (let i = 0; i < input.length - 1; i++) {
  if (input[i][0] ** 2 == input[i][1] ** 2 + input[i][2] ** 2) res += "right\n";
  else res += "wrong\n";
}
console.log(res);
