//  dfs 풀어야징
// move함수로 위치 변경, 다음 깊이로 넘겨주기, 깊이 카운트 1추가
// 깊이 5되면 종료


const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
// console.log(input)
let N = +input.shift();
input = input.map(x => x.split(' '))
// console.log(input)
let max = 0;

let move = (d, cur) => {
    const result = Array.from({ length: N }, () => Array(N).fill(0));
    if(d == 0){ // left
        for (let c = 0; c < N; c++) {
            let insertRow = 0;
            for (let r = 0; r < N; r++) {
              if (cur[r][c] === 0) continue;
              if (result[insertRow][c] === 0) result[insertRow][c] = cur[r][c];
              else if (result[insertRow][c] === cur[r][c]) result[insertRow++][c] *= 2;
              else result[++insertRow][c] = cur[r][c];
            }
          }
    } else if(d == 1){ // right
        for (let c = 0; c < N; c++) {
            let insertRow = N - 1;
            for (let r = N - 1; r >= 0; r--) {
              if (cur[r][c] === 0) continue;
              if (result[insertRow][c] === 0) result[insertRow][c] = cur[r][c];
              else if (result[insertRow][c] === cur[r][c]) result[insertRow--][c] *= 2;
              else result[--insertRow][c] = cur[r][c];
            }
          }

    } else if(d == 2){ // up
        for (let r = 0; r < N; r++) {
            let insertCol = 0;
            for (let c = 0; c < N; c++) {
              if (cur[r][c] === 0) continue;
              if (result[r][insertCol] === 0) result[r][insertCol] = cur[r][c];
              else if (result[r][insertCol] === cur[r][c]) result[r][insertCol++] *= 2;
              else result[r][++insertCol] = cur[r][c];
            }
          }

    } else if(d == 3){
        for (let r = 0; r < N; r++) {
            let insertCol = N - 1;
            for (let c = N - 1; c >= 0; c--) {
              if (cur[r][c] === 0) continue;
              if (result[r][insertCol] === 0) result[r][insertCol] = cur[r][c];
              else if (result[r][insertCol] === cur[r][c]) result[r][insertCol--] *= 2;
              else result[r][--insertCol] = cur[r][c];
            }
          }
    
    }
    return result;
}


let dfs = (cur, cnt) => {
    if(cnt === 5){
        let tmp = Math.max(...(cur.flat()))
        max = tmp > max ? tmp : max;
        return ; 
    }
    for(let i =0; i < 4; i++){
        let moved = move(i, cur)
        dfs(moved, cnt+1)
    }
    return ; 
}

dfs(input, 0)
console.log(max);