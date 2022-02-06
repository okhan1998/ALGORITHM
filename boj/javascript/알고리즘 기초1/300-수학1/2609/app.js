const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split(' ');
input = input.map(item => +item);
let ret = '';

for(let i = Math.min(...input); i >= 1; i--){
    if(input[0] % i == 0 && input[1] % i == 0){
        ret += i + '\n';
        break;
    }
}

for(let i = Math.max(...input); i <= 100000000; i++){
    if(i % input[0] == 0 && i % input[1] == 0){
        ret += i + '\n';
        break;
    }
}

console.log(ret.trim());