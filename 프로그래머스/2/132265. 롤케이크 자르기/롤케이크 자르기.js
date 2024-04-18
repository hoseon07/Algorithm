function solution(topping) {
    let answer = 0;
    let baseSet=new Set();
    let compareSet=new Set();
    let counter=new Array(10001).fill(0);
    
    if(topping.length===1){
        return answer;
    }
    
    topping.map(v=>{
        baseSet.add(v);
        counter[v]++;
    })
    
    topping.map(v=>{
        if(counter[v]>=1){
            counter[v]--;
        }
        if(counter[v]===0){
            baseSet.delete(v);
        }    
        compareSet.add(v);    
        if(baseSet.size===compareSet.size){
            answer++;
        }
    })
    
    return answer;
}