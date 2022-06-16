// 방법이 2가지 정도 있을 거 같음
// 1. 모든 수의 순서 * 모든 부호의 순서 => 최대값, 최솟값 찾기
// 2. 위에 있는 2순서 경우의 수를 좀 더 줄여보자
// 모든 수의 순서 => 일단 수를 오름차순으로 둔다
// 모든 부호의 순서 => 최대값일 경우 - / + * 순으로 부호를 넣어주고
//              => 최솟값일 경우 + / - * 순으로 부호를 넣어준다.
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let NN = +input.shift();
let NArr = input.shift().split(' ').map(x => +x).sort((a, b) => a-b);
let OArr = input.shift().split(' ').map(x => +x)
let OArr1 = JSON.parse(JSON.stringify(OArr));
let initial = NArr.shift()
let result = initial
let maxvalue = () => {
    for(let i = 0; i < NN-1; i++){
        if(OArr[1] > 0){
            result -= NArr[i]
            OArr[1] -= 1
            continue;
        }
        if(OArr[3] > 0){
            result = parseInt(result / NArr[i])
            OArr[3] -= 1
            continue;
        }
        if(OArr[0] > 0){
            result += NArr[i]
            OArr[0] -= 1
            continue;
        }
        if(OArr[2] > 0){
            result *= NArr[i]
            OArr[2] -= 1
            continue;
        }

    }
}
let minvalue = () => {
    for(let i = 0; i < NN-1; i++){
        console.log(result)
        if(OArr1[0] > 0){
            result += NArr[i]
            OArr1[0] -= 1
            continue;
        }
        if(OArr1[3] > 0){
            result = parseInt(result / NArr[i])
            OArr1[3] -= 1
            continue;
        }
        if(OArr1[1] > 0){
            result -= NArr[i]
            OArr1[1] -= 1
            continue;
        }
        if(OArr1[2] > 0){
            result *= NArr[i]
            OArr1[2] -= 1
            continue;
        }

    }
}

maxvalue()
// console.log(result)
result = initial
minvalue()
// console.log(result)