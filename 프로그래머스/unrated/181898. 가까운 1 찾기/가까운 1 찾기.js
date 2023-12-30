function solution(arr, idx) {
    for(let i = idx ; i < arr.length; i++) {
        const cur = arr[i]
        if(cur === 1) return i
    }
    return -1
}