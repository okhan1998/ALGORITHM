let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();
input = +input;

solution(input);

function solution(A){
    let i = 0;
    let tmp = 0;
    let result = A;
    do {
        tmp = (A % 10)*10;
        A = Math.floor((A / 10)) + (A % 10);
        A = (A % 10);
        A = A + tmp;
        i++
    }
    while(A != result)
    console.log(i);
}