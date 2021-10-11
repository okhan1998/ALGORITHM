const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split('\n');
let inputC = +input[0];
let inputarr = [];
for(let i = 1; i <= inputC; i++){
    let arr = input[i].split(' ').map(item => +item);
    inputarr.push(arr);
}
solution (inputC, inputarr);

function solution(C, Arr){
    let ret = 1;
    for (let i = 0; i < C; i++){
        let dis = Arr[i][1] - Arr[i][0];
        for (let j = 1; j < 2147483648; j++){
            if (j*j <= dis && dis <= (j+1)*(j+1))
                if(dis - j*j == 0){
                    ret = j * 2 - 1;
                    break;
                } else if((dis - j*j) <= j){
                    ret = j * 2;
                    break;
                } else if((dis - j*j) > j){
                    ret = j * 2 + 1;
                    break;
                }
        }
        console.log(ret);
    }
}