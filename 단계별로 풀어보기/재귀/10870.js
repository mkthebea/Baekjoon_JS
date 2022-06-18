const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
const n = parseInt(input);

const fibo = (n) => {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fibo(n - 1) + fibo(n - 2);
};
console.log(fibo(n));
