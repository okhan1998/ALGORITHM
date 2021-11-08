const fs = require('fs');
const line = fs.readFileSync("./input.txt", "utf8");
let input = line.trim().split(' ').map(item => +item);

let A = input[0];
let B = input[1];
let C = input[2];

if(B >= C)
    console.log(-1);
else
    console.log(Math.floor(A / (C - B) + 1));