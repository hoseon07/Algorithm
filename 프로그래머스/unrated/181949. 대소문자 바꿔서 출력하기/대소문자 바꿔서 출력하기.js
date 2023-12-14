const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    // 결과를 담을 변수 result
    let result = ""; 
    
    for(let i = 0; i < str.length; i++) {
        // 문자열.charCodeAt(인덱스) : 문자 > 아스키
        let ascii = str.charCodeAt(i);
        
        if(ascii >= 65 && ascii <= 90) {
            ascii += 32;
        } else {
            ascii -= 32;
        }
        
        // String.fromCharCode(아스키) : 아스키 > 문자
        result += String.fromCharCode(ascii);
    }
    console.log(result);
});