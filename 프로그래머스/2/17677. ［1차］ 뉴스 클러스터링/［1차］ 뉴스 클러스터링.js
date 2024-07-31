function solution(str1, str2) {
    let tmp1 = [], tmp2 = [], inter = 0;
    
    
    str1 = str1.toLowerCase();	
    str2 = str2.toLowerCase();

	
    for(let i=1; i<str1.length; i++) 
        if(str1[i-1] >= 'a' && str1[i-1] <= 'z' && str1[i] >= 'a' && str1[i] <= 'z')
            tmp1.push(str1[i-1]+str1[i]);
            
            
    
    for(let i=1; i<str2.length; i++)
        if(str2[i-1] >= 'a' && str2[i-1] <= 'z' && str2[i] >= 'a' && str2[i] <= 'z')
            tmp2.push(str2[i-1]+str2[i]);

    
    for(let i=0; i<tmp1.length; i++){
        const tmp = tmp1[i];
        
      
        for(let j=0; j<tmp2.length; j++){
       
            if(tmp === tmp2[j]){
                inter ++;
                tmp2[j] = '.';
                break;
            }
        } 
    }
    
    const union = tmp1.length + tmp2.length - inter;
    
    
    return union === inter ? 65536 : Math.floor((inter/union) * 65536);
}