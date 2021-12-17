const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim();
input = +input;
let arr = [0, 1, 2];

if(input > 2){
    for(let i = 3; i <= input; i++){
        arr[i] = (arr[i-1] + arr[i-2]) % 10007;
    }
}
console.log(arr[input]);