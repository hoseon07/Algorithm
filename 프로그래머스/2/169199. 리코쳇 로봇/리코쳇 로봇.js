function solution(board) {
    let answer = -1;
    
    const map = board.map(item => item.split(""));
    const n = map.length;
    const m = map[0].length;
    const visited = new Array(n).fill().map(_ => new Array(m).fill(0))
    
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    
    // 시작 지점 찾기
    let sx, sy;
    for (let x=0; x<n; x++) {
        for (let y=0; y<m; y++) {
            if (map[x][y] === "R") {
                sx = x;
                sy = y;
            }
        }
    }
    
    // BFS
    const queue = [[sx, sy, 0]];
    visited[sx][sy] = 1;
    
    while (queue.length) {
        const [x, y, count] = queue.shift();
        
        if (map[x][y] === "G") {
            answer = count;
            break;
        }
        
        for (let i=0; i<4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            
            // 미끄러지기 (한방향으로)
            while(0<=nx && nx<n && 0<=ny && ny<m && map[nx][ny] !== "D") {
                nx += dx[i]
                ny += dy[i]   
            }
            nx -= dx[i];
            ny -= dy[i];
            
            if (visited[nx][ny] === 0) {
                queue.push([nx, ny, count+1]);
                visited[nx][ny] = 1
            }
        }
    }
    
    return answer;
}