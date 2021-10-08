const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split(' ');
let A = input[0].split('');
let B = input[1].split('');
solution(A, B);

function solution(A, B){
    let tmpA = '';
    let tmpB = '';
    for (let i = 2; i >= 0; i--){
        tmpA += A[i];
    }
    for (let i = 2; i >= 0; i--){
        tmpB += B[i];
    }
    if (Number(tmpA) > Number(tmpB))
        console.log(tmpA);
    else
        console.log(tmpB);
}
