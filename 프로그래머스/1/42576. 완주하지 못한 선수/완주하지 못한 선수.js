function solution(participant, completion) {
  let answer = "";

  let pH = new Map();

  for (let p of participant) {
    pH.set(p, pH.get(p) + 1 || 1);
  }

  for (let c of completion) {
    if (pH.get(c) === 1) {
      pH.delete(c);
    } else {
      pH.set(c, pH.get(c) - 1);
    }
  }

  for (let [key, value] of pH) {
    answer = key;
  }
  
  return answer;
}