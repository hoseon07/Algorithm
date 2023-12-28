function solution(my_string) {
    const strLen = my_string.length
    return [...my_string].reduce((acc, cur, idx) => {
        const curStr = my_string.slice(idx, strLen)
        return [...acc, curStr]
    }, []).sort()
}