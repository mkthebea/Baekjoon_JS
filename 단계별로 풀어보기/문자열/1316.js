const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
const n = parseInt(input[0]);
let count = 0;
for (let i = 1; i < n + 1; i++) {
  const word = input[i].trim().split("");
  //앞의 원소와 같을 경우 삭제
  for (let j = 1; j < word.length; j++) {
    if (word[j] === word[j - 1]) {
      word.splice(j, 1);
      j--;
    }
  }
  //배열의 길이와 set의 길이가 같을 경우 그룹 단어
  if (word.length === new Set(word).size) {
    count++;
  }
}
console.log(count);
