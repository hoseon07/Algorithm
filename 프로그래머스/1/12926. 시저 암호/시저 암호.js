function solution(s, n) {
    let answer = '';
    for (let i = 0; i < s.length; i++) { //s문자열을 차례로 탐색
      let sASCII = s.charCodeAt(i)
      //charcodeat메서드를 사용하여 아스키코드 값으로 바꾸어준다.
      if (sASCII >= 65 && sASCII <= 90) {
        sASCII += n;
        if (sASCII > 90) {
          sASCII -= 26;
          // 소문자라면 그 범위를 넘어서는 90부터는 26을 빼주어 뒤로 z>a가 되는 식의 것들을 처리해준다.
        }
      }
      else if (sASCII >= 97 && sASCII <= 122) {
        sASCII += n;
        if (sASCII > 122) {
          sASCII -= 26;
          // 대문자라면 그 범위를 넘어서는 122부터는 26을 빼주어 뒤로 Z>A가 되는 식의 것들을 처리해준다.
        }
      }
      sString = String.fromCharCode(sASCII);
      //String.fromCharCode로 아스키코드값을 문자열로 형변환
      answer += sString;
      // 그리고 answer에 집어넣어주고 출력하면 끝
    }
    return answer;
  }