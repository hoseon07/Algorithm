function solution(todo_list, finished) {
    
    return todo_list.filter((elem,index) => finished[index] === false);
}