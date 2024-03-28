function solution(n) {
  const s = new Set();
  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}