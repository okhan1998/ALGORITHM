let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n').map(item => +item);
let number = input.shift();

let k;
let n;
let array = [];

for(let i = 0; i < number * 2; i += 2){
    k = input[i];
    n = input[i+1];
    array.push([k, n]);
}

let floor = [];
let sum = 0;
for (let i = 0; i < array.length; i++){
    // k층 n호
    k = array[i][0];
    n = array[i][1];
    for (let j = 0; j <= k; j++){
        floor[j] = [];
        for(let m = 1; m <= n; m++){
            if(j === 0){
                floor[j].push(m);
            }else{
                sum += floor[j-1][m-1];
                floor[j].push(sum);
                if(m === n){
                    sum = 0;
                }
            }
        }
    }
    console.log(floor[k][n-1]);
}