const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filepath).toString();
let sum = 1;
solution(input);

function solution(C){
    if (C == 0)
        console.log('1');
    else{
    rec(C);
    console.log(sum);
    }
}

function rec(C){
    if(C > 0){
        sum *= C;
        rec(C-1);
    }
}