function solution(my_string) {
    const numStr = my_string.match(/[0-9]+/g);
    return numStr ? numStr.map(Number).reduce((a, c) => a + c, 0) : 0;
}