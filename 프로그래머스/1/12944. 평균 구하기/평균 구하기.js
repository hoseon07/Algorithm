function solution(arr) {
    var answer = 0;
    for (var a=0; a<arr.length; a++) {
        answer += arr[a];
    }
    return answer / arr.length;
}