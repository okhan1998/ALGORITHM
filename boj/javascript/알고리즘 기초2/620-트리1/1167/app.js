let fs = require("fs");
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split("\n");
let N = +input.shift()
input = input.map(x => x.split(' ').map(y => +y))

// 1. 각 노드의 인접리스트를 만들어주고 인접노드와의 길이도 체크할 수 있는 리스트를 만든다
// 2. 시작지점을 바꿔가며, bfs로 돌면서 노드 사이의 최대 거리를 찾는다.
// 1-2 번으로만 진행했더니 시간초과, 어느 노드가 가장먼지 특정하고 거기에대한 거리를 찾아야 될 거 같음
let adjArr = Array.from(Array(N+1), () => new Object())
for(let i=0; i<input.length; i++){
    cur = input[i][0]
    for(let j=1; j<input[i].length-1; j = j+2){
        let node = input[i][j]
        let distance = input[i][j+1]

        adjArr[cur][node] = distance
    }
}

let maxvalue = 0;
let maxnode = 0;
let check = new Array(N+1).fill(0);
// let bfs = (S) => {
//     let queue = [];
//     queue.push([S, 0])
//     while(queue.length){
        
//         let [now, total] =  queue.shift()
//         if(check[now]) continue;
//         if(total > maxvalue) {
//             maxvalue = total
//             maxnode = now;
//         }
//         check[now] = 1;
//         for(let adj in adjArr[now]){
//             let next = +adj
//             let distance = adjArr[now][next]
//             queue.push([next, total+distance])
//         }
//     }
// }

let dfs = (S, total) => {
    if(total > maxvalue) {
        maxvalue = total
        maxnode = S;
    }
    check[S] = 1;
    for(let adj in adjArr[S]){
        let next = +adj
        if(check[next]) continue;
        dfs(next, total+adjArr[S][next])
        check[next] = 0;
    }
}
dfs(1, 0)
check.fill(0)
dfs(maxnode, 0);


console.log(maxvalue)