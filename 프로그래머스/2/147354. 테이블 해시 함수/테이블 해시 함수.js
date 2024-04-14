function solution(data, col, row_begin, row_end) {
    // 정답 변수
    let result = 0
    // col번째 컬럼의 값을 기준으로 오름차순 정렬
    const sortData = data.sort((a,b) => {
        if(a[col-1] > b[col-1]) return 1
        // 동일하면 첫 번째 컬럼 기준 내림차순 정렬
        else if(a[col-1] === b[col-1]) return b[0] - a[0]
        else return -1
    })
    // i 번째 행의 튜플에 대해 각 컬럼의 값을 i 로 나눈 나머지들의 합으로 정의
    for(let i = row_begin ; i <= row_end ; i ++) {
        // 결괏값을 정답 변수에 XOR
        result ^= sortData[i-1].map(a => a%i).reduce((acc, cur, idx) => acc+cur, 0)
    }
    return result
}
