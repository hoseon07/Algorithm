def calc(start, end, ten) :
  count = end // 10 - start // 10 + 1
  for i in range(len(result)):
    result[i] += count * ten

def increase_by_number(num, ten) : # 자리수마다 카운팅 해주는 함수
  k = list(str(num))
  for i in k :
    result[int(i)] += ten
  
def solution(start, end, ten) :
  while(start % 10 != 0 and start <= end) :
    increase_by_number(start, ten)
    start += 1

  if start > end:
    return

  while(end % 10 != 9 and end >= start) :
    increase_by_number(end, ten)
    end -= 1
  calc(start, end, ten)
  solution(start // 10, end // 10, ten * 10)

n = int(input())
result = [0 for _ in range(10)];
solution(1, n, 1)
print(*result)