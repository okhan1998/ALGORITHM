const fs = require('fs')
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
input.pop();
input = input.map(x => x.split(' ').map(x => +x))
let ret = '';
let list = [];

for(let i = 0; i < input.length; i++){
    input[i].shift()
}

let dfs = (cnt, N, T) => {
    
    if(cnt == N){
        ret += list.join(' ') + '\n'
        return;
    }
    for(let i=0; i < input[T].length; i++){
        if(cnt == 0){
            list[cnt] = input[T][i]
            dfs(cnt+1, N, T)
        } else {
            list[cnt] = input[T][i]
            if(list[cnt] > list[cnt-1])
                dfs(cnt+1, N, T)
        }
        // if(!check[T][i]){
        //     check[T][i] = true;
        //     list[cnt] = input[T][i]
        //     dfs(cnt+1, N, T)
        //     check[T][i] = false; 
        // }
    }
    return ; 
}

for(let i=0; i < input.length; i++){
    dfs(0, 6, i)
    if(i !== input.length-1)
        console.log(ret)
    else
        console.log(ret.trim())
    ret = ''
    list = []
}
