let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let number = +input[0];
solution (number);


function solution(N){
    let min = N;
    let tmp = 0;
    let K = 0; 
    let ret = 0;
    for (let i = 1; i*5 <= N; i++){
        tmp = N - i*5;
        if (tmp % 3 === 0){
          K = tmp / 3;
          if (min >= K + i)
            min = K + i;
            ret = min; 
        }
        tmp = 0;
        K = 0;
    }
    for (let i = 1; i*3 <= N; i++){
        tmp = N - i*3;
        if (tmp % 5 == 0){
          K = tmp / 5;
          if (min >= K + i)
            min = K + i;
            ret = min; 
        }
        tmp = 0;
        K = 0;
    }
    if (ret == 0)
        console.log(-1);
    else 
        console.log(ret);
}
