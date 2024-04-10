function solution(sequence) {
    let answer = 0;
    const dpPos = []; // 1 -1 1 ...
    const dpNeg = []; // -1 1 -1

    for(let i = 0 ; i < sequence.length ; i ++) {
        const s = sequence[i]
        // 연속되는 부분 수열을 사용할지, 현재 인덱스에서 끊을지
        if(i === 0) {
            dpPos.push(s)
            dpNeg.push(-s)
        } else if (i % 2 === 0) {
          dpPos.push(Math.max(dpPos[i - 1] + s, s));
          dpNeg.push(Math.max(dpNeg[i - 1] - s, -s));
        } else {
          dpPos.push(Math.max(dpPos[i - 1] - s, -s));
          dpNeg.push(Math.max(dpNeg[i - 1] + s, s));
        }
        answer = Math.max(answer, dpPos[i], dpNeg[i]);    
    }
  return answer;
}