const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const aNum= Number(input[0]) // a, b를 각각 다른 변수에 담아주고
    const bNum = Number(input[1])
    
    console.log(`${aNum} + ${bNum} = ${aNum + bNum}`) // 출력
});