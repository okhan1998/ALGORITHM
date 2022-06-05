let fs = require('fs')
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().trim().split(' ').map(x => +x);
let [N, K] = input;
// console.log(N, K);
let answer = []
let check = new Array(100001).fill(0);
let bfs = (N) => {
    if(N == K) return 0;
    let queue = [];
    queue.push([N, 0])
    while(queue.length){
        let [cur, time] = queue.shift()
        if(check[cur]) continue;
        if(answer.length){
            if(time >= answer[0])
                continue ; 
        }
        if(cur == K){
            answer[0] = time;
            continue;
        } 

        check[cur] = 1;

        if(cur*2 <= 100000) queue.push([cur*2, time])
        if(cur-1 >= 0) queue.push([cur-1, time+1])
        if(cur+1 <= 100000) queue.push([cur+1, time+1])
    }

    return answer[0];
}
console.log(bfs(N))

// console.log(answer[0])