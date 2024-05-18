function solution(n) {
 let x=[0,1,2]

 for(let i=3;i<=n;i++){
  x.push((x[i-1]%1000000007+x[i-2]%1000000007))
  }

 return x[n]%1000000007
}