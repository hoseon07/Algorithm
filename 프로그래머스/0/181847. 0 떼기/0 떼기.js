function solution(n_str) {
    
    // 정규식을 이용하여 0으로 시작된 경우 왼쪽 0을 지운다.
    return n_str.replace(/(^0+)/, "");
}