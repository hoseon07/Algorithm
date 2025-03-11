const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const n = Number(input.shift());
const halfN = n / 2;
let min = Infinity;

const stats = input.map((stat) => stat.split(" ").map(Number));

const check = new Array(n).fill(false);

function dfs(L, K) {
    if(L === halfN) {
        const sTeam = [];
        const lTeam = [];
        let sSum = 0;
        let lSum = 0;
        for(let i = 0; i < n; i++) {
            if(check[i]) sTeam.push(i);
            else lTeam.push(i);
        }
        for(let i = 0; i < halfN; i++) {
            for(let j = i + 1; j < halfN; j++) {
                sSum = sSum + stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
                lSum = lSum + stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
            }
        }
        min = Math.min(min, Math.abs(sSum - lSum));
        return;
    }
    for(let i = K; i < n; i++) {
        check[i] = true;
        dfs(L + 1, i + 1);
        check[i] = false;
    }
}
dfs(0, 0);
console.log(min);