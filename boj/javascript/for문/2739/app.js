const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filepath).toString().split(' ').map(item => +item);
solution(input[0]);

function solution(A){
    for(let i = 1; i < 10; ++i){
        console.log ("%d * %d =",A ,i, A*i);
    }
}