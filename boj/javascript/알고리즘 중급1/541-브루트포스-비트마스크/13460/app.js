const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let [N, K] = input.shift().split(' ').map(x => +x);
console.log(N,K)
input = input.map(x => x.split(''))
// 길: 0 벽:1 구멍:2
// bfs왼쪽에서 왔으면 다음번에 왼쪽으로는 다시 안가게 할 거야
let Bp = [];
let Rp = [];
input.forEach((x,i) => {
    x.forEach((y,j) => {
        if(y == '#') input[i][j] = 1
        if(y == '.') input[i][j] = 0
        if(y == 'O') input[i][j] = 2
        if(y == 'B') Bp.push([i,j]);
        if(y == 'R') Rp.push([i,j]);
    })
})
console.log(Bp, Rp)
function move(i){
    if(i == 0){//left

    } 
    if(i == 1){ //right

    } 
    if(i == 2){// up

    } 
    if(i == 3){// down

    } 
}