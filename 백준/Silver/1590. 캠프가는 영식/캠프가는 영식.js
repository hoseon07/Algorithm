const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, T] = input.shift().split(" ").map(Number);
let answer = Infinity;

input.forEach((line) => {
  const [S, I, C] = line.split(" ").map(Number);

  const busDispatches = Array.from({ length: C }, (_, i) => S + I * i);
  const validDispatches = busDispatches.filter((busDispatch) => busDispatch >= T);

  if (validDispatches.length) answer = Math.min(answer, ...validDispatches);
});

console.log(answer !== Infinity ? answer - T : -1);