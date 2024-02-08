function solution(name, yearning, photo) {
    return photo.map(((ele) => ele.reduce((acc, value)=> acc += yearning[name.indexOf(value)] ?? 0, 0)));
}