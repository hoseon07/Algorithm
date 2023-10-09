const solution = (numbers, sum = 0) => {
    for(let i of numbers) {
        sum += i;
    }
    return sum / numbers.length;
}