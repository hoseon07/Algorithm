const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

let cur = 0;
let idx = 0;
while (idx < input.length) {
    cur++;
    const curStr = cur.toString();
    for (let i = 0; i < curStr.length; i++) {
        if (curStr[i] === input[idx]) idx++;
    }
}

console.log(cur);