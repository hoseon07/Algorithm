function solution(n) {
    if(n%2===1)
      return  (n+1)/2*((n + 1)/2) ;
    else
      return   n*(n+1)*(n+2)/6;
}