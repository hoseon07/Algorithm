const fs = require('fs');

BOJkey = false;

const input = fs
  .readFileSync(BOJkey ? './javascript/1205/input.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

let answer = 0;
const [N, taesuScore, P] = input.shift();
const data = input[0] === undefined ? [] : input.pop(); // 1
const duplicateMap = {};

const rank = data.map(el => {
  duplicateMap[el] = duplicateMap[el] === undefined ? 1 : duplicateMap[el] + 1;
  return [el, 0];
});

// 4
duplicateMap[taesuScore] = duplicateMap[taesuScore] === undefined ? 1 : duplicateMap[taesuScore] + 1;
rank.push([taesuScore, 1]);

// 5
rank.sort((a, b) => {
  if (a[0] == b[0]) return a[1] - b[1];
  return b[0] - a[0];
});

rank.forEach(([score,value], index) => {
  if (score === taesuScore && value === 1) {
    if (index + 1 > P) answer = -1;
    else answer = index + 1 - (duplicateMap[taesuScore] - 1);
  }
});

console.log(answer);
 