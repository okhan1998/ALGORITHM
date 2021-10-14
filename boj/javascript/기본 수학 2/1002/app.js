const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const inputC = +input[0];
const inputArr = [];
for (let i = 1; i < input.length; i++){
    let newarr = input[i].split(' ').map(item => +item);

    inputArr.push(newarr);
}
solution(inputC, inputArr)

function solution(C, Arr){
    for(let i = 0; i < Arr.length; i++){
        let x1 = Arr[i][0];
        let y1 = Arr[i][1];
        let r1 = Arr[i][2];
        let x2 = Arr[i][3];
        let y2 = Arr[i][4];
        let r2 = Arr[i][5];

        let d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        let rsum = r1 + r2;
        let rsub = Math.abs(r2 - r1);

        if (d == 0 && rsub == 0)
            console.log('-1');
        else if(d > rsum || d < rsub)
            console.log('0');
        else if(d == rsum || d == rsub)
            console.log('1');
        else if (d < rsum && d > rsub)
            console.log('2');
    }
}