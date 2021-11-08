const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const inputArr = [];
let result = '';
for (let i = 0; i < input.length; i++){
    let newarr = input[i].split(' ').map(item => +item);

    inputArr.push(newarr);
}

if(inputArr[0][0] == inputArr[1][0])
    result += inputArr[2][0] + ' ';
else if(inputArr[1][0] == inputArr[2][0])
    result += inputArr[0][0] + ' ';
else
    result += inputArr[1][0] + ' ';

if(inputArr[0][1] == inputArr[1][1])
    result += inputArr[2][1];
else if(inputArr[1][1] == inputArr[2][1])
    result += inputArr[0][1];
else
    result += inputArr[1][1];

console.log(result);
