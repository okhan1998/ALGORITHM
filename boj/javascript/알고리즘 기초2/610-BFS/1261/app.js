// 일반 bfs문제 + 벽을 최소한으로 뚫어야함 이 두 문제를 해결해야함
// 1. bfs문제: 4좌표로 돌면서 다음방향을 큐에 넣어주고, check 배열을 통해 방문한 곳은 방문하지 않는다.
// 2. 벽을 최소한으로 뚫어야함: *오답 => queue를 벽을 뚫은 갯수로 정렬시킨다 => 시간초과
//                        queue에 값을 넣어줄때, 이동하는 곳에 벽이 없으면 queue에 앞자리에 unshift()로 넣어준다.

let fs = require('fs')
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().trim().split('\n');
// console.log(input);
let [N, M] = input.shift().split(' ').map(x => +x);
let check = Array.from(new Array(M), () => Array(N).fill(0))
input = input.map(x => x.split(''));
// console.log(input);
let dx = [1,-1,0,0]
let dy = [0,0,1,-1];
let answer = [];
let bfs = ([fx, fy, fcnt]) => { 
    let queue = [];
    queue.push([fx,fy, fcnt])
    while(queue.length){
        // queue.sort((a,b) => a[2]-b[2]); => *오답
        let [x, y, cnt] = queue.shift();
        if(check[y][x]) continue;
        check[y][x] = 1;
        if(input[y][x] == '1') cnt++;
        if(y==M-1 && x==N-1) return cnt;

        for(let i =0; i <4; i++){
            let newx = x + dx[i];
            let newy = y + dy[i];

            if(newx >= 0 && newx < N && newy >= 0 && newy < M){
                if(input[newy][newx] == '0'){
                    queue.unshift([newx, newy, cnt])
                    continue;
                }
                queue.push([newx, newy, cnt])
            }
        }
    }
}

console.log(bfs([0,0,0]))
