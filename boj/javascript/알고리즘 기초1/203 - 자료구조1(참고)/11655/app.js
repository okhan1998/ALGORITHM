const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('');

for(let i = 0; i < input.length; i++){
    if(input[i] >= 'a' && input[i] <= 'm'){
        input[i] = String.fromCharCode(input[i].charCodeAt(0)+13);
    } else if(input[i] >= 'A'&& input[i] <= 'M'){
        input[i] = String.fromCharCode(input[i].charCodeAt(0)+13);
    } else if(input[i] >= 'n' && input[i] <= 'z'){
        input[i] = String.fromCharCode(12 - (122 - input[i].charCodeAt(0)) + 97);
    } else if(input[i] >= 'N' && input[i] <= 'Z'){
        input[i] = String.fromCharCode(12 - (122 - input[i].charCodeAt(0)) + 97);
    }
}

console.log(input.join(''))