const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
let [N, K] = input.map(x => +x);
// console.log(N, K)
let visited = new Array(100001).fill(0);
let bfs = (N) => {
    if(N == K) return 0;
    let queue = [[N, 0]];
    while(queue.length){
        const [pos, t] = queue.shift();

        if(visited[pos]) continue // 방문한곳이면 방문 x 
        visited[pos] = true; // 방문안한곳이면 방문했다고 체크표시!

        if(pos == K) return t; // 현재위치가 목적지면 현재까지 걸린시간 리턴

        if(pos * 2 <= 100000) queue.push([pos*2, t+1]) // 1.순간이동
        if(pos + 1 <= 100000) queue.push([pos+1, t+1]) // 2.한칸앞으로
        if(pos - 1 >= 0) queue.push([pos-1, t+1]) // 3.한칸뒤로
    }
}
console.log(bfs(N))