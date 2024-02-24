
#include<stdio.h>

int main() {
	int n, m, i, a, b, pack = 1000, solo = 1000;
	scanf("%d %d", &n, &m);
	for (i = 0; i < m; i++) {
		scanf("%d %d", &a, &b);
		if (a < pack) pack = a;
		if (b < solo) solo = b;
	}
	a = n / 6;
	b = n % 6;
	if (b * solo >= pack) {
		printf("%d", pack * a + pack);
	}
	else if (solo * 6 < pack) {
		printf("%d", n * solo);
	}
	else {
		printf("%d", a * pack + b * solo);
	}
    	return 0;
}