const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split(' ').map(item => +item);
solution(input);

function solution(arr){
    const A = arr[0];
    const B = arr[1];
    const C = arr[2];

    const margin = C - B;
    const  T = Math.floor(A / (C - B)) + 1

    console.log(margin <= 0 ? -1 : T);
}