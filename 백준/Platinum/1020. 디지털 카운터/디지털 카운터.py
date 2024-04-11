from itertools import combinations_with_replacement as comb

def solve():
  for c in range(1,C+1):
    N0 = N[-c:]
    S = sum(cnt[int(n)] for n in N0)
    result = []
    for pick in comb(num,c):
      if sum(pick)==S:
        for n in range(int(N0[0])+1,10):
          if cnt[n] in pick:
            pick = [*pick]
            pick.remove(cnt[n])
            result.append(int(str(n)+"".join(map(str,sorted(num[n] for n in pick)))))
            break
    if result:
      return min(result)-int(N0)
  result = []
  for pick in comb(num,C):
    if sum(pick)==S:
      result.append(int("".join(map(str,sorted(num[n] for n in pick)))))
  return 10**C+min(result)-int(N)

cnt = [6,2,5,5,4,5,6,3,7,5]; num = {2:1,3:7,4:4,5:2,6:0,7:8}
C = len(N:=input())
print(solve())