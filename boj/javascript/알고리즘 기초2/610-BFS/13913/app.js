const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
let [N, K] = input.map(x => +x); 
let check = new Array(100001).fill(0);
let path = new Array(100001).fill(0)
// console.log(N,K)
let queue = [];
let bfs = (N) => {
    if(N == K) return 0;
    queue.push([N,0]);
    check[N] = 1;
    while(queue.length){
        let [cur, t] = queue.shift();
        // console.log(cur,t)
        // if(check[cur]) continue;
        
        if(cur == K) return t;
        
        if(cur * 2 <= 100000 && !check[cur*2]) {
            check[cur*2] = 1;
            queue.push([cur*2, t+1])
            path[cur*2] = cur;
        }
        if(cur + 1 <= 100000 && !check[cur+1]) {
            check[cur+1] = 1;
            queue.push([cur+1, t+1])
            path[cur+1] = cur;
        }
        if(cur - 1 >= 0 && !check[cur-1]){
            check[cur-1] = 1;
            queue.push([cur-1, t+1])
            path[cur-1] = cur;
        } 
    }
}
let time = bfs(N);
let answer = [];
answer.push(K);
for(let i = 0; i <time; i++){
    answer.push(path[answer[i]])
}
console.log(time)
console.log(answer.reverse().join(' ').trim());