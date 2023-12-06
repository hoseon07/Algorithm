function solution(my_string) {
    var answer = 0;
    return answer;
}function solution(my_string) {
  const num = my_string.split("");
  let result = 0;
  
  for(let i = 0; i < num.length; i++){
    //하나하나 잘렸을 때 number면 result에 담아서 더해주는 코드
    //split하면 배열로 만들어지니 forEach로 넣어도 될것같음!
    if(Number(num[i])) result += Number(num[i])
  }
  return result
}