const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n').map(x => +x);
let cases = input.shift()
let max = Math.max(...input)
let arr = [0, 1, 2, 4]


for(let i = 4; i <= max; i++){
    arr[i] = (arr[i-1] + arr[i-2] + arr[i-3]) % 1000000009;
}

for(let i = 0; i < cases; i++){
    console.log(arr[input[i]]);
}