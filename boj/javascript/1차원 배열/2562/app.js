let fs = require('fs');
let filepath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n').map((item) => +item);

solution(input);

function solution(Arr){
    let max = Arr[0];
    let cnt = 1;
    for(let i = 0; i < input.length; i++){
        if(max < Arr[i]){
            max = Arr[i];
            cnt = (i + 1);
        }
    }
    console.log(max);
    console.log(cnt);
}