const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim();
input = +input;
let bir = Array.from(Array(input), () => new Array(2));

bir[0] = [0, 1];
bir[1] = [1, 0];

for(let n = 2; n < input; n++){
    bir[n][0] = BigInt(bir[n-1][0] + bir[n-1][1]); 
    bir[n][1] = BigInt(bir[n-1][0]); 
}


sum = BigInt(bir[input-1][0]) + BigInt(bir[input-1][1]);
console.log(sum.toString());