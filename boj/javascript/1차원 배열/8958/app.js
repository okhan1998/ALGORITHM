let fs = require('fs');
let filepath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let inputC = +input[0];
let inputArr = [];
for(let i = 1; i < input.length; ++i){
    inputArr.push(input[i].split(''));
}
solution(inputC, inputArr);

function solution(A, Arr){
    for(let i = 0; i < A; i++){
        let score = 0;
        let ps = 0;

        Arr[i].forEach(x => {
            if (x == 'O'){
                score += ps + 1;
                ps += 1;
            } else
                ps = 0;
        })

        console.log(score);
    }
}
