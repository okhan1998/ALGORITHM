const fs = require('fs');
const input = +fs.readFileSync('./input.txt').toString();
console.log(input);
let r = input;
console.log((r * r * Math.PI).toFixed(6));
console.log((2 * r * r).toFixed(6));