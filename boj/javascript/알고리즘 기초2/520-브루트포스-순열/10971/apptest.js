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

let minfind = (list) => { // 최소값 찾기
    for(let j =1; j < N; j++){
        if(arr[list[j-1]][list[j]] == 0)
            return ; 
        tmp += arr[list[j-1]][list[j]]
        if(j == N-1){
            if(arr[list[j]][list[0]] == 0)
                return ; 
            tmp += arr[list[j]][list[0]]
            if(min >= tmp)
                min = tmp;
        }
    }
}

let dfs = (cnt, N) => { // 도시가는 순서 만들기
    if(cnt == N){
        tmp = 0;
        minfind(list);
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
console.log(min)


