let fs = require("fs");
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split("\n");
let N = +input.shift()
input = input.map(x => x.split(' ').map(y => +y))

// 1. 각 노드의 인접리스트를 만들어주고 인접노드와의 길이도 체크할 수 있는 리스트를 만든다
// 2. 시작지점을 바꿔가며, bfs로 돌면서 노드 사이의 최대 거리를 찾는다.

// 1-2 번으로만 진행했더니 시간초과, 어느 노드가 가장먼지 특정하고 거기에대한 거리를 찾아야 될 거 같음
// => 트리의 지름에 대한 공식 같은 게 존재했음, '아무 점(v)에서 시작해서 가장 먼 점(v1)을 찾고, 그 점(v1)에서 가장 먼 점(v2)를 찾으면, v1과 v2 사이의 거리가 트리의 지름이됩니다.'
// => 위와같은 방법으로 탐색을 하면 시작점을 전부돌지않고 딱 2번만 돌고 찾을 수 있음, bfs방식은 시간초과가 나서 dfs탐색으로 품. dfs가 왜 더 빠른지는 모르겠음

let adjArr = Array.from(Array(N+1), () => new Object())
for(let i=0; i<input.length; i++){ // 인접리스트를 객체랑 배열을 섞어서 만들었는데 너무 잘 만든 거 같음 굿굿굿
    cur = input[i][0]
    let node = input[i][1]
    let distance = input[i][2]

    adjArr[cur][node] = distance
    adjArr[node][cur] = distance
}
// console.log(adjArr)
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