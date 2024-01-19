import sys
input = lambda: sys.stdin.readline().rstrip()
miis = lambda: map(int, input().split())
INF = int(1e9)
OUT, IN, BOTH = 0, 1, 2

def f(dp, outer, inner):
    for i in range(1, N):
        outer_squad = 1 if outer[i-1] + outer[i] <= W else 2
        inner_squad = 1 if inner[i-1] + inner[i] <= W else 2
        verti_squad = 1 if outer[i] + inner[i] <= W else 2
        
        dp[i][OUT] = min(dp[i-1][IN] + outer_squad, dp[i-1][BOTH] + 1)
        dp[i][IN] = min(dp[i-1][OUT] + inner_squad, dp[i-1][BOTH] + 1)
        dp[i][BOTH] = min(dp[i-1][BOTH] + verti_squad, \
                          dp[i-2][BOTH] + outer_squad + inner_squad, \
                          dp[i-1][IN] + outer_squad + 1, \
                          dp[i-1][OUT] + inner_squad + 1)

def case1(): # outer, inner 둘다 연결 안됨(default)
    dp = [[0]*3 for _ in range(N)]
    dp[0][OUT] = dp[0][IN] = 1
    dp[0][BOTH] = 1 if outer[0] + inner[0] <= W else 2
    outer_cpy, inner_cpy = outer[:], inner[:]
    f(dp, outer_cpy, inner_cpy)
    return dp[N-1][BOTH]
    
def case2(): # outer만 연결된다면?
    if outer[0] + outer[N-1] > W:
        return INF
    dp = [[0]*3 for _ in range(N)]
    dp[0][OUT] = dp[0][IN] = 1
    dp[0][BOTH] = 2
    outer_cpy, inner_cpy = outer[:], inner[:]
    outer_cpy[0] = outer_cpy[N-1] = INF
    f(dp, outer_cpy, inner_cpy)
    return dp[N-1][IN]

def case3(): # inner만 연결된다면?
    if inner[0] + inner[N-1] > W:
        return INF
    dp = [[0]*3 for _ in range(N)]
    dp[0][OUT] = dp[0][IN] = 1
    dp[0][BOTH] = 2
    outer_cpy, inner_cpy = outer[:], inner[:]
    inner_cpy[0] = inner_cpy[N-1] = INF
    f(dp, outer_cpy, inner_cpy)
    return dp[N-1][OUT]

def case4(): # outer, inner 둘다 연결된다면? 
    if outer[0] + outer[N-1] > W:
        return INF
    if inner[0] + inner[N-1] > W:
        return INF
    dp = [[0]*3 for _ in range(N)]
    dp[0][OUT] = dp[0][IN] = 1
    dp[0][BOTH] = 2
    outer_cpy, inner_cpy = outer[:], inner[:]
    outer_cpy[0] = outer_cpy[N-1] = INF
    inner_cpy[0] = inner_cpy[N-1] = INF
    f(dp, outer_cpy, inner_cpy)
    return dp[N-2][BOTH]

T = int(input())
for _ in range(T):
    N, W = miis()
    outer = list(miis())
    inner = list(miis())
    if N == 1:
        print(1 if outer[0] + inner[0] <= W else 2)
        continue

    ans1 = case1()
    ans2 = case2()
    ans3 = case3()
    ans4 = case4()
    print(min(ans1, ans2, ans3, ans4))