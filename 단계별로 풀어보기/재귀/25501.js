const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");
const n = parseInt(input.shift());
let count = 0;
const recursion = (string, l, r) => {
  count++;
  if (l >= r) return 1;
  else if (string[l] != string[r]) return 0;
  else return recursion(string, l + 1, r - 1);
};
const isPalindrome = (string) => {
  return recursion(string, 0, string.length - 1);
};
for (let i = 0; i < n; i++) {
  count = 0;
  const string = input[i].trim();
  const res = isPalindrome(string);
  console.log(res, count);
}
