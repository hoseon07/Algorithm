#include <stdio.h>
#include <stdlib.h>

typedef struct
{
	int x;
	int y;
} greed;

int compare(const void *a, const void *b)
{
	greed A = *(greed *)a;
	greed B = *(greed *)b;
	if (A.y > B.y)
		return 1;
	else if (A.y == B.y)
	{
		if (A.x > B.x)
			return 1;
		else
			return -1;
	}
	else
		return -1;
}

int main()
{
	greed arr[100010];
	int i, j, n, count;
	scanf("%d", &n);
	i = 0;
	while (i < n)
	{
		scanf("%d %d", &arr[i].x ,&arr[i].y);
		i++;
	}
	qsort(arr, n, sizeof(greed), compare);
    // 여기까지 정렬하는 부분
	i = 1;
	j = 0;
	count = 1; // 1,4는 확정이기에 1부터 시작
	while (i < n)
	{
		if (arr[j].y <= arr[i].x) // 임의로 j잡아주고
		{
			j = i; // 조건에 만족하면 i값으로 업데이트
			count++; // 갯수 세줌
		}
		i++;
	}
	printf("%d", count);
}