const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// dfs로 섬의 갯수를 찾고
// bfs로 섬과 섬의 최단거리를 구할 것임


const n = +input.shift();
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let board = input.map((i) => i.split(' ').map(Number));
let visited = Array.from(Array(n), () => Array(n).fill(false));
let islandCnt = 0

function check(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function dfs(x, y, islandCnt){ // 섬의 갯수를 셀때, dfs를 이용하여 구할 것임
    visited[x][y] = true;
    board[x][y] = islandCnt;

    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (check(nx, ny) && board[nx][ny] && !visited[nx][ny])
            dfs(nx, ny, islandCnt);
    }
}

for(let i=0; i < n; i++) {
    for(let j = 0; j < n; j++){
        if(board[i][j] && !visited[i][j])
            dfs(i, j, ++islandCnt);
    }
}

function bfs(islandCnt) {
    let queue = [];
    visited = Array.from(Array(n), () => Array(n).fill(0));

    for(let i=0; i < n; i++){
        for(let j=0; j < n; j++){
            if(board[i][j] == islandCnt){
                visited[i][j] = 1;
                queue.push([i, j]);
            }
        }        
    }

    let cnt = 0;
    while(queue.length) {
        let qlen = queue.length;
        while(qlen--){
            let cur = queue.shift();
            let x = cur[0];
            let y = cur[1];

            for(let i=0; i < 4; i++){
                let nx = x + dx[i];
                let ny = y + dy[i];

                if(!check(nx, ny)) continue;
                if(board[nx][ny] !== 0 && board[nx][ny] !== islandCnt) return cnt;
                if(board[nx][ny] === 0 && !visited[nx][ny]){
                    visited[nx][ny] = 1;
                    queue.push([nx, ny]);
                }
            }
        }
        cnt++
    }
}
let ans = Infinity;
for(let i = 1; i <= islandCnt; i++){
    ans = Math.min(ans,bfs(i));
}

console.log(ans);