const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
input.shift();
input = input.map(x => +x);
let result = [];
let arr = [0, 1, 2, 4]

input.forEach(x => {
    if(x > 3){
        for(let i = 4; i <= x; i++){
            arr[i] = (arr[i-1] + arr[i-2] + arr[i-3])
        }
    }
    result.push(arr[x]);
})
console.log(result.join('\n').trim());
