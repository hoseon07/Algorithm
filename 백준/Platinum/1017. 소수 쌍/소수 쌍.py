	
import sys
import collections
import math
 
VMAX = 52
SOURCE = 50
SINK = 51
NN = 2000
 
primes = [True] * (NN)
primes[1] = False
for i in range(2, NN):
  if primes[i]:
    for j in range(i*2, NN, i):
      primes[j] = False
 
def isPrime(val):
  return primes[val]
 
def bfs(flow, capacity, source, sink):
  parent = [-1] * VMAX
  q = collections.deque([source])
  parent[source] = source
  while len(q) != 0:
    item = q.popleft()
    for i in range(VMAX):
      if parent[i] == -1 and capacity[item][i] - flow[item][i]:
        q.append(i)
        parent[i] = item
  return parent
 
def maxFlow(capacity, source, sink, flow):
  rst = 0
  while True:
    parent = bfs(flow, capacity, source, sink)
    if parent[sink] == -1:
      return rst
    #minimum
    node = sink
    m = math.inf
    while node != source:
      m = min(m, capacity[parent[node]][node] - flow[parent[node]][node])
      node = parent[node]
    #add
    rst += m
    node = sink
    while node != source:
      flow[parent[node]][node] += m
      flow[node][parent[node]] -= m
      node = parent[node]
 
def solve():
  n = int(sys.stdin.readline().rstrip())
  arr = list(map(int, sys.stdin.readline().rstrip().split()))
  even = []
  odd = []
  for i in range(n):
    if arr[i] % 2 == 0:
      even.append(i)
    else:
      odd.append(i)
  # build graph
  graph = [[0] * VMAX for _ in range(VMAX)]
  for i in even:
    graph[SOURCE][i] = 1
  for i in odd:
    graph[i][SINK] = 1
  for i in even:
    for j in odd:
      if isPrime(arr[i] + arr[j]):
        graph[i][j] = 1
  rst = []
  while True:
    flow = [[0] * VMAX for _ in range(VMAX)]
    val = maxFlow(graph, SOURCE, SINK, flow)
    if val == n // 2:
      if arr[0] % 2 == 0: # even 
        for i in odd:
          if flow[0][i] == 1:
            rst.append(arr[i])
            graph[0][i] = 0
      else:
        for i in even:
          if flow[i][0] == 1:
            rst.append(arr[i])
            graph[i][0] = 0
    else:
      break
  if len(rst) == 0:
    print(-1)
  else:
    rst.sort()
    for item in rst:
      print(item, end = ' ')
    print("")
 
solve()
 