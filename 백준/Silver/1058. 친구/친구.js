let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
input = input.map(str=>str.split(''));
let max = 0;
input.forEach((arr,i)=>{
    const temp = [];
    arr.forEach((val,index)=>{
        if(val==='Y')
            temp.push(index);
    });
    let list = new Set(temp);
    temp.forEach(v=>{
        input[v].forEach((str,ind)=>{
            if(str==='Y')
                list.add(ind);
        });
    })
    list.delete(i);
    let count = list.size;
    if(max<count)
        max = count;
})

console.log(max);