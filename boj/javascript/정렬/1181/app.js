const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
input.shift();
input.sort((a, b) =>  a.length - b.length || a.localeCompare(b))

const uniqueValues = new Set(input);

console.log(Array.from(uniqueValues).join('\n'));


