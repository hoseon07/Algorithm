function solution(picture, k) {
    const willAddArr = []
    // 문자열의 각 자릿수를 k만큼 반복시킨 배열 생성
    for(let i = 0 ; i < picture.length ; i ++) {
        let str = ''
        for(let j = 0 ; j < picture[i].length ; j ++) {
            for(let l=0 ; l < k ; l ++) {
                str+=picture[i][j]    
            }
        }
        willAddArr.push(str)
    }
    
    // 생성된 배열을 k만큼 반복시킨 배열 반환
    return willAddArr.reduce((acc, cur) => {
        const curArr = []
        for(let i = 0 ; i < k ; i ++) {
            curArr.push(cur)
        }
        return [...acc, ...curArr]
    }, [])
}