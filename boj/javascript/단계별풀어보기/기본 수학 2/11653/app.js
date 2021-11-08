const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filepath).toString();
solution(input);


function solution(A){
    let arr = [];
    if (A == 2)
        console.log(2);
    else{
        for(let i = 2; i <= A; i++){
            if(A % i == 0){
                arr.push(i);
                rec(A/i, arr);
                break;

            }
        }
    }
     
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function rec(A, arr){
    for(let i = 2; i <= A; i++){
        if(A % i == 0){
            arr.push(i);
            rec(A/i, arr);
            break;
        }
    }
}
