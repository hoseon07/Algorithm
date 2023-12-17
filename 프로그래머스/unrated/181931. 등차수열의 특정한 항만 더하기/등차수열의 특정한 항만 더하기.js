function solution(a, d, included) {
    const arr = [a]
    for(let i = 1 ; i < included.length; i ++) {
        arr[i] = arr[i-1] + d
    }
    
    return arr.reduce((acc, cur, idx) => included[idx] ? acc+cur : acc , 0)
}