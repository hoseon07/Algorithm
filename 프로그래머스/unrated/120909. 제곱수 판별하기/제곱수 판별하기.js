function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) if(n % i === 0) arr.push(n / i);
    return arr.length % 2 ? 1 : 2;
}