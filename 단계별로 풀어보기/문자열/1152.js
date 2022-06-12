const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();
if (input === "") {
  console.log(0);
} else {
  console.log(input.split(" ").length);
}
