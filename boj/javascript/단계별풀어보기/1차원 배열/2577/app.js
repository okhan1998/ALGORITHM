let fs = require('fs');
let filepath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n').map((item) => +item);
input = ''+(input[0] * input[1] * input[2]);
input = input.split('').map(item => +item);
solution(input);

function solution(input){
    let cnt = [0,0,0,0,0,0,0,0,0,0];
    let j = 0;
    for (let i = 0; i < input.length; i++){
        j = input[i];
        cnt[j] += 1;
    }
    for (let i = 0; i <= 9; i++)
        console.log(cnt[i]);
}