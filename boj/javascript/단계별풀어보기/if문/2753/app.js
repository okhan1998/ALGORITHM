const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();
input = +input;
solution(input);

function solution(i){
    if (((i % 4 == 0) && (i % 100 != 0)) ||
        ((i % 4 == 0) && (i % 400 == 0)))
        console.log(1);
    else
        console.log(0);
}
