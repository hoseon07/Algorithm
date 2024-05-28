const solution = (n, stations, w) => {
    let answer = 0;
    let index = 0;
    let start = 1;
    
    while(start <= n){
        if(start >= stations[index] - w && start <= stations[index] + w){
            start = stations[index] + w;
            index++;
        } else{
            start += 2 * w;
            answer++;
        }
        start++;
    }
    
    return answer;
}