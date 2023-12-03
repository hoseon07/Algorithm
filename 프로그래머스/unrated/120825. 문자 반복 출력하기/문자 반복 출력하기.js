function solution(my_string, n) {
    const answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}