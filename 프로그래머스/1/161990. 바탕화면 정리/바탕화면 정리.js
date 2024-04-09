function solution(wallpaper) {
  let [top, bottom, left, right] = [51, 0, 51, 0];
  
  for (let r = 0; r < wallpaper.length; r++) {
    for (let c = 0; c < wallpaper[0].length; c++) {
      if (wallpaper[r][c] === ".") continue;
      top = Math.min(top, r);
      bottom = Math.max(bottom, r);
      left = Math.min(left, c);
      right = Math.max(right, c);
    }
  }
  
  return [top, left, bottom + 1, right + 1];
}