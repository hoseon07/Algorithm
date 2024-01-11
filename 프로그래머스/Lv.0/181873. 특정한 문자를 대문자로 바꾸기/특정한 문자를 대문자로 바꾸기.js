function solution(my_string, alp) {
    return [...my_string].map((v) => v === alp ? alp.toUpperCase() : v).join('');
}