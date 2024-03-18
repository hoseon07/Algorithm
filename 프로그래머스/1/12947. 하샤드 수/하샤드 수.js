function solution(x) { // x = 18
    let sum = 0;
    let arr = String(x).split(""); // [1,8]
    
    for(let i=0; i<arr.length; i++){
        sum += Number(arr[i]) // 1+8
    }
    return (x % sum == 0) ? true:false;
}