const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let [N, M] = input.shift().split(' ').map(x => +x);
let check = Array.from(Array(N), () => new Array(M))
check.forEach(x => x.fill(false))
input = input.map(x => x.split(' ').map(y => +y));
let result = 0;
let dy = [-1,1,0,0]
let dx = [0,0,1,-1]
for(let i =0; i<N; i++){
    for(let j =0; j<M; j++){
        check[i][j] = true;
        dfs(i, j, input[i][j], 1);
        check[i][j] = false;
        fuckUshape(i, j, input[i][j]);
    }
}
console.log(result);


function dfs(y, x, sum, length){ //dfs로 'ㅜ'형태를 제외한 여러 모양 찾기
    if(length >= 4){
        result = Math.max(result, sum)
        return ;
    }
    for(let i = 0; i<4; i++){
        let ny = y + dy[i];
        let nx = x + dx[i]; 
        if(ny >= 0 && ny < N && nx >= 0 && nx < M) {
            if(!check[ny][nx]){
                check[ny][nx] = true;
                
                dfs(ny, nx, sum + input[ny][nx], length + 1)

                check[ny][nx] = false;
            }
        }
    }
}
function fuckUshape(y,x, sum){
    if(y>=0 && y+1<N && x-1>=0 && x+1<M){ // 'ㅜ'
        let sum1 = sum + input[y][x-1] + input[y][x+1] + input[y+1][x]
        result = Math.max(result, sum1)
    }

    if(y-1>=0 && y+1<N && x>=0 && x+1<M){ // 'ㅏ'
        let sum2 = sum + input[y-1][x] + input[y+1][x] + input[y][x+1];
        result = Math.max(result, sum2)
    }

    if(y-1>=0 && y<N && x-1>=0 && x+1<M){ // 'ㅗ'
        let sum3 = sum + input[y-1][x] + input[y][x+1] + input[y][x-1]; 
        result = Math.max(result, sum3);
    }

    if(y-1>=0 && y+1<N && x-1>=0 && x<M){// 'ㅓ'
        let sum4 = sum + input[y-1][x] + input[y+1][x] + input[y][x-1];
        result = Math.max(result, sum4);
    }
    
}

