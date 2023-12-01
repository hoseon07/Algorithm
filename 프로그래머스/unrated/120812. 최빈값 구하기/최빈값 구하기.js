const solution = (array) => {
    const counter = array.reduce((acc, cur) => ({
        ...acc,
        [cur] : (acc[cur] || 0) + 1
    }), {})
    
    const items = Object.keys(counter).map((key) => [
        Number(key), counter[key]
    ]).sort((a,b) => b[1] - a[1])
    
    if (items[0][1] === items?.[1]?.[1]) {
        return -1
    }

    return items[0][0];
}