const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filepath).toString();
let arr = [];
arr[0] = 0;
arr[1] = 1;
arr[2] = 1;

for(let i = 3; i <= 20; i++){
    arr[i] = arr[i-1] + arr[i-2];
}

console.log(arr[input]);