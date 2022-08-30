// 1. 바이러스 위치를 알아낸다.
// 2. 랜덤으로 벽을 세운다.
// 3. 바이러스위치를 queue에 넣고 bfs돌린다.
// 4. 남은 빈칸에 갯수를 센다.
// 5. 최대값보다 크면 정답을 바꾼다.

const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let [N, M] = input.shift().split(' ').map(x => +x);
input = input.map(x => x.split(' '))
let vp = [];
let awcheck = Array.from(new Array(N), () => Array(M).fill(0)) 
let dx = [1, -1, 0, 0]
let dy = [0, 0, 1, -1]
let answer = 0;

// 1.바이러스 위치 알아낸다.
input.forEach((x,i) => {
    x.forEach((y,j) => {
        if(y != '0') awcheck[i][j] = 1
        if(y == '2') vp.push([i,j])
    })
})


// 3. 바이러스위치를 queue에 넣고 bfs돌린다.
let bfs = (input) => {
    let queue = []
    queue.push(...vp)
    while(queue.length > 0){
        [x,y] = queue.shift();
        for(let i=0; i<4; i++){
            let nx = x + dx[i]
            let ny = y + dy[i]
            
            if(nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if(input[nx][ny] != '0') continue;
            input[nx][ny] = '2'
            queue.push([nx, ny])
        }
    }
    let tmp = 0;
    for(let i =0; i<N; i++){
        for(let j=0; j<M; j++){
            if(input[i][j] == '0') tmp++;
            
        }
    }
    if(tmp > answer){
        answer = tmp
    }
    return ;
}


// 2.랜덤으로 벽을 세운다.
let dfs = (cnt) => {
    if(cnt == 3){
        newinput = JSON.parse(JSON.stringify(input))
        bfs(newinput)
        return;
        
    }
    for(let i =0; i < N; i++){
        for(let j=0; j< M; j++){
            if(awcheck[i][j]) continue;
            awcheck[i][j] = 1;
            input[i][j] = '1'
            dfs(cnt+1)
            input[i][j] = '0'
            awcheck[i][j] = 0;
        }
    }
    return ;
}

dfs(0)
console.log(answer)