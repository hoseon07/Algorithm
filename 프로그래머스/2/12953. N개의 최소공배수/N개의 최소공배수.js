function solution(arr) {
    return arr.reduce((acc, cur) => {
        const recursive = (min, max) =>{
          return (min % max) === 0 ? max : recursive(max, min % max);
        }

        let max = 0;
        return acc*cur / recursive(acc,cur);
    });
}
