const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0].split(" ")[0]);
const k = parseInt(input[0].split(" ")[1]);
let A = input[1].split(" ").map((a) => parseInt(a));

let count = 0;

const merge_sort = (A, p, r) => {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    merge_sort(A, p, q);
    merge_sort(A, q + 1, r);
    merge(A, p, q, r);
  }
};

const merge = (A, p, q, r) => {
  let i = p;
  let j = q + 1;
  let t = 1;
  let tmp = [];
  while (i <= q && j <= r) {
    if (A[i] <= A[j]) tmp[t++] = A[i++];
    else tmp[t++] = A[j++];
  }
  while (i <= q) tmp[t++] = A[i++];
  while (j <= r) tmp[t++] = A[j++];
  i = p;
  t = 1;
  while (i <= r) {
    A[i++] = tmp[t++];
    count++;
    if (count === k) {
      console.log(tmp[t - 1]);
      break;
    }
  }
};

merge_sort(A, 0, A.length - 1);
if (count < k) console.log(-1);
