let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');

const sol = (input) => {
let [N, M] = input[0].split(" ").map((v) => +v);
let adjArr = Array.from(Array(N), () => Array(0));
let check = new Array(N).fill(0);
let flag = 0;
for(let i = 1; i <= M; i++){
    const [a,b] = input[i].split(' ').map(x => +x);
    adjArr[a].push(b);
    adjArr[b].push(a);
}
let dfs = (L,cnt) => {
    check[L] = 1;
    if(flag) return;
    if(cnt == 4){
        flag =1;
        return;
    }
    for(let i = 0; i < adjArr[L].length; i++){
        const next = adjArr[L][i]
        if(!check[next])
            dfs(next, cnt+1)
    }
    check[L] = 0;
}

for(let i = 0; i < N; i++) {
    dfs(i, 0)
}
return flag;
}

console.log(sol(input))