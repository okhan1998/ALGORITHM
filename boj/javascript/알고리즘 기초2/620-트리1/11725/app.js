let fs = require("fs");
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split("\n");
let N = +input.shift();
input = input.map(x => x.split(' ').map(y => +y))
let adjarr = Array.from(new Array(N+1), () => Array())// 인접트리 확인
let check = new Array(N+1).fill(0); // 방문체크
let answer = {} // 노드별 부모노드 체크할 객체
for(let i =0; i<input.length; i++){ // 인접트리를 배열에 넣어준다
    
    adjarr[input[i][0]].push(input[i][1])
    adjarr[input[i][1]].push(input[i][0])
}



let dfs = (S) => { //깊이 우선 탐색 방식으로 노드1에서부터 탐색해주는데, **탐색할때 노드의 부모노드를 객체에 넣어준다
    check[S] = 1;
    for(let i=0; i < adjarr[S].length; i++){
        let next = adjarr[S][i];
        if(check[next]) continue;
        answer[next] = S // **
        dfs(next);
    }
}
dfs(1)


let ret = ''
for(let i =2; i <= N; i++){
    ret += answer[i] + '\n'
}

console.log(ret.trim());