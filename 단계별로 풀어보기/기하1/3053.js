const fs = require("fs");
const input = fs.readFileSync("././input.txt").toString().trim();

const r = parseInt(input);
console.log(Math.PI * r ** 2);
console.log((r * Math.sqrt(2)) ** 2);
