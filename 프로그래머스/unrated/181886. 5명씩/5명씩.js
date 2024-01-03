function solution(n) {

  const res = [];

  while (n.length !== 0) { 
    res.push(n.splice(0, 5)[0]);
  }

  return res;
}