const [N, ...straws] = require('fs').readFileSync('/dev/stdin')
                       .toString().trim().split("\n").map(v => +v);
const sortedStraws = straws.sort((a,b) => b-a);

const findAns = () => {
  while(true){
    const maxLine = sortedStraws[0];
    const sumLines = sortedStraws[1] + sortedStraws[2];
    
 
    if(maxLine < sumLines) return maxLine + sumLines;
    else sortedStraws.shift(); 

   
    if(sortedStraws.length < 3) return -1; 
  }
}

console.log(findAns());