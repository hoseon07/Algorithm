function solution(matrix_sizes) {
    const { length } = matrix_sizes;
    const dp = Array.from({length: length + 1}, () => Array(length + 1).fill(0));
    
    matrix_sizes = [[0, 0], ...matrix_sizes];
    
    for(let i = 1; i < length; i++){
        for(let x = 1; x + i <= length; x++){
            const y = x + i;
            
            dp[x][y] = Infinity;
            
            for(let j = x; j < y; j++){
                dp[x][y] = Math.min(dp[x][y], dp[x][j] + dp[j + 1][y] + matrix_sizes[x][0] * matrix_sizes[j][1] * matrix_sizes[y][1]);
            }
        }
    }
    
    return dp[1][length];
}