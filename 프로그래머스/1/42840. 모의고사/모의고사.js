function solution(answers) {
    const A = '12345'.split('')
    const B = '21232425'.split('')
    const C = '3311224455'.split('')

    const scores = [A,B,C]
        .map(p => {
            return answers.map((answer, i)=> answer === Number(p[i % p.length]))
                .filter(c => c)
                .length
        })
        .map((score, i) => ({id: i+1, score}))
        .sort((a, b) => b.score - a.score)

    const ret = []

    while(scores.length){
        const p = scores.shift()
        if(ret[0] && ret[0].score !== p.score) break;
        ret.push(p)
    }

    return ret.map(p => p.id).sort()
}