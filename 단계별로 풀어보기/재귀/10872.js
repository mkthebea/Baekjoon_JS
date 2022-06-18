const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);

const fact = (n) => {
  if (n <= 1) return 1;
  else return n * fact(n - 1);
};

console.log(fact(n));
