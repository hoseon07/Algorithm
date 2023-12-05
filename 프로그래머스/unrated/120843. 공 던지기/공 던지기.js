function solution(numbers, k) {
    // 첫 번째 선수가 공을 갖고있음
    let getBall = 1
    // 마지막 공을 던질 선수를 찾기위해 k-1 번까지 반복하며 다음 사람을 건너뛰도록 +2를 함
    for(let i = 0 ; i < k-1 ; i ++) {
        getBall+=2
        // 마지막 번호를 넘어가는 경우 처음 선수에게 공이 전달되도록  배열의 크기만큼 마이너스
        if(getBall > numbers.length) {
            getBall-=numbers.length
        }
    }
    return getBall
}
출처: https://zzuzzu-99.tistory.com/85 [zzuzzu의 코딩일기장:티스토리]