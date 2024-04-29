import collections,itertools,copy
dy = [1,-1,0,0]
dx = [0,0,1,-1]

def BFS(n,board):
  y,x = piece[n]
  board[y][x] = 0
  dq = collections.deque([(y,x,0)])
  visited = [[0]*5 for i in range(5)]
  arr = []
  distance = 25
  while dq:
    y,x,d = dq.popleft()
    if visited[y][x] or d>distance:
      continue
    visited[y][x] = 1
    for i in range(4):
      y1,x1 = y+dy[i],x+dx[i]
      if 5>y1>=0 and 5>x1>=0:
        if board[y1][x1]==P[0] and not board[y][x]:
          distance = d
          arr.append((y,x))
        else:
          dq.append((y1,x1,d+1))
  return distance,arr

def DFS(i,distance,board):
  global result
  if i==N:
    result = min(result,distance)
    return
  newboard = copy.deepcopy(board)
  d,arr = BFS(P[i],newboard)
  for y,x in arr:
    newboard[y][x] = P[0]
    DFS(i+1,distance+d,newboard)
    newboard[y][x] = 0    

board = [[*map(lambda x:1 if x=="*" else 0,input().strip())] for i in range(5)]

piece,N = {},0
for y in range(5):
  for x in range(5):
    if board[y][x]:
      N += 1
      board[y][x] = N
      piece[N] = y,x

result = 100
for P in itertools.permutations(range(1,N+1),N):
  DFS(1,0,board)
  y,x = piece[P[0]]
  board[y][x] = 0
  for i in range(4):
    y1,x1 = y+dy[i],x+dx[i]
    if 5>y1>=0 and 5>x1>=0:
      board[y1][x1] = P[0]
      DFS(1,1,board)
      board[y1][x1] = 0
  board[y][x] = P[0]
print(result)