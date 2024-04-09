function solution(land) {
  const n = land.length;
  const m = land[0].length;
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const dp = new Array(m + 1).fill(0);

  const bfs = (moveGroup, landObj) => {
    const newMoveGroup = [];
    landObj.area += moveGroup.length;

    for (const [i, j] of moveGroup) {
      if (landObj.maxJ < j) landObj.maxJ = j;
      if (landObj.minJ > j) landObj.minJ = j;

      for (const [mi, mj] of moves) {
        const [movedI, movedJ] = [mi + i, mj + j];
        if (
          movedI < n &&
          movedI >= 0 &&
          movedJ < m &&
          movedJ >= 0 &&
          land[movedI][movedJ]
        ) {
          land[movedI][movedJ] = 0;
          newMoveGroup.push([movedI, movedJ]);
        }
      }
    }

    if (newMoveGroup.length) bfs(newMoveGroup, landObj);
  };

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (land[i][j]) {
        const landObj = { area: 0, minJ: j, maxJ: j };
        land[i][j] = 0;
        bfs([[i, j]], landObj);

        dp[landObj.minJ] += landObj.area;
        dp[landObj.maxJ + 1] -= landObj.area;
      }
    }
  }

  let sum = 0;
  let result = 0;

  for (let i = 0; i < m; i += 1) {
    if (dp[i]) {
      sum += dp[i];

      if (sum > result) result = sum;
    }
  }

  return result;
}