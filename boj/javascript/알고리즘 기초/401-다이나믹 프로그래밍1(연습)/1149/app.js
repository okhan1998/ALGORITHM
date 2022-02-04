const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

let cases = +input.shift();

let arr = [];
for(let i = 0; i < cases; i++){
    arr.push(input[i].split(' ').map(x => +x));
}
for(let i = 1; i < cases; i++){
    arr[i][0] = Math.min(arr[i-1][1], arr[i-1][2]) + arr[i][0];
    arr[i][1] = Math.min(arr[i-1][0], arr[i-1][2]) + arr[i][1];
    arr[i][2] = Math.min(arr[i-1][0], arr[i-1][1]) + arr[i][2];
}
console.log(Math.min(...arr[cases - 1]));