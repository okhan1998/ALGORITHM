const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
let [N, K] = input.map(x => +x);
// console.log(N, K)
let cases = [-1, 1, 2];
let check = new Array(100001).fill(0)
let cnt = 0;
let bfs = (N) => {
    if(N == K) return 0;
    let queue = [];
    queue.push(N)
    while(queue.length){
        let qlen = queue.length;
        // console.log(queue)
        // console.log(cnt);
        cnt++
        while(qlen--){
            let cur = queue.shift();
            if(check[cur]) continue;
            check[cur] = 1;
            let next;
            for(let i=0; i <= 2; i++){
                if(i == 2 && cur < K){
                    next = cur * 2
                    if(next == K) return cnt;
                    else if(next < 0) continue;
                    else queue.push(next);
                } else if(i == 1 && cur < K){
                    next = cur + 1
                    if(next == K) return cnt;
                    else if(next < 0) continue;
                    else queue.push(next);
                } else if(i == 0){
                    next = cur - 1
                    if(next == K) return cnt;
                    else if(next < 0) continue;
                    else queue.push(next);
                } 
            }
        }
        queue = [...new Set(queue)];
    }
}
console.log(bfs(N))