function solution(strArr) {
    const arr = strArr.map(x => x.length);
    
    const result = {};
    arr.forEach((x) => { 
        result[x] = (result[x] || 0)+1; 
    });
    return Math.max(...Object.values(result));
}