const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let N = +input.shift();
input = input[0].split(' ')
let cp = input.splice(0,2).map(x => +x);
let [dr, dc] = input.map(x => +x);
let board = Array.from(Array(N), () => new Array(N).fill(0));
// console.log(board);
let mincnt = 10000;
let move = [
    [-2, -1],
    [-2, 1],
    [0, -2],
    [0, 2],
    [2, -1],
    [2, 1]
]


let bfs = (start) => {
    let queue = []
    queue.push(start)
    while(queue.length){
        let [cr, cc, cnt] = queue.shift();

        if(cr == dr && cc == dc && mincnt > cnt){
            mincnt = cnt;
            continue;
        }
        if(!(cr >= 0 && cr < N && cc >= 0 && cc < N)) continue;
        if(board[cr][cc]) continue;

        board[cr][cc] = 1;

        for(let i =0; i < 6; i++){
            let nr = cr + move[i][0]
            let nc = cc + move[i][1]

            queue.push([nr, nc, cnt+1])
        }
    }
}

bfs([...cp, 0])
if(mincnt == 10000) mincnt = -1
console.log(mincnt);