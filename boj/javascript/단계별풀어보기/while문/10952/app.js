let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let inputArr = [];
for(let i = 0; i < input.length; i++){
    let arr = input[i].split(' ').map((item) => +item);
    inputArr.push(arr);
}

solution(inputArr);

function solution(Arr){
    for(let i = 0; i < Arr.length; i++){
        if (Arr[i][0] == 0 || Arr[i][1] == 0)
            break;
        console.log(Arr[i][0] + Arr[i][1]);
    }
}
