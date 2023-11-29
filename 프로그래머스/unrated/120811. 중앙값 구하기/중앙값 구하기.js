function solution(array) {
    const mid_num = Math.floor(array.length / 2);
    const sort_num = array.sort((a,b) => a - b);
    return sort_num[mid_num];
}