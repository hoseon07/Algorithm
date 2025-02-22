const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let lStack = input.shift().split("");

let iter = Number(input.shift());

let rStack = [];

for (let i = 0; i < iter; i++) {

    let [cmd, value] = input[i].split(" ");
    

    if(cmd === "L" && lStack.length){

        rStack.push(lStack.pop());   
    } else if(cmd === "D" && rStack.length){

        lStack.push(rStack.pop());
    } else if(cmd === "B"){

        lStack.pop();  
    } else if(cmd === "P"){

        lStack.push(value);
    }
}

let answer = lStack.join("");

answer += rStack.reverse().join("");

console.log(answer);