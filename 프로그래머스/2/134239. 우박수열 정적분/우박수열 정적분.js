function solution(k, ranges) {
    let answer = [];
    // 우박수열 구하기
    let arr = [k];
    while(k!==1){
        // k가 짝수일때
        if(k%2===0){
            k = k/2;
        }
        //k가 홀수일떄
        else{
            k = k *3+1;
        }
        arr.push(k);
    }
    
    
    //구간 넒이 구하기
    let areaArr = [];
    for(let i = 0;i<arr.length-1;i++){
        areaArr.push((arr[i]+arr[i+1])/2);
    }

    //각각의 정적분 구하기
    let areaLen = areaArr.length;
    let lastIdx, firstIdx;
    let pushSum;
    for(let i =0;i<ranges.length;i++){
        pushSum = 0;
        lastIdx = areaLen + ranges[i][1];
        firstIdx = ranges[i][0];
        if(lastIdx< firstIdx){
            pushSum = -1;
        }
        else{
            for(var k = firstIdx;k<lastIdx;k++){
                pushSum += areaArr[k];
            }
        }
      
        answer.push(pushSum);
    }   
    return answer;
}