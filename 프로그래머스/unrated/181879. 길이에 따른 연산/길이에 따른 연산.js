function solution(num_list) {
    var answer = 0;
    if(num_list.length>=11){
        for(const array of num_list){
            answer+=array
        }
    }else if (num_list.length<=10){
        answer=num_list.reduce((a,b) => a*b)
        }
    return answer;
}