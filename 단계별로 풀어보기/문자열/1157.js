const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().toUpperCase();
let count = {};
for (let i = 0; i < input.length; i++) {
  if (input[i] in count) {
    count[input[i]]++;
  } else {
    count[input[i]] = 1;
  }
}
const max = Math.max(...Object.values(count));
let res = Object.keys(count).filter((key) => count[key] === max);
if (res.length > 1) {
  console.log("?");
} else {
  console.log(res[0]);
}
