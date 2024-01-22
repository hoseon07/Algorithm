function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}