// 시간초과에서 썼던 dfs check방식은, 
// path라는 변수를 만들어 여태까지 왔던길을 체크했고 && check라는 2차원배열로 왔던 좌표는 다시가지않게 했다.
// 하지만 여기에서 쓴 dfs check방식은,
// 체크를 객체로 만들어, 지나온 알파벳을 키값으로 넣고 벨류를 0,1로 체크해, 위에 사용했던 두가지 방법을 합칠 수 있었고 
// 시간초과 또한 해결했다. 

const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let [R, C] = input.shift().split(' ').map(x => +x);
input = input.map(x => x.split(''))
let check = {}
let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]
let maxpath = 0;
let dfs = (start, cnt) => {
    if(cnt > maxpath) maxpath = cnt;
    let [cy, cx] = start
    for(let i =0; i<4; i++){
        let ny = cy + dy[i];
        let nx = cx + dx[i];
        if(!(ny >= 0 && ny < R && nx >= 0 && nx < C)) continue;
        if(check[input[ny][nx]]) continue;
        check[input[ny][nx]] = 1
        dfs([ny, nx], cnt+1)
        check[input[ny][nx]] = 0
    }
    return ;

}
check[input[0][0]] = 1;
dfs([0, 0], 1);
console.log(maxpath)