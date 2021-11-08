let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let inputArr = [];
for(let i = 0; i < input.length; i++){
    let arr = input[i].split(' ').map((item) => +item);
    inputArr.push(arr);
}
for(let i = 0; i < inputArr.length; i++){
    if(inputArr[i][0] == 0  || inputArr[i][1] == 0)
        break;
    else    
        solution(inputArr[i][0], inputArr[i][1]);
}

function solution(A, B){
        console.log(A + B);
}
