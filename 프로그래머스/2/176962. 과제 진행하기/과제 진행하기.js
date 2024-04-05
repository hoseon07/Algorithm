const chgTime = (time) => {
    const [h,m] = time.split(":")
    return +h*60 + +m
}

function solution(plans) {
    plans = plans.map(el => [el[0],chgTime(el[1]),+el[2]]).sort((a,b) => a[1]-b[1])
    plans.push(["infi",999999,99999]) 
    const ret = [];
    const stk = [];
    
    for (let i=0 ; i<plans.length-1 ; i++){
        const [subj,s,t] = plans[i]
        const [nSubj,nS,nT] = plans[i+1]
        let rTime = nS-s-t
        if (0<=rTime){
             ret.push(subj)
             while (rTime && stk.length){
                 if (stk[stk.length-1][1] > rTime) {
                     stk[stk.length-1][1] -=rTime
                     rTime = 0
                 } else  {
                     ret.push(stk[stk.length-1][0])
                     rTime -= stk.pop()[1]
                 }
             }
        } else stk.push([subj,-rTime])
    }
    
    while (stk.length) ret.push(stk.pop()[0])
    
    return ret;
}