const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filepath).toString().trim();
inputs = Number(input);
let answer = 0;
while (input >= 5) {
    answer += parseInt(input/5);
    input /= 5;
}
console.log(answer);