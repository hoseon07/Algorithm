function solution(arr, intervals) {
    return intervals.reduce((acc, cur) => {
        const [from, to] = cur
        const curNums = arr.slice(from, to+1)
        return acc.concat(curNums)
    }, [])
}