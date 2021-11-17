const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split(' ');
let A = '';
let B = '';
A += input[0] + input[1];
B += input[2] + input[3];
console.log(Number(A) + Number(B));