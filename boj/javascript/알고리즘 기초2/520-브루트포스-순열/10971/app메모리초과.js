const fs = require('fs')
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let N = +input.shift();
let arr = input.map(x => x.split(' ').map(y => +y));
// console.log(N, arr);
let city = [];
for(let i = 0; i < N; i++){
    city.push(i);
}
let ret = [];
let list = [];
let check = new Array(N).fill(false);
let tmp = 0;
let min = 987654321;

let dfs = (cnt, N) => { // 도시가는 순서 만들기
    if(cnt == N){
        ret.push(JSON.parse(JSON.stringify(list)));
        return;
    }
    for(let i = 0; i < N; i++){
        if(!check[i]){
            check[i] = true;
            list[cnt] = city[i]
            dfs(cnt+1, N)
            check[i] = false;
        }
    }
    return;
}
dfs(0, N);

// ret = ret.map(x => x.split(' ').map(y => +y));
// console.log(ret);
for(let i =0; i < ret.length; i++){ //각 순서에 맞는 비용구하기
    for(let j =1; j < N; j++){
        if(arr[ret[i][j-1]][ret[i][j]] == 0)
            break;
        tmp += arr[ret[i][j-1]][ret[i][j]]
        if(j == N-1){
            if(arr[ret[i][j]][ret[i][0]] == 0)
                break;
            tmp += arr[ret[i][j]][ret[i][0]]
            if(min >= tmp)
                min = tmp;
        }
    }
    tmp = 0;
}

console.log(min)