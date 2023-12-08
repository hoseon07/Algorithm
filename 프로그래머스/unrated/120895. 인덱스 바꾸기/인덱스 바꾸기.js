function solution(my_string, num1, num2) {
    const result = [...my_string]
    // num 간의 문자열을 변환함
    result.splice(num1, 1, my_string[num2])
    result.splice(num2, 1, my_string[num1])
    return result.join("")
}