function solution(n, m, list, list2) {
    let count = 0;

  
    for(let i=0; i<n-2; i++){
        for(let j=0; j<m-2; j++){
            if(list[i][j] !== list2[i][j]){
              
                flip(i, j);
                count += 1;
            }
        }
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(list[i][j] !== list2[i][j]){
                count = -1;
                break;
            }
        }
    }
    
    console.log(count);
}

function flip(x, y){
    for(let i=x; i<x+3; i++){
        for(let j=y; j<y+3; j++){
            list[i][j] = 1 - list[i][j];
        }
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let list = [];
let list2 = [];

rl.on("line", function (line) {
 
   input.push(line)

}).on("close", function () {

    let tmp = input[0].split(' ').map((el)=> parseInt(el));
    let n = tmp[0];
    let m = tmp[1];
    
    let arr = input.slice(1,n+1);
    let arr2 = input.slice(n+1);


    for(let i=0; i<arr.length; i++){
        list.push(arr[i].split('').map((el)=> parseInt(el)));
        list2.push(arr2[i].split('').map((el)=> parseInt(el)));
    }
  
    solution(n, m, list, list2);

    process.exit();
});