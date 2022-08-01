const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let [N, M] = input.shift().split(' ').map(x => +x)
input = input.map(x => x.split(' '));
let board = new Array(101).fill(0);
let mina = 5;
let portal = {}

for(let i = 0; i < input.length; i++){
    portal[+input[i][0]] = +input[i][1];
}

let bfs = (start) => {
    
    let queue = [];
    queue.push(start)
    while(queue.length){
        let [cp, cnt, myboard] = queue.shift();
        // newBoard = JSON.parse(JSON.stringify(myboard))
        newBoard = myboard
        if(cp > 100) continue;
        if(cnt > mina) continue;

        if(portal[cp]){ // 사다리 혹은 뱀
            cp = portal[cp]
            newBoard[cp] = 1
        } else newBoard[cp] = 1;

        if(newBoard[100] && mina > cnt){
            mina = cnt;
            continue;
        }
        
        for(let i =1; i <= 6; i++){
            np = cp+i;
            queue.push([np, cnt+1, newBoard])
        }
    }
}
bfs([1, 0, board])
console.log(mina)