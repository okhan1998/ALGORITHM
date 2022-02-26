let fs = require('fs');
const { deflateSync } = require('zlib');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let [N, M] = input[0].split(' ').map(x => +x);
let arr = input[1].split(' ').map(x => +x);
let list = [];
let ret = [];
arr.sort((a,b) => a - b)
// console.log(N, M, arr);
let dfs = (cnt, M, N) => {
    if(cnt == M){
        ret.push(list.join(' '))
        return ;
    }
    for(let i = 0; i < N; i++){
        list[cnt] = arr[i]
        dfs(cnt+1, M, N)
    }
    return ;
}

dfs(0, M, N)
console.log(ret.join('\n'));