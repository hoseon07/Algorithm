function solution(n) {
    // 배열 안에 배열을 만든뒤 0으로 채운다.
    const arr = Array(n).fill(Array(n).fill(0));
    
    // map을 이용하여 1차원 배열 값을 반환하여 2차원 배열에 세팅해준 다음 2차원 배열을 반환한다.
    return arr.map((v, i) => {
        return v.map((v2,i2) => v2 = i == i2 ? 1 : 0);
    });

}
