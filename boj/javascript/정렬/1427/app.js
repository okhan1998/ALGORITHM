const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(item => parseInt(item));
input.sort((a, b) => b - a);
console.log(input.join('').trim());