function solution(before, after) {
    const beforeASC = [...before].sort()
    const afterASC = [...after].sort()

    return JSON.stringify(beforeASC) === JSON.stringify(afterASC) ? 1 : 0
}