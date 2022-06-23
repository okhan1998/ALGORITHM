const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');

let N = +input.shift()
let check = new Array(N).fill(0);
let answer = 0;

let isPossible = (cnt) => {
    for(let i =0; i < cnt; i++){
        if(check[i] == check[cnt]) return false // 같은 열에 들어갈 수 없게함 
        if(Math.abs(check[cnt] - check[i]) == cnt - i) return false // 대각선에 위치할 수 없게함
    }
    return true;
}

let dfs = (cnt) => {
    if(cnt == N){
        answer++
        return ; 
    }
    for(let i =0; i<N; i++){// 같은 행에 들어갈 수 없게 함
        if(check[cnt]) continue;
        check[cnt] = i
        if(isPossible(cnt)) dfs(cnt+1)
        check[cnt] = 0;
    }
}
dfs(0)
console.log(answer)
