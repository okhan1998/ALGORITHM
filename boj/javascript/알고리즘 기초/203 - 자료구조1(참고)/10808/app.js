const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('');

let arr = new Array(26).fill(0);


for(let i = 0; i < input.length; i++){
    if(input[i] >= 'a' && input[i] <= 'z')
        arr[input[i].charCodeAt(0)- 97] += 1;
}
console.log(arr.join(' ').trim());