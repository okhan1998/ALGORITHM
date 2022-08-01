const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let [N, M] = input.shift().split(' ').map(x => +x)
input = input.map(x => x.split(' '));
let board = new Array(101).fill(0);
let mina = 100;
let portal = {}

for(let i = 0; i < input.length; i++){
    portal[+input[i][0]] = +input[i][1];
}

let bfs = (start) => {
    
    let queue = [];
    queue.push(start)
    while(queue.length){
        let [cp, cnt] = queue.shift();
        if(cp > 100) continue;
        if(cnt > mina) continue;
        if(board[cp]) continue;

        if(portal[cp]){ // 사다리 혹은 뱀
            cp = portal[cp]
            board[cp] = 1
        } else board[cp] = 1;

        if(board[100] && mina > cnt){
            mina = cnt;
            continue;
        }
        
        for(let i =1; i <= 6; i++){
            np = cp+i;
            queue.push([np, cnt+1])
        }
    }
}
bfs([1, 0])
console.log(mina)