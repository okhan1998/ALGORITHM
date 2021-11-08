const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();
solution(input);

function solution(input){
    console.log(input.charCodeAt());
}
