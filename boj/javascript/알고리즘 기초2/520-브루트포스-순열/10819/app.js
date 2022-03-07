const fs = require('fs')
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let N = +input[0]
let arr = input[1].split(' ').map(x => +x);
for(let i = 1; i <= input; i++){// 1부터 N까지 배열 만들기 
    arr.push(i);
}
let list = [];
let ret = [];
let max = 0;

let check = new Array(input).fill(false);
let dfs = (cnt, N) => { // 백트래킹을 이용해 모든순열만들기 
    if(cnt == N){
        ret.push(list.join(' '))
        return;
    }
    for(let i=0; i < N; i++){
        if(!check[i]){
            check[i] = true;
            list[cnt] = arr[i];
            dfs(cnt+1, N)
            check[i] = false;
        }
    }
    return;
}

const sub = (a, b) => {//두수의 차이 구해주는 함수 
    if(a-b > 0)
        return a-b;
    else
        return (a-b)*(-1);
}


dfs(0, N);
let subarr = new Array(ret.length).fill(0); // 모든 순열에 대한 차이의 합을 넣어줄 배열 만들기
ret = ret.map(x=> x.split(' ').map(y => +y));
for(let i = 0; i <ret.length; i++){ // 차이값 넣어주기 
    for(let j = 0; j <ret[i].length-1; j++){
        subarr[i] += sub(ret[i][j], ret[i][j+1]) 
    }
}

console.log(Math.max(...subarr)); // 차이값중에 가장 큰 값 찾기 




