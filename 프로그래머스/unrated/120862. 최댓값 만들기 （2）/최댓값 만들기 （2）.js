function solution(numbers) {
    numbers.sort((a, b) => b - a);
    const firstTwo = numbers[0] * numbers[1]
    const lastTwo = numbers[numbers.length -1] * numbers[numbers.length - 2];
    return firstTwo > lastTwo ? firstTwo : lastTwo;
}