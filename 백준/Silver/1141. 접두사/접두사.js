let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
 
let dic = [];
for (let i = 1; i <= input.length - 1; ++i) {
    let word = input[i];
    let isOverlap = false;
 
    for (let j = 0; j <= dic.length - 1; j++) {
        let ref = dic[j];
        if (ref.startsWith(word) === true || word.startsWith(ref) === true) {
            dic[j] = ref.length <= word.length ? word : ref;
            isOverlap = true;
            break;
        }
    }
 
    if (!isOverlap) {
        dic.push(word);
    }
}
console.log(dic.length);
