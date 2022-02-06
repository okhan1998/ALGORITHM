let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map(i => +i);
let stack = [];
let result = new Array(input.length).fill(-1);

for(let i = 0; i < input.length; i++){
    while(stack.length && input[stack[stack.length - 1]] < input[i]){
        result[stack.pop()] = input[i];
    }
    stack.push(i);
}
console.log(result.join(' '));