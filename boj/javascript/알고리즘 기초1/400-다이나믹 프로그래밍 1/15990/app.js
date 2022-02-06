let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n').map(v=>Number(v)).filter(v=> v != 0);
let cases = Number(inputs[0]);
inputs.shift();
let max = Math.max(...inputs);
let arr = [[0,0,0], [1,0,0], [0,1,0], [1,1,1]];
for(let i=4; i<=max; i++){
    arr[i] = [(arr[i-1][1] + arr[i-1][2]) % 1000000009, (arr[i-2][0] + arr[i-2][2]) % 1000000009, (arr[i-3][0] + arr[i-3][1]) % 1000000009];
} 
for(let k=0; k<cases; k++){
    console.log(arr[inputs[k]].reduce((a,v)=> a+v, 0) % 1000000009);
}