const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filepath).toString().split(' ').map(item => +item);
solution(input[0]);

function solution(A){
    let answer = 0;
    for(let i = 1; i <= A; ++i){
        answer += i;
    }
    console.log(answer);
}