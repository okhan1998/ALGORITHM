let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let inputC = +input[0];
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
    for(let i = 0; i < inputC; ++i){
        console.log('Case #%d:', i + 1, inputArr[i].arr[0] +inputArr[i].arr[1]);
    }   
}