function solution(balls, share) {
  let factorial = [BigInt(1)];
  for (let i = 1; i <= balls; i++) {
		factorial[i] = factorial[i - 1] * BigInt(i);
	}
  return factorial[balls] / (factorial[balls - share] * factorial[share]);
}