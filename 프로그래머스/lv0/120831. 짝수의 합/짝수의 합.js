const solution = (n, sum = 0) => {
    while(n > 0) {
        if(n % 2 === 0) sum += n;
        n--;
    }
    return sum;
}