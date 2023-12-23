function solution(numLog) {
    return numLog.reduce((acc, cur, curIdx, originArr) => {
        if(!curIdx) return ""
        const prev = originArr[curIdx-1]
        switch(prev-cur) {
            case -1:
                return acc+'w'
            case 1:
                return acc+'s'
            case -10:
                return acc+'d'
            case 10:
                return acc+'a'
        }
    }, "")
}