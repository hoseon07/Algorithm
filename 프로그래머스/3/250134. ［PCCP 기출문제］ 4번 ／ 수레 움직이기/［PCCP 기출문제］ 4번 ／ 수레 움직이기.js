function solution(maze) {
  const colLen = maze.length;
  const rowLen = maze[0].length;
  const pos = [null, null, null, null];
  const dest = [null, null, null, null];
  const redVisited = new Array(colLen)
    .fill()
    .map(_ => new Array(rowLen).fill(false));
  const blueVisited = new Array(colLen)
    .fill()
    .map(_ => new Array(rowLen).fill(false));
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < colLen; i += 1) {
    for (let j = 0; j < rowLen; j += 1) {
      if (maze[i][j] === 1) {
        pos[0] = i;
        pos[1] = j;
        redVisited[i][j] = true;
      } else if (maze[i][j] === 2) {
        pos[2] = i;
        pos[3] = j;
        blueVisited[i][j] = true;
      } else if (maze[i][j] === 3) {
        dest[0] = i;
        dest[1] = j;
      } else if (maze[i][j] === 4) {
        dest[2] = i;
        dest[3] = j;
      }
    }
  }

  const posQueue = [pos];

  const getValidMoves = (x, y, isRed) => {
    const visited = isRed ? redVisited : blueVisited;
    const validMoves = [];

    for (const [dx, dy] of moves) {
      const [movedX, movedY] = [x + dx, y + dy];

      if (
        movedX >= 0 &&
        movedX < colLen &&
        movedY >= 0 &&
        movedY < rowLen &&
        maze[movedX][movedY] !== 5 &&
        !visited[movedX][movedY]
      ) {
        validMoves.push([movedX, movedY]);
      }
    }

    return validMoves;
  };

  const recursive = ([rx, ry, bx, by], count) => {
    if (rx === dest[0] && ry === dest[1] && bx === dest[2] && by === dest[3])
      return count;

    const redMoves =
      rx === dest[0] && ry === dest[1]
        ? [[rx, ry]]
        : getValidMoves(rx, ry, true);
    const blueMoves =
      bx === dest[2] && by === dest[3] ? [[bx, by]] : getValidMoves(bx, by);

    const min = [Infinity];

    for (const [rmx, rmy] of redMoves) {
      for (const [bmx, bmy] of blueMoves) {
        if (
          !(rmx === bx && rmy === by && bmx === rx && bmy === ry) &&
          !(rmx === bmx && rmy === bmy)
        ) {
          redVisited[rmx][rmy] = true;
          blueVisited[bmx][bmy] = true;
          min.push(recursive([rmx, rmy, bmx, bmy], count + 1));
          redVisited[rmx][rmy] = false;
          blueVisited[bmx][bmy] = false;
        }
      }
    }

    return Math.min(...min);
  };

  const result = recursive(pos, 0);

  return result === Infinity ? 0 : result;
}