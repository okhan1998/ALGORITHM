const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(x => +x)
let arr = input[1].split(' ').map(x => +x);
let check = new Array(N).fill(false);
let list = [];
let ret = [];
arr.sort((a, b) => a-b);

let dfs = (cnt, M, N) => {
    if(cnt == M){
        ret.push(list.join(' '))
        return ;
    }

    for(let i = 0; i < N; i++){
        if(!check[i]){
            check[i] = true;
            list[cnt] = arr[i];
            dfs(cnt+1, M, N);
            check[i] = false;
        }
    }
    return ;
}

dfs(0, M, N);
console.log(ret.join('\n').trim());