const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const a = parseInt(input[0]); //고정 비용
const b = parseInt(input[1]); //가변 비용(한 대당)
const c = parseInt(input[2]); //노트북 가격
<<<<<<< HEAD
// a + b*x < c*x
// a/(c-b)<x
=======
//a + b*x < c*x
//a/(c-b)<x
>>>>>>> f3f37074c0a961790e969ca52beaf085eb3e7201
if (c - b <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(a / (c - b) + 1));
}
