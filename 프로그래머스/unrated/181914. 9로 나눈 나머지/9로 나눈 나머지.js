function solution(number) {
    return [...number].reduce((acc, cur) => acc+Number(cur), 0)%9
}