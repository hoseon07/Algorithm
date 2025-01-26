
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")

const [r, c, k] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= r; i++) graph.push(input[i].split(""));

const visited = Array.from({ length: r }, () => new Array(c).fill(false));

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

let cnt = 0;
function dfs(y, x, dep) {
    if (dep === k) {
        if (y === 0 && x === c - 1) cnt++;

        return;
    }

    // visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (ny < 0 || ny >= r || nx < 0 || nx >= c || graph[ny][nx] === "T") continue;

        if (!visited[ny][nx]) {
            visited[ny][nx] = true;
            dfs(ny, nx, dep + 1);
            visited[ny][nx] = false;
        }
    }
}
visited[r - 1][0] = true;
dfs(r - 1, 0, 1);

console.log(cnt);