let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const gameBoard = [];
for(let i =1; i <= N; i++){
    gameBoard.push(input[i].split(''));
}

const check = Array.from(Array(N), () => Array(M).fill(0));
const dx = [-1, 0, 1, 0]; // 동서남북 좌표
const dy = [0, 1, 0, -1];
let flag = 0; // 재귀 탈출을 위한 플래그
let start;

function dfs(x, y, cnt) {
    if(flag) return; 

    for(let i =0; i < 4; i++) {
        const[nx, ny] = [x+dx[i], y+dy[i]];
        if(nx <= -1 || ny <= -1 || nx >= N || ny >= M) continue;
        if(gameBoard[nx][ny] != gameBoard[start.x][start.y]) continue;
        if(!check[nx][ny]){
            check[nx][ny] = 1;
            dfs(nx, ny, cnt + 1);
            check[nx][ny] = 0;
            continue;
        } else if (cnt >= 4 && nx == start.x && ny == start.y){
            flag = 1;
            return;
        }
    }
}

for (let x = 0; x < N; x++){
    for(let y= 0; y < M; y++){
        start = {x, y};
        check[x][y] = 1; // (0,0) ~ (N-1,M-1)까지 조회해야 하므로 방문했다면 방문을 해제해줘야한다.
        dfs(x, y, 1);
        check[x][y] = 0;
        if(flag) break;
    }
}
if(flag) console.log('Yes');
else console.log('No');
