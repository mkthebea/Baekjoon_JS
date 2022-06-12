const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");
//indexOf()를 사용하려면 input을 array로 바꿔야 함
//현재 input의 type은 object
console.log(Math.max(...input) + "\n" + (input.findIndex((i) => i == Math.max(...input)) + 1));
