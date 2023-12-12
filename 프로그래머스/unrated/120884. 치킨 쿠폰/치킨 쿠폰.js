function solution(chicken) {
    let ch = chicken; // 현재 쿠폰의 수
    let answer = 0; // 서비스 치킨의 수
    
    while(ch > 9) {
        answer += Math.floor(ch / 10);
        ch = Math.floor((ch / 10) + ( ch % 10));
    }
    
    return answer;
}