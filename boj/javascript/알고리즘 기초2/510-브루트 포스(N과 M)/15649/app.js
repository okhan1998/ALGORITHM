const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, M] = fs.readFileSync(filepath).toString().trim().split(' ').map(x => +x);
let check = new Array(9).fill(false);
let list = [];
let ret = [];

let dfs = (cnt, N, M) => {
    if(cnt==M){
        ret.push(list.join(' '))
        return ;
    }
    for(let i = 1; i<=N; i++){
        if(!check[i]){
            check[i] = true;
            list[cnt] = i;
            dfs(cnt+1, N, M);
            check[i] = false;
        }
    }
    return ;
}

dfs(0, N, M);
console.log(ret.join('\n'));