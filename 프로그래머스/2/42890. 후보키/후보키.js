function solution(relation) {
    let answer = 0;
    // relation[0]의 길이만큼 인덱스번호를 원소로 가지는 초기배열을 만든다.
    let idxArr = Array.from(Array(relation[0].length), (v, i) => i);
    
  	let combinations=[]; //가능한 후보키들의 모든 조합을 우선 넣기
  
    for(let i=0;i<idxArr.length;i++){
        combinations.push(...getCombination(idxArr,i+1))
    }
    
    combinations = checkUniqueness(relation, combinations);  //유일성 체크해서 갱신
    combinations = checkMinimality(combinations); // 최소성 체크해서 갱신
  
    return combinations.length

}


function checkUniqueness(relation,combinations){
    let results = []; 
  
    combinations.forEach((combination) => { 
        let set = new Set(); 
        relation.forEach((rel) => {  
            set.add(combination.map(combi => rel[combi]).join(','));
        });
        if(set.size == relation.length){
            results.push(combination); 
        }
    }); 
    return results;
}


function checkMinimality(combinations){
    let results=[]; 
  
    while(combinations.length){
        results.push(combinations[0]);
        combinations=combinations.reduce((acc,cur)=>{
            let notMinimal=combinations[0].every(combination=>cur.includes(combination));
            if(!notMinimal) acc.push(cur); 
            return acc;
        },[])
    }
  
    return results;
    
}



function getCombination(arr,selectNum){
    let result=[];
    if(selectNum===1){
        return arr.map(a=>[a])
    }
    arr.forEach((fix,i,origin)=>{
        const rest=origin.slice(i+1);
        const combi=getCombination(rest,selectNum-1);
        const attach=combi.map((c)=>[fix,...c]);
        result.push(...attach)
    })
    return result;
}
