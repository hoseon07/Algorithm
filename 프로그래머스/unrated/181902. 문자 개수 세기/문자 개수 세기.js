function solution(my_string) {
    const arr = Array(52).fill(0)
    return [...my_string].reduce((acc, cur) => {
        let curIdx
        const curAlpha= cur.charCodeAt()
        if(curAlpha >= 97) {
         curIdx = curAlpha - 71   
        } else {
         curIdx = curAlpha-65   
        }
         
        acc[curIdx] = acc[curIdx] ?? 0
        acc[curIdx]++
        return acc
    }, arr)
}