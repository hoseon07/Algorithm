const INPUT_FILE = process.platform === 'linux' ? 'dev/stdin' : './input';
const [sum, minLength] = require('fs')
  .readFileSync(INPUT_FILE)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let length;
let start = -1;

for (length = minLength; length <= 100; length += 1) {
  const equation = sum - (length * (length - 1)) / 2;
  if (equation >= 0 && equation % length === 0) {
    start = equation / length;
    break;
  }
}

if (start === -1) {
  console.log(-1);
} else {
  const sol = Array.from({ length }).map((_, idx) => start + idx);
  console.log(sol.join(' '));
}