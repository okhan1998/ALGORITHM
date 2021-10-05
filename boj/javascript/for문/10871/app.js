let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let inputNX = input[0].split(' ').map(item => +item);
let inputArr = input[1].split(' ').map(item => +item);

solution(inputNX[0], inputNX[1], inputArr)

function solution(N, X, inputArr){
    let answer = '';
    for (let i = 0; i < N; i++){
        if (inputArr[i] < X)
            answer += inputArr[i]+" ";
   }
   console.log(answer);
}