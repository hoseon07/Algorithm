function solution(my_string, s, e) {
    const arr = [...my_string] // 문자열을 배열로
    const newStr = arr.slice(s, e + 1).reverse() // 인덱스 s부터 e까지 자르고 뒤집기
    arr.splice(s, newStr.length, newStr) // splice메서드로 newStr부분을 집어넣기
    const array = arr.flat() // 배열안에 배열이 들어간 상태라서 flat메서드로 배열안의 배열 해제
    return array.join(''); // join메서드로 배열내 모든 요소를 연결해 문자열로 만들어서 반환
}