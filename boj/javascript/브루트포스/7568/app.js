const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let inputC = +input[0];
let inputArr = [];
for (let i = 1; i <= inputC; i++){
    let newArr = input[i].split(' ').map(item => +item);

    inputArr.push(newArr);
}
solution(inputC, inputArr);

function solution(C, Arr){
    let rank = [];
    for(let i = 0; i < C; i++){
        let counter = 0;
        for(let j = 0; j < C; j++){
            if(Arr[i][0] < Arr[j][0] && Arr[i][1] < Arr[j][1]){
                counter++;
            }
        }
        rank.push(counter + 1);
    }
    console.log(rank.join(' '));
}