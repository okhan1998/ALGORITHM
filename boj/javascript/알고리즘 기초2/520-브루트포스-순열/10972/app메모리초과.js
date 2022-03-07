const fs = require('fs')
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let N = +input[0];
let arr = input[1].split(' ').map(x => +x);
let list = [];
let ret = [];
let check = new Array(N).fill(false)

let dfs = (cnt, N) => {// 모든순열 찾기 
    if(cnt == N){
        ret.push(list.join(' '))
        return;
    }
    for(let i =0; i < N; i++){
        if(!check[i]){
            check[i] = true;
            list[cnt] = arr[i]
            dfs(cnt+1, N)
            check[i] = false;
        }
    }
    return;
}


dfs(0, N)
// ret.sort((a,b) => a-b)
// console.log(ret);
let p = ret.indexOf(arr.join(' ')) // 인풋으로 주어진 문자열 위치 찾기
console.log(ret[p+1].trim()) // 다음 순서 출력 