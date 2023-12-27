function solution(my_string, index_list) {
    var answer = '';
    for(let x of index_list){
        answer+= my_string.slice(x,x+1);
    }
    return answer
}

console.log(solution("zpiaz",[1, 2, 0, 0, 3]))
