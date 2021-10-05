const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filepath).toString().split(' ').map((item) => +item);
solution(input[0], input [1]);

function solution(H, M){
    if (M >= 45)
        console.log(H, M - 45)
    else if ( H >= 1 && M < 45)
        console.log(H - 1, 60 + M - 45);
    else if ( H < 1 && M < 45)
        console.log(24 - 1, 60 + M - 45);
}
