let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let [N, M] = input.shift().split(' ').map(x => +x);
// console.log(N, M);
input = input.map(x => x.split(' ').map(y => +y))
// console.log(input);
let adjArr = Array.from(Array(N+1), () => Array(0));
let check = new Array(N+1).fill(false)
let swc = false;
let CC = 0;
for(let i = 0; i < input.length; i++){
    let [a, b] = input[i]
    adjArr[a].push(b)
    adjArr[b].push(a)
}
adjArr.map(x => x.sort((a,b) => a-b))
// console.log(adjArr);

let dfs = (V) => {
    if(!check[V]){
        swc = true;
        check[V] = true;
        for(let i = 0; i < adjArr[V].length; i++){
            let next = adjArr[V][i]
            dfs(next); 
        }
    }
}

for(let i = 1; i <= N; i++){
    if(!check[i]){
        dfs(i)
        if(swc){
            CC += 1;
            swc = false; 
        }
    }
}
console.log(CC)