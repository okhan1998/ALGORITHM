const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n"); 
let inputC = +input[0];
let inputArr = [];
for(let i = 1; i < input.length; i++){
    const arr = input[i].split(' ');
    const newArr = arr[1].split('');
    const testCase = {
        rt : +arr[0],
        rs : newArr
    };
    inputArr.push(testCase);
}
solution (inputC, inputArr);

function solution(T, Arr){
    var ret = '';
    var rel = '';
    for(let i = 0; i < T; i++)
    {   
        Arr[i].rs.forEach(x => {
            for(let j = 0; j < Arr[i].rt; ++j){
                ret += x;
            }
        })
        if(i == T-1)
            rel += ret;
        else 
            rel += ret + '\n';
        ret = '';
    }
    console.log(rel);
}