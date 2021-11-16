let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('');
let stack = [];
let answer = 0;
for (let i in input){
    if(input[i] === '('){
        stack.push(input[i]);
    }else{
        if(input[i-1] === '('){
            stack.pop();
            answer += stack.length;
        }else{
            stack.pop();
            answer ++;
        }
    }
}
console.log(answer);