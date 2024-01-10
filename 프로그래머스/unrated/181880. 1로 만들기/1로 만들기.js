const n = [10, 12, 17, 2, 7];

function solution(n) {
  let cnt = 0;
  
  for(el of n) {
    let num = el;

    while (num !== 1) {
      if (num % 2 === 0) {
        num /= 2;
        
      } else {
        num -= 1;
        num /= 2;
      }

      cnt++;
    }
  }

  return cnt;
}

solution(n)