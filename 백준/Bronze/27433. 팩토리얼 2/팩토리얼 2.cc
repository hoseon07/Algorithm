#include <stdio.h>


int main(){
  long long int a, sum=1;
  scanf("%lld", &a);
  for(int i=1; i<=a; i++){
    sum*=i;
  }
  printf("%lld", sum);
  return 0;
}