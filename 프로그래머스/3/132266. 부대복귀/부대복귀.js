function solution(n, roads, sources, destination) {

    const visited = new Array(n+1).fill(Infinity)
    
    const connect = new Array(n+1).fill(0).map(_ => [])
    roads.forEach(([from, to]) => {
        connect[from].push(to)
        connect[to].push(from)
    })

    const q = [destination]
    visited[destination] = 0
    while(q.length) {
        const cur = q.shift()
        
        for(const next of connect[cur]) {
            
            if(visited[cur]+1 < visited[next]) {
                visited[next] = visited[cur]+1
                q.push(next)
            }
        }
    }
    return sources.map(a => visited[a] !== Infinity ? visited[a] : -1)
}