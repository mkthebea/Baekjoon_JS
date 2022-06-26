const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const n = parseInt(input.shift());
input.sort().sort((a, b) => a.length - b.length);
const res = input.filter((v, i) => input.indexOf(v) === i);
console.log(res.join("\n"));
