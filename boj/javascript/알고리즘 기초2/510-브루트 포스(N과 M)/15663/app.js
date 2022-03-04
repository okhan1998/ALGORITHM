const fs = require('fs')
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let [N, M] = input[0].split(' ').map(x => +x);
let arr = input[1].split(' ').map(x => +x);
arr.sort((a,b) => a-b);
let list = []
let ret = []
let check = new Array(N).fill(false)

let dfs = (cnt, M, N) => {
    if(M == cnt){
        ret.push(list.join(' '));
        return ;
    }

    for(let i=0; i < N; i++){
        if(!check[i]){
            check[i] = true;
            list[cnt] = arr[i]
            dfs(cnt+1, M, N)
            check[i] = false;
        }
    }
    return ;
}

dfs(0, M, N)
let answer = [...new Set(ret)]
console.log(answer.join('\n'));