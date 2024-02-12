import math   #math 모듈(라이브러리) 임포트

case_number = int(input()) #테스트케이스 입력

count = 0
result = []     

for i in range(case_number):
  a, b = map(int, input().split(' '))

  distance = b - a    #입력된 값들간의 거리 구하기
  square_root = math.floor(math.sqrt(distance))  
  #sqrt함수를 통해 거리의 제곱근을 구한 후 floor을 통해 내림처리하여 정수만 구하기
  squared = square_root**2  #제곱 구하기
  
  if distance <= 3:  #거리가 3보다 작을때 이동횟수
    count = distance
  
  elif distance == squared:
  #거리가 제곱수와 같을 때
    count = (square_root*2)-1
  
  elif squared < distance <= square_root + squared:
    #거리가 제곱수보다 크고, 제곱수+제곱근보다 작을때
    count = (square_root*2)
  
  elif square_root + squared < distance:
    count = (square_root*2)+1
 	#거리가 제곱수+제곱근보다 클때
  result.append(count) 

for k in result: ## 입력과 출력을 모두 한번에 하기 위해 for문 사용
  print(k)