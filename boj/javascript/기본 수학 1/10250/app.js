const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
const inputC = +input[0];
const inputArr = []
for (let i = 1; i <= inputC; i++){
    const arr = input[i].split(' ').map(item => +item);
    inputArr.push(arr);
}
solution (inputC, inputArr);

function solution(A, Arr){
    
    for(let i = 0; i < A; i++){
        let H = Arr[i][0];
        let W = Arr[i][1];
        let N = Arr[i][2];
        if (N % H != 0 && Math.ceil(N / H) < 10)
            console.log((N % H) + '0' + Math.ceil(N / H));
        else if(N % H == 0 && Math.ceil(N / H) < 10)   
            console.log(H + '0' + Math.ceil(N / H));
        else if (N % H != 0)
            console.log((N % H) + '' + Math.ceil(N / H));
        else if (N % H == 0)
            console.log(H + '' + Math.ceil(N / H));
    }
}