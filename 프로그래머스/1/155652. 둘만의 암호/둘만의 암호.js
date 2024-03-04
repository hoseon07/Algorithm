function solution(s, skip, index) {
  let ans = "";
  let arr = s.split("");
  // a: 97 z: 122
  arr.map((item) => {
    let a = item.charCodeAt(); // 아스키코드로 나타냄
    for (let i = 0; i < index; i++) {
      a++; // 숫자 1더한 값으로 아래 사항들 수행
      // z 이상이면 a로 바꿈
      if (a > 122) {
        a = 97;
      }
      // 다시 문자로 변환해서 skip에 들어있는지 확인
      while (skip.includes(String.fromCodePoint(a))) {
        a++; // 있다면 한번 더 +1
        if (a > 122) {
          a = 97;
        }
      }
    }
    ans = ans + String.fromCodePoint(a);
  });
  return ans;
}