function solution(m, n, startX, startY, balls) {
    return balls.map(([x, y]) => {
        return getNearlist(m, n, startX, startY, x, y);
    });
}const getNearlist = (m, n, x1, y1, x2, y2) => {
    let symmetryPoints = [];

    if (x1 !== x2 || y1 < y2) {
        const bottom = [x1, -y1];
        symmetryPoints.push(bottom);
    }
    if (x1 !== x2 || y1 > y2) {
        const top = [x1, n + n - y1];
        symmetryPoints.push(top);
    }
    if (y1 !== y2 || x1 < x2) {
        const left = [-x1, y1];
        symmetryPoints.push(left);
    }
    if (y1 !== y2 || x1 > x2) {
        const right = [m + m - x1, y1];
        symmetryPoints.push(right);
    }
    
    return symmetryPoints.reduce((min, [x,y])=>{
        return Math.min(min, (x-x2)**2 + (y-y2)**2);
    }, m**2 + n**2);
}