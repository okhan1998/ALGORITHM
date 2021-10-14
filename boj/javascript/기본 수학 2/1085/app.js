const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(' ').map(item => +item);
const arr = []
arr.push(input[2] - input[0]);
arr.push(input[0])
arr.push(input[3] - input[1])
arr.push(input[1])

console.log(Math.min(...arr));
