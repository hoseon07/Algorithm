function solution(s) {
    s = s.split(' ');
    let arr = [];
    for (let v of s) v === 'Z' ? arr.length ? arr.pop() : '' : arr.push(v);
    return arr.reduce((a,v)=>a+ +v,0);
}