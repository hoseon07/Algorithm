function solution(arr, flag) {
    let X = [];
    flag.forEach((el, index) => {
        if(el) {
            for(let i = 0; i < arr[index] * 2; i++) {
               X.push(arr[index])
            }
        } else if (!el){
            for(let i = 0; i < arr[index]; i++){
                X.pop()    
            }
        }
    })

    return X
}