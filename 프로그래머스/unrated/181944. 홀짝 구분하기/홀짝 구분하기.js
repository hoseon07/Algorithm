const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    let preparedString = 'odd'
    if(n%2 === 0) {
        preparedString = 'even'
    }
    console.log(`${n} is ${preparedString}`)
});