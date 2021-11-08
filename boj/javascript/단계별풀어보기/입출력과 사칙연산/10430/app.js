const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();

input = input.split(' ');
let newArr = [];
for (let i = 0; i < input.length; ++i){
    newArr.push(+input[i]);
}
solution(newArr[0], newArr[1], newArr[2]);

function solution(A, B, C){
    console.log((A + B)%C);
    console.log(((A%C) + (B%C))%C);
    console.log((A*B)%C);
    console.log(((A%C) * (B%C))%C);
}