let fs = require('fs');
let filepath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
const N = +input[0];
const check = new Array(N + 1).fill(0)
let flag = 0;
let cycle;
let start;
input = input.slice(1);
const adjArr = Array.from(new Array(N+1), () => Array());
input.map((x) => {
    const [from, to] = x.split(' ').map((y) => +y);
    adjArr[from].push(to);
    adjArr[to].push(from);
})

function dfs(L, idx) {
    if (flag) return;

    for(let x of adjArr[idx]){
    if (!check[x]){
        check[x] = 1;
        dfs(L+1, x);
        check[x] = 0;
    } else if(L >= 3 && x == start) {
        flag = 1;
        cycle = check.slice();
        return;
    }
    }   
}

for(let i = 1; i <= N; i++){
    start = i;
    check[i] = 1;
    dfs(1, i)
    check[i] = 0;
    if (flag) break;
}

function bfs(i) {
    const queue = [];
    queue.push(i);
    let dist = 0;
    const check2 = new Array(N+1).fill(0);
    check2[i] = 1;
    while(true){
        dist++;
        const iterator = queue.length;
        for(let i = 0; i <iterator; i++) {
            const from = queue.shift();
            for(let to of adjArr[from]){
                if (cycle[to]){
                    return dist;
                }
                if (!check2[to]) {
                    check2[to] =1;
                    queue.push(to);
                }
            }
        }
    }
}

let result = []
for (let i = 1; i <= N; i++){
    if (cycle[i]){
        result.push(0);
        continue;
    }
    result.push(bfs(i));
}

console.log(result.join(' ').trim());

