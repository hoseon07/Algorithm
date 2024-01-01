function solution(num_list, n) {
    var answer = [];
    for(i = 0; i < num_list.length; i++) {
        if(i < n) {
            answer.push(num_list[i])
        }
    } return answer;
}