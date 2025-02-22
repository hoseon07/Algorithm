from itertools import combinations
n = int(input())
arr=[]
res=[]
for i in range(n):
    alpha = list(input())
    t = 0
    for j in range(len(alpha)):
        x = alpha[j]
        if x in alpha:
            for k in range(len(alpha)):
                if x == alpha[k]:
                    alpha[k] = t
            t+=1
    res.append(alpha)
answer=0
a = set(map(tuple,res))
for i in a:
    num=res.count(list(i))
    if num>1:
        ar =[]
        for i in range(num):
            ar.append(i)
        c=len(list(combinations(ar,2)))
        answer += c
print(answer)