const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filepath).toString().split(' ').map(item => +item);
solution(input[0]);

function solution(A){
    let answer = '';
    for (let i = A; i > 0; i--){
        if (i == 1)
            answer += i;
        else
            answer += i + '\n';
    }
    console.log(answer);
}