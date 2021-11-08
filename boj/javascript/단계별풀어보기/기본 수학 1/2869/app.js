const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split(' ').map(item => +item);

solution(input[0], input[1], input[2])

function solution(A, B, V){

    console.log(Math.ceil((V-B)/(A-B)));
}
