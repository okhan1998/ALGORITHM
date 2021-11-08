const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split(' ');
solution(input);

function solution(input){
    const newArr = [];
    for(let i = 0; i < input.length; i++){
        if(input[i] != '')
        {
            newArr.push(input[i]);
        }
    }
    console.log(newArr.length);
}