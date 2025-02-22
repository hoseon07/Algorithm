const fs = require('fs');
const input = fs
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((v) => v.trim());
input.shift();

function getNumber(str) {
	let num = 0;
	for (let i = 0; i < str.length; i++) {
		const now = Number(str[i]);
		if (!Number.isNaN(now)) {
			num += now;
		}
	}
	return num;
}
console.log(
	input
		.map((v) => [v, v.length, getNumber(v)])
		.sort((a, b) => {
			if (a[1] == b[1]) {
				if (a[2] == b[2]) {
					if (a[0] > b[0]) {
						return 1;
					} else if (a[0] < b[0]) {
						return -1;
					} else {
						return 0;
					}
				} else {
					return a[2] - b[2];
				}
			} else {
				return a[1] - b[1];
			}
		})
		.map((v) => v[0])
		.join('\n')
);
