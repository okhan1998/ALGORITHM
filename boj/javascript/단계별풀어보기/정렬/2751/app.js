const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));


const N = input.shift();
const sorted = input.sort((a, b) => a - b);

console.log(sorted.join('\n'));
