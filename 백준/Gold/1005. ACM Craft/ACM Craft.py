from collections import deque
import sys
input = sys.stdin.readline

def solve():
    for _ in range(int(input())):
        n,k = map(int,input().split())
        cost = [0] + list(map(int,input().split()))
        link = [[] for _ in range(n+1)]
        cntLink = [-1] + [0]*(n)
        for _ in range(k):
            a,b = map(int,input().split())
            link[a].append(b)
            cntLink[b] += 1
        end = int(input())

        # 시작 정점들 넣기
        dp = [0]*(n+1)
        q = deque()
        for i in range(1,n+1):
            if cntLink[i] == 0:
                q.append(i)
                dp[i] = cost[i]
                
        # 위상 정렬
        while q:
            curNode = q.popleft()
            for toNode in link[curNode]:
                cntLink[toNode] -= 1
                dp[toNode] = max(dp[toNode], dp[curNode]+cost[toNode])
                if cntLink[toNode] == 0:
                    q.append(toNode)
            
            # 목표 지점의 값을 구했음
            if cntLink[end] == 0:
                print(dp[end])
                break
solve()