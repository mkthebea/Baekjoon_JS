const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
let time = 0;
for (let i = 0; i < input.length; i++) {
  const t = input[i];
  if ("A" <= t && t <= "C") {
    time += 3;
  } else if (t <= "F") {
    time += 4;
  } else if (t <= "I") {
    time += 5;
  } else if (t <= "L") {
    time += 6;
  } else if (t <= "O") {
    time += 7;
  } else if (t <= "S") {
    time += 8;
  } else if (t <= "V") {
    time += 9;
  } else if (t <= "Z") {
    time += 10;
  }
}
console.log(time);
