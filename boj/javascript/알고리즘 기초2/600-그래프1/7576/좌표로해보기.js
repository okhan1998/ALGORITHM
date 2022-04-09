const inputs = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const [W, H] = inputs[0].split(' ').map(Number);
inputs.shift();
const tmp = inputs.map(line => line.split(' '));
// console.log(tmp)
let queue = [];
for(let i=0; i<tmp.length; i++){
    for(let j=0; j<tmp[i].length; j++){
        if(tmp[i][j] == '1'){
            let x = j;
            let y = i;
            tmp[i][j] = 1;
            queue.push({x: x, y: y});
        }
    }
}
// console.log(queue)
// console.log(tmp);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];
let preindex = 0;
let day = 0;
while(true){
    let curindex = queue.length;
    let change = 0;
    for(let j=preindex; j < curindex; j++){
        const element = queue[j];

        for(let i = 0; i<4; i++){
            const nx = element.x + dx[i];
            const ny = element.y + dy[i];

            if(0 <= nx && nx < W && 0 <= ny && ny < H && tmp[ny][nx] == '0'){
                tmp[ny][nx] = tmp[element.y][element.x] + 1;
                day = tmp[element.y][element.x] + 1;
                queue.push({x: nx, y: ny});
                change = 1;
            }
        }
    }
    if(change == 0) break;
}
let sw = 0;
let max = 0;
for(let i=0; i<tmp.length; i++){
    if(tmp[i].includes('0')){
        sw = 1;
    }
}
if(sw == 1){
    console.log(-1)
}else{
    console.log(day-1)
}
