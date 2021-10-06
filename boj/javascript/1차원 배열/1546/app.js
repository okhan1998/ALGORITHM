let fs = require('fs');
let filepath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let inputC = +input[0];
let inputArr = input[1].split(' ').map(item => +item);
solution (inputC, inputArr);

function solution(A, Arr){
    let tmp = []
    let max = Math.max(...Arr);
    let total = 0;
    Arr.forEach(x => {
        tmp.push(x/max*100);
    })
    tmp.forEach(x => {
        total += x;
    })
    console.log(total/A);
}