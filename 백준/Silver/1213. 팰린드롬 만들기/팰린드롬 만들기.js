const input = require('fs').readFileSync('dev/stdin').toString().trim().split('');

let countObject = {};
let fillArray = new Array(input.length).fill('');

input.forEach((element) => {
    countObject[element] == null ? (countObject[element] = 1) : countObject[element]++;
});

let isPossible = true;
let centerStr = '';

Object.keys(countObject).forEach((key) => {
    if (countObject[key] % 2 !== 0) {
        if (centerStr === '') {
            centerStr = key;
            countObject[key]--;
        } else {
            isPossible = false;
            return;
        }
    }
});
if (!isPossible) {
    console.log("I'm Sorry Hansoo");
} else {
    let i = 0;

    Object.keys(countObject).sort().forEach((key) => {
        const count = countObject[key];
        for (let j = 0; j < count / 2; j++) {
            fillArray[i] = key;
            fillArray[fillArray.length - i - 1] = key;
            i++;
        }
    });

    if (centerStr !== '') {
        const centerIdx = Math.floor(fillArray.length / 2);
        fillArray[centerIdx] = centerStr;
    }

    console.log(fillArray.join(''));
}