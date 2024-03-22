function solution(n) {
    // 삼항 연산자를 이용한 풀이
    return Math.sqrt(n) % 1 == 0 ? Math.pow(Math.sqrt(n)+1,2) : -1
}