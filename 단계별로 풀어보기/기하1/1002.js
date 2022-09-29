const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const n = parseInt(input.shift());
for (let i = 0; i < n; i++) {
  const data = input[i].split(" ").map((x) => parseInt(x));
  const x1 = data[0];
  const y1 = data[1];
  const r1 = data[2];
  const x2 = data[3];
  const y2 = data[4];
  const r2 = data[5];
  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

  if (x1 === x2 && y1 === y2 && r1 === r2) console.log(-1);
  else if (distance > r1 + r2) console.log(0);
  else if (distance === r1 + r2) console.log(1);
  else if (distance === r1 - r2 || distance === r2 - r1) console.log(1);
  else if (distance < r1 - r2 || distance < r2 - r1) console.log(0);
  else console.log(2);
}
