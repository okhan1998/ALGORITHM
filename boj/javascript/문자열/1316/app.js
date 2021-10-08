const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split('\n'); 
let inputArr = [];
let inputC = +input[0];
for(let i = 1; i < input.length; i++){
    inputArr.push(input[i].split(''));
}
solution(inputC, inputArr)

function solution(C, Arr){
    var check = [];
    var cnt = 0;
    for(let i = 0; i < C; i++){
        
        for(let j = 0; j < Arr[i].length; j++){
            if (check.indexOf(Arr[i][j]) == -1){
                check.push(Arr[i][j]);
            }
            else if(check.indexOf(Arr[i][j]) != -1 && Arr[i][j] == Arr[i][j-1])
            {}
            else 
                break;
            if (j == (Arr[i].length - 1))
                cnt += 1;
        }
        check = [];
    }
    console.log(cnt);
}