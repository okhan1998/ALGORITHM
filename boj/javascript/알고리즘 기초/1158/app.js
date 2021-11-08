const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let inputSplit = fs.readFileSync(filepath).toString().trim().split(' ');
let rotate = [];
		let answer = "<";
		let m = Number(inputSplit[0]) + 1;
		let k = Number(inputSplit[1]);
		let count = 0;

		for (let i = 1; i < m; i++) {
  			rotate.push(i);
		}

		while (rotate.length) {
  			count++;
  			if (count === k) {
    			answer += rotate.shift();
    			if (rotate.length) {
      				answer += ", ";
      				count = 0;
    			} else {
      				answer += ">";
    			}
  			} else {
    			rotate.push(rotate.shift());
  			}
		}

	console.log(answer);