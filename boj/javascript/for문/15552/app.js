const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let inputC = input[0];
let inputArr = [];
for (let i = 1; i <= inputC; i++){
    const arr = input[i].split(' ').map((item) => +item);
    const testCase = {
        arr: arr
    };
    inputArr.push(testCase);
}
solution(inputC, inputArr);

function solution(inputC, inputArr){
    let answer = '';
    for (let i = 0; i < inputC; ++i)
    {
        if(i == inputC - 1)
        answer += (inputArr[i].arr[0] + inputArr[i].arr[1]);
        else
        answer += (inputArr[i].arr[0] + inputArr[i].arr[1] + "\n");
    }
    console.log(answer);
}