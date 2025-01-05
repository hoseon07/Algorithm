const INPUT_FILE = process.platform === 'linux' ? '/dev/stdin' : './input';
const [totalCount, winCount] = require('fs')
  .readFileSync(INPUT_FILE)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const winRate = totalCount > 0 ? Math.floor((winCount * 100) / totalCount) : 0;
const getWinRate = (newGameCount) =>
  Math.floor(((winCount + newGameCount) * 100) / (totalCount + newGameCount));

let sol = -1;

if (winRate < 99) {
  let left = 1;
  let right = totalCount === 0 ? 2 : totalCount;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (getWinRate(mid) > winRate) right = mid;
    else left = mid + 1;
  }

  sol = left;
}

console.log(sol);