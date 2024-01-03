function solution(numbers, n) {
    return numbers.reduce((acc, cur) => acc > n ? acc : acc+cur, 0)
}