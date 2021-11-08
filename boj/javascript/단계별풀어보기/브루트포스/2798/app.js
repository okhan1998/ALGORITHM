const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
const newArr = input[0].split(' ');
let IN = +newArr[0];
let IS = +newArr[1];
const inputArr = input[1].split(' ').map(item => +item);


solution(inputArr, IN, IS);

function solution(Arr, C, S){
    let tmp = 0; 
    let min = 0;
    for(let i = 0; i < C; i++){
        for(let j = i+1; j < C; j++){
            for(let k = j+1; k < C; k++){
                tmp = Arr[i] + Arr[j] + Arr[k];
                if(tmp <= S){
                    if((S - min) >= (S - tmp))
                        min = tmp;
                }
            }
        }
    }
    console.log(min);
}
