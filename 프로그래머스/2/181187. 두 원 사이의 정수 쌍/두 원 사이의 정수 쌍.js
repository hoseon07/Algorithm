function solution(r1, r2) {
    let answer = 0;
    for(var x = 1;x<=r2;x++){
        var maxY = Math.floor(Math.sqrt(r2**2 - x**2));
        if(r1>x){
            var minY = Math.ceil(Math.sqrt(r1**2 - x**2));
        }
        else{
            var minY = 0;
        }
        answer+= (maxY - minY + 1);
    }
    return answer*4;
}
