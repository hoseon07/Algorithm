function solution(spell, dic) {
    const isThere = [];
    
    dic.forEach((word) => {
        let count = 0;
        
        spell.forEach((item) => {
            if(word.includes(item)){
                count += 1;
            }
        })
        
        if(count === spell.length){
            isThere.push(word);
        }
    })
    
    return isThere.length === 0 ? 2 : 1;
}