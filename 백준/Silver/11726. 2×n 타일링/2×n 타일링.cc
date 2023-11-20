#include <stdio.h>
 
int dp[1001];
int main()
{
    int N;
    int i;
    dp[0]=dp[1]=1;
    scanf("%d",&N);
    for (i=2;i<=N;i++)
    {
        dp[i]=(dp[i-1]+dp[i-2])%10007;
    }
    printf("%d",dp[N]);
}
