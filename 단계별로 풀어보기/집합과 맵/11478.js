const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
let subStrings = new Set();

for (let i = 0; i < input.length; i++) {
  for (let j = 1; j <= input.length - i; j++) {
    subStrings.add(input.substr(i, j));
  }
}

console.log(subStrings.size);
