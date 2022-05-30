let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let N = +input.shift();
let answer = input.pop().split(' ').map(x => +x);
let order = new Array(N+1);
for(let i = 0; i < N; i++){
    order[answer[i]] = i+1; // order각칸수의 의미는 각자리의 위치이다 [emty, x,y,z,t] x:1의위치 y:2의위치 z:3의위치 t:4의위치
}
let check = new Array(N+1).fill(0);
let adjArr = Array.from(Array(N+1), () => Array(0));
for(let i =0; i < input.length; i++){
    let [from, to] = input[i].split(' ').map(x => +x)
    adjArr[from].push(to);
    adjArr[to].push(from);
}
adjArr.map(x => x.sort((a,b) => order[a] - order[b]));
let tmp = []
let dfs = (V) => {
    if(check[V])
        return;
    check[V] = 1;
    tmp.push(V)
    for(let i=0; i< adjArr[V].length; i++){
        if(!check[adjArr[V][i]]){
            let next = adjArr[V][i]
            dfs(next);
        }
    }
    return ;
}
let sol = () => {
    if(answer[0] != 1)
        return 0;
    dfs(1);
    for(let i =0; i<answer.length; i++){
        if(answer[i] != tmp[i])
            return 0;
    }
    return 1;
}

console.log(sol());