const fs = require('fs');
let [N, ...time] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

N = Number(N);

let promise = Array.from({ length: N }, () => null);
let arrive = Array.from({ length: N }, () => null);
let diff = [];

if (N % 2 !== 0) console.log(1);
else {
  for (let i = 0; i < N; i++) {
    let [time1, time2] = time[i].trim().split(' ').map(Number);
    promise[i] = time1;
    arrive[i] = time2;
    diff.push(promise[i] - arrive[i]);
  }

  diff.sort((a, b) => a - b);
  let min = diff[Math.floor(diff.length / 2) - 1];
  let max = diff[Math.floor(diff.length / 2)];
  console.log(max - min + 1);
}