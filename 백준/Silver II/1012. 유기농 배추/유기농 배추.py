import sys
sys.setrecursionlimit(10000)

def dfs(x, y):
    dx = [0, 0, -1, 1]
    dy = [1, -1, 0, 0]
    
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if (0 <= nx < m) and (0 <= ny < n):
            if field[ny][nx] == 1:
                field[ny][nx] = 0
                dfs(nx, ny)
                
for _ in range(int(sys.stdin.readline())):
    m, n, k = map(int, sys.stdin.readline().split())
    field = [[0 for _ in range(m)] for _ in range(n)]
    count = 0
    for _ in range(k):
        x, y = map(int, sys.stdin.readline().split())
        field[y][x] = 1
    for x in range(m):
        for y in range(n):
            if field[y][x] == 1:
                dfs(x, y)
                count += 1
    print(count)