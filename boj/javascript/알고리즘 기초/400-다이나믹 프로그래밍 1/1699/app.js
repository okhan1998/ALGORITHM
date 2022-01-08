const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();
let n = +input;
let arr = [];
for(let i = 0; i <= n; i++){
    arr.push(i);
}
for(let i = 1; i <= n; i++){
    for(let j = 1; j**2<=i; j++){
        arr[i]=Math.min(arr[i], arr[i-j**2]+1);
    }
}
console.log(arr.pop());