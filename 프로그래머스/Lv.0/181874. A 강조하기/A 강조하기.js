function solution(myString) {
    return [...myString.replaceAll('a', 'A')].map(a => (a.charCodeAt() > 65 && a.charCodeAt() < 97) ? a.toLowerCase() : a).join("")
}