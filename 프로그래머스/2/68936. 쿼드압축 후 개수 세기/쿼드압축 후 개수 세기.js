function solution(arr) {
    let answer = [0,0];
    
    const divide = (row, col, len) => {
        
    let dividable = true;
    
    for(let i = row; i < row + len; i++) { 
        for(let j = col; j < col + len; j++) {
            if(arr[row][col] !== arr[i][j]) { 
                dividable = false;
            }
        }
    }
    
    let half = Math.floor(len / 2);
        
    if(!dividable) { 
        divide(row, col, half) 
        divide(row + half, col, half) 
        divide(row, col + half, half) 
        divide(row + half, col + half, half)
    }else {
        if(arr[row][col] === 1) answer[1]++;
        else answer[0]++;
    }
}
    
    divide(0, 0, arr.length);
    return answer;
}