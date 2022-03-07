const fs = require('fs')
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filepath).toString();
let arr = [];
for(let i = 1; i <= input; i++){
    arr.push(i);
}
let list = [];
let ret = [];
let check = new Array(input).fill(false);
let dfs = (cnt, N) => {
    if(cnt == N){
        ret.push(list.join(' '))
        return;
    }
    for(let i=0; i < N; i++){
        if(!check[i]){
            check[i] = true;
            list[cnt] = arr[i];
            dfs(cnt+1, N)
            check[i] = false;
        }
    }
    return;
}
dfs(0, input);
console.log(ret.join('\n'));