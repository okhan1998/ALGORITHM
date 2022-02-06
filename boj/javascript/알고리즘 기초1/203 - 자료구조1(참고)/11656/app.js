const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('');
let arr = [];

while(input.length != 0){
    arr.push(input.join(''));
    input.shift();
}
console.log(arr.sort().join('\n').trim());