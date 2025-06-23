const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, L] = input[0].split(' ').map(v => +v); 
const place = input[1].split(' ').map(v => +v).sort((a,b) => a-b);

let answer = 1; 
let start = place[0]; 
for(let i=1; i<N; i++){
    if(0.5 + place[i] + 0.5 - start > L){ 
        answer++; 
        start = place[i]
    }
}
console.log(answer)