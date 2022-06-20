// 전에 풀어봤던 연산자끼워넣기 1과 매우 비슷한 문제 사실 차이점을 잘 모르겠다.
// 백트래킹방식으로 연산자의 모든 경우의 수를 구해보면 될 거 같다.
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');

let N = +input[0];
let nArr = input[1].split(' ').map(x => +x);
let oArr = input[2].split(' ').map(x => +x);
let max = -Infinity
let min = +Infinity
let bt = (cnt, value) => {
    if(cnt == N){
        max = Math.max(max, value)
        min = Math.min(min, value)
        return ;
    }
    for(let i =0; i<4; i++){
        if(oArr[i] == 0) continue;

        oArr[i] -= 1
        if(i == 0) bt(cnt+1, value+nArr[cnt])
        if(i == 1) bt(cnt+1, value-nArr[cnt])
        if(i == 2) bt(cnt+1, value*nArr[cnt])
        if(i == 3) bt(cnt+1, parseInt(value/nArr[cnt]))
        oArr[i] += 1
    }
    return ; 
}
bt(1, nArr[0])
console.log(max ? max :0)
console.log(min ? min :0)

