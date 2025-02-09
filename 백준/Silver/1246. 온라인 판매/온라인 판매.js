const [N, M, ...P] = require('fs').readFileSync('/dev/stdin')
                      .toString().trim().split(/\s/).map(v => +v);

const findAns = () => {
  const sortedP = P.sort((a,b) => a-b); 

  if(N === 1) return [Math.max.apply(null, sortedP), Math.max.apply(null, sortedP)]

  let [count, sum] = [0,0];

  if(N > M){
    for(let i = 0; i < M; i++){
      let n = sortedP[i] * (M - i);
      if(n >= sum) {
        count = sortedP[i];
        sum = n;
      }
    }
  } else {
    for(let i = 0; i < M; i++){
      let n = sortedP[i] * N;
      if(M - i < N) n = sortedP[i] * (M-i);
      if(n >= sum) {
        count = sortedP[i];
        sum = n;
      }
    }
  }
  return [count, sum];
}

console.log(findAns().join(" "));