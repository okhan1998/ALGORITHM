const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filepath).toString().split(' ').map(item => +item);
solution(input[0]);

function solution(A) {
    let answer = '';
    for (let i = 1; i <= A; ++i){
            for (let j = A - 1; j >= i; --j){
                answer += ' ';
            }
            for (let j = 1; j <= i; ++j){
                answer += '*';
            }
            console.log(answer);
            answer = '';
    }
}