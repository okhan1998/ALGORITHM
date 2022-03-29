let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let [N, M, V] = input.shift().split(' ').map(x => +x);
input = input.map(x => x.split(' ').map(y => +y))
let adjArr = Array.from(Array(N+1), () => Array(0))
let check = new Array(N+1).fill(false)
let dfsarr = [];
let bfsarr = [];

for(let i=0; i < M; i++){
    let [a, b] = input[i]
    adjArr[a].push(b)
    adjArr[b].push(a)
}
adjArr.map(x => x.sort((a,b) => a-b));
let dfs = (V) => {
    check[V] = true;
    dfsarr.push(V);
    for(let i=0; i < adjArr[V].length; i++){
        let next = adjArr[V][i]
        if(!check[next])
            dfs(next)
    }
    return ;
}
let bfs = (V) => {
    let queue = [];
    queue.push(V)
    check[V] = true;
    while(queue.length != 0){
        let now = queue.shift()
        bfsarr.push(now);
        for(let i=0; i<adjArr[now].length; i++){
            if(!check[adjArr[now][i]]){
                check[adjArr[now][i]] = true;
                queue.push(adjArr[now][i])
            }
        }
    }
    return ;
}
dfs(V);
console.log(dfsarr.join(' '))
check.fill(false);
bfs(V);
console.log(bfsarr.join(' '))
