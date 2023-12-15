function solution(ineq, eq, n, m) {
    return eval(`${n} ${ineq}${eq==="=" ? "=" :""} ${m}`) ? 1 : 0
}