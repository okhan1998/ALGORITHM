const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
const inputC = +input[0];
const inputArr = input[1].split('').map(item => +item);
solution (inputC, inputArr);

function solution(C, Arr){
    let rel = 0;
    for(let i = 0; i < C; ++i)
        rel += Arr[i];
    console.log(rel);
}

