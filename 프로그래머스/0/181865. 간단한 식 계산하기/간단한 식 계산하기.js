function solution(binomial) {
    const [a,op,b] = binomial.split(' ')
    const operator = {
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b,
        '*': (a,b)=>a*b
    }
    return operator[op](Number(a),Number(b))
}