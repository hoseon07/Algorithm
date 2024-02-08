function solution(date1, date2) {
    return new Date(date1)<new Date(date2)? 1: 0;
}

console.log(solution([2021, 12, 28],[2021, 12, 29])); //1
console.log(solution([1024, 10, 24],[1024, 10, 24])); //0
console.log(solution([2023, 1, 31], [2022, 12, 1])); //0
console.log(solution([2023, 5, 1], [2022, 4, 29])); //0
