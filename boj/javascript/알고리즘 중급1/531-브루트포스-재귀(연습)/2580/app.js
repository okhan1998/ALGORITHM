// 열책 행책 3*3책 3개를 확인해야 할 거 같음
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n').map(x => x.split(' '));
let zerocnt = 0;
let position = []
for(let i = 0; i< 9; i++){
    for(let j= 0; j<9; j++){
        if(input[i][j] == '0') position.push([i, j])
    }
}
zerocnt = position.length; 

let isPossible = (x, y, val) => {
    //가로
    for(let i =0; i < input.length; i++){
        if(input[x][i] == val) return false;
    }
    //세로
    for(let i =0; i < input.length; i++){
        if(input[i][y] == val) return false;
    }
    //3*3
    let threeX = Math.floor(x/3)*3;
    let threeY = Math.floor(y/3)*3;
    for(let i = threeX; i < threeX + 3; i++){
        for(let j = threeY; j < threeY + 3; j++){
            if(input[i][j] == val) return false
        }
    }
    return true
}


let dfs = (cnt) => {
    if(cnt == zerocnt){
        input.map(x => console.log(x.join(' ')))
        process.exit(0)
    }
    let [s, g] = position[cnt]
    for(let i =1; i<10; i++){
        if(isPossible(s, g, i)){
        input[s][g] = i
        dfs(cnt+1)
        input[s][g] = 0
        }
    }
}

dfs(0)