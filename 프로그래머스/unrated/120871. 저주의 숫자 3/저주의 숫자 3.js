function solution(n) {
    let x3 = 0
    // n까지 반복
    for(let i = 1 ; i <= n ; i ++) {
        // i에 증가에 따른 x3의 증가
        x3++
        // 3이 들어가지 않으며, 3의 배수 또한 아닌 경우까지 반복
        while(x3.toString().includes('3') || x3%3 === 0) {
            x3++
        }
    }
    return x3
}