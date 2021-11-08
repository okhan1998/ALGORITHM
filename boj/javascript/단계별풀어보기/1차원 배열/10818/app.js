let fs = require('fs');
let filepath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let inputC = +input[0];
let arr = input[1].split(' ').map((item) => +item);

solution (inputC, arr);

function solution(A, arr){
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < A; i++)
    {
        if(max < arr[i])
            max = arr[i];
        if(min > arr[i])
            min = arr[i];
    }
    console.log(min, max);
}
