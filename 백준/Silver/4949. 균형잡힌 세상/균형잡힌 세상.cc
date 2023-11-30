#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>	
#include <string.h>
int top = -1;
void push(char stack[],char ps) {
	stack[++top] = ps;
}
void pop() {
	--top;
}
int main() {
	while(1)
	{
		top = -1;				
		char stack[100];
		char str[102];
		scanf("%[^\n]s", &str);
		if (str[0] == '.')
			break;
		for (int j = 0; j < 102; j++) {
			if (str[j] == '(')
				push(stack,'(');
			else if (str[j] == '[')
				push(stack, '[');
			else if (str[j] == ')') {
				if (stack[top] == '(')
					pop();
				else {
					printf("no\n");
					break;
				}
			}
			else if (str[j] == ']') {
				if (stack[top] == '[')
					pop();
				else {
					printf("no\n");
					break;
				}
			}
			if (str[j] == '.') {
				if (top == -1) {
					printf("yes\n");
					break;
				}
				else {
					printf("no\n");
					break;
				}
				
			}
		}getchar();
	}
	return 0;
	
}