const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('');

let ret = [];
let stack = [];
for(let i = 0; i < input.length; i++){
    if (input[i] == '+' || input[i] == '-'){
        while (stack.length && stack[stack.length - 1] !== "(")
        ret.push(stack.pop());
        stack.push(input[i]);
    } else if(input[i] == '*' || input[i] == '/'){
        while (stack.length && (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")) 
        ret.push(stack.pop());
        stack.push(input[i]);
    } else if(input[i] == '('){
        stack.push(input[i]);
    } else if(input[i] == ')'){
        while(stack[stack.length - 1] != '('){
            ret.push(stack.pop());
        }
        stack.pop();
    } else {
        ret.push(input[i]);
    }
}
while(stack.length != 0){
    ret.push(stack.pop());
}

console.log(ret.join(''));

