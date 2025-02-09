import sys
input = sys.stdin.readline

N, r1, c1, r2, c2 = map(int, input().split())

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
dia = 2*N-1
for i in range(r1, r2+1):
    for j in range(c1, c2+1):
        i %= dia
        j %= dia
        dis = abs(N-1-i) + abs(N-1-j)
        if dis > N-1:
            print(".", end="")
        else:
            print(alphabet[dis%26], end="")
    print()