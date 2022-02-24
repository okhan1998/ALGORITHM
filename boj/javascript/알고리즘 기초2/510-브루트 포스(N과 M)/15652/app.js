const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, M] = fs.readFileSync(filepath).toString().trim().split(' ').map(x => +x);
let check = new Array(9).fill(false)
let list = [];
let ret = [];

let dfs = (cnt, M, N) => {
    if(cnt == M){
        ret.push(list.join(' '))
        return ;
    }
    for(let i=1; i <= N; i++){
        if(cnt == 0){
        list[cnt] = i;
        dfs(cnt+1, M, N)
        } else {
            list[cnt] = i;
            if(list[cnt] >= list[cnt-1])
                dfs(cnt+1, M, N)
        }
    }
    return ;
}
dfs(0, M, N)
console.log(ret.join('\n'))