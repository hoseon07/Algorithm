function solution(n) {  
    let divisor = 1
    let arr =[]
    
    while(divisor<=n){
        if(n%divisor === 0){
            arr.push(divisor)
        }
         divisor++
    } 
     return arr
}