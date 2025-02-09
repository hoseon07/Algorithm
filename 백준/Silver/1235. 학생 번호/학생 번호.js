const [N, ...students] = require('fs').readFileSync('/dev/stdin')
                          .toString().trim().split('\n');

const findAns = () => {
  let sliceArr = []; // 학생들의 자른 번호들을 담을 배열.
  let num = 1; // 얼마나 자를 것인가

  while(true){
    students.forEach(student => {
      const stringLength = student.length; // 학생들의 기존 번호의 길이가 모두 동일하므로 미리 설정.
      sliceArr.push(student.slice(stringLength - num)); // 학생들의 기존 번호를 자르고, 배열에 넣어줌.
    })

    const newSet = new Set([...sliceArr]); // 중복 제거
    
    // 중복 제거한 set의 사이즈와 자른 번호들이 담긴 배열의 길이가 동일하다면 반복문 탈출.
    if(newSet.size === sliceArr.length) break; 
    else { // 길이가 다르다면 자르는 수 추가와 배열 초기화.
      num++;
      sliceArr = [];
    } 
  }
  return num;
}

console.log(findAns());