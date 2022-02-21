const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let cases = +input.shift();
let arr = [1, 2, 4]
let ret = [];
input = input.map(x => +x);
for(let i = 0; i < cases; i++){
    for(let j = 3; j < input[i]; j++){
        arr[j] = arr[j-1] + arr[j-2] + arr[j-3]
        
    }
    ret.push(arr[input[i] - 1])
}
console.log(ret.join('\n'));