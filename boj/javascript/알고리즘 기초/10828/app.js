//입력값 정제
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
input.shift();
let inputarr = [];
for(let i = 0; i < input.length; i++){
    let newarr = input[i].trim().split(' ');
    inputarr.push(newarr)
}
let result = '';

// 코드 실행
let stack = [];
inputarr.forEach(x => {
    if(x[0] == 'push')
        push(+x[1]);
    else if(x[0] == 'pop')
        pop();
    else if(x[0] == 'empty')
        empty();
    else if(x[0] == 'size')
        size();
    else if(x[0] == 'top')
        top();
})
console.log(result.trim());


// 코드에 사용된 함수 
function push(x){
    stack.push(x);
}
function top(){
    if (stack[0] != null)
        result += stack[stack.length - 1] + '\n';
    else 
        result += -1 + '\n';
}

function pop(){
    if (stack[0] != null)
        result += stack.pop() + '\n';
    else 
        result += -1 + '\n';
}

function empty(){
    if(stack[0] == null)
        result += 1 + '\n';
    else
        result += 0 + '\n';
}

function size(){
    result += stack.length + '\n';
}

