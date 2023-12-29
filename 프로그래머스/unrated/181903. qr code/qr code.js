function solution(q, r, code) {
    return [...code].reduce((acc, cur, idx) => {
        return idx%q === r ? acc+cur : acc
    }, "")
}