function solution(n) {
  let answer = '';
  let numbers = [1,2,4];

  while (n > 0) {
      let index = (n - 1) % 3; // (n - 1) % 3을 해서 나머지를 구함
      n = Math.floor((n - 1) / 3); // (n - 1) / 3을 통해 n업데이트
      answer = numbers[index] + answer
  }

  return answer;
} 