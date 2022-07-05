const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let [R, C] = input.shift().split(' ').map(x => +x);
input = input.map(x => x.split(''))
let check = Array.from(Array(R), ()=> Array(C).fill(0))
let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]
let maxpath = 0;
let dfs = (start, path) => {
    if(path.length > maxpath) maxpath = path.length;
    let [cy, cx] = start
    for(let i =0; i<4; i++){
        let ny = cy + dy[i];
        let nx = cx + dx[i];
        if(!(ny >= 0 && ny < R && nx >= 0 && nx < C)) continue;
        if(path.includes(input[ny][nx])) continue;
        if(check[ny][nx]) continue;
        check[ny][nx] = 1
        dfs([ny, nx], [...path,input[ny][nx]])
        check[ny][nx] = 0
    }
    return ;

}

let bfs = (start) => {
    let queue = [];
    queue.push(start)

    while(queue.length != 0){
        let [cur, path] = queue.shift()
        if(path.length > maxpath) maxpath = path.length;
        let [cy, cx] = cur
        for(let i =0; i<4 ; i++){
            let ny = cy + dy[i];
            let nx = cx + dx[i]
            if(!(ny >= 0 && ny < R && nx >= 0 && nx < C)) continue;
            if(path.includes(input[ny][nx])) continue;
            queue.push([[ny, nx], [...path, input[ny][nx]]])
        }
    }
}
dfs([0,0], [input[0][0]])
// bfs([[0,0], [input[0][0]]])
console.log(maxpath)