let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let [N, M] = input[0].split(' ').map(x => +x);
let arr = input[1].split(' ').map(x => +x);
let list = [];
let ret = [];
arr.sort((a,b) => a-b);

let dfs = (cnt, M, N) => {
    if(cnt == M){
        ret.push(list.join(' '))
        return ;
    }
    for(let i = 0; i < N; i++){
        if(cnt == 0){
            list[cnt] = arr[i]
            dfs(cnt+1, M, N)
        } else {
            list[cnt] = arr[i]
            if(list[cnt] >= list[cnt-1])
                dfs(cnt+1, M, N)
        }
        
    }
    return ;
}

dfs(0, M, N)
console.log(ret.join('\n'));