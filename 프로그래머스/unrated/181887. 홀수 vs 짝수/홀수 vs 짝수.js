function solution(num_list) {
    const even =[]
    const odd =[]
    
   num_list.map((num,i)=>i%2===0?odd.push(num):even.push(num))
   
    const evenSum = even.reduce((acc,cur)=>acc+cur)
    const oddSum =odd.reduce((acc,cur)=>acc+cur)
    
    return Math.max(evenSum,oddSum)
}