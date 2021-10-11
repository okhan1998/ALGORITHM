const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split(' ');
const a = BigInt(input[0]);
const b = BigInt(input[1]);
let answer = a + b;
console.log(answer.toString());
