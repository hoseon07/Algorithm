function solution(a, b) {
    const atob = String(a) + String(b)
    const btoa = String(b) + String(a)
    
    return atob >= btoa ? Number(atob) : Number(btoa)
}