// 방법이 2가지 정도 있을 거 같음
// 1. 모든 수의 순서 * 모든 부호의 순서 => 최대값, 최솟값 찾기
// 2. 위에 있는 2순서 경우의 수를 좀 더 줄여보자 => 틀림 ㅠㅠ
// 모든 수의 순서 => 일단 수를 오름차순으로 둔다 => 할필요없음 숫자순서대로인데 내가 잘못해석함 
// 모든 부호의 순서 => 최대값일 경우 - / + * 순으로 부호를 넣어주고
//              => 최솟값일 경우 + / - * 순으로 부호를 넣어준다.

// 풀이과정
// 숫자순서대로 부호만 다르게 넣어 모든 경우의 수를 구한다
// 최대값, 최솟값을 구한다
// 많이 틀렸던 이유.
// 1. 숫자를 받을 떄, sort메서드를 사용해 숫자를 정렬하였다.(문제에서는 숫자순서가 고정되어있었는데 내마음대로함)
// 2. dfs에서 다음 깊이로 넘어갈때, cnt와 value를 동시에 올려줬어야했는데 따로따로해주니 복잡해지고 내가 원하던대로 안되었음
// 3. -0과 0을 자바스크립트에서 구별하는데 -0을 0으로 표기해줘야함



const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let NN = +input.shift();
let NArr = input.shift().split(' ').map(x => +x);
let OArr = input.shift().split(' ').map(x => +x)
let initial = +NArr.shift()
let max = -Infinity
let min = Infinity
let dfs = (cnt, value, oper) => {
    if(cnt == NN-1){
        max = Math.max(max, value)
        min = Math.min(min, value)
        return; 
    }
    for(let i =0; i < 4; i++){
        if(OArr[i] <= 0) continue;
        OArr[i] -= 1;

        if(i == 0){
            dfs(cnt+1, value+NArr[cnt])
        }
        if(i == 1){
            dfs(cnt+1, value-NArr[cnt])
        }
        if(i == 2){
            dfs(cnt+1, value*NArr[cnt])            
        }
        if(i == 3){
            dfs(cnt+1, parseInt(value/NArr[cnt])) 
        }
        OArr[i] += 1;
    }
    return;
}
dfs(0, initial)
console.log(max ? max : 0)
console.log(min ? min : 0)

