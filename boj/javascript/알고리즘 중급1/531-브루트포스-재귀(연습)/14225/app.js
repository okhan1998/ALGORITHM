// 시간초과가 나는데 왜 나는지 모르겠다
// 백트래킹을 이용해서 모든 부분수열을 tmp를 통해 체크함
// indexof or for을 이용해서 tmp를 인덱스0부터 체크함
// 하지만 시간초과 ㅠ


const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');

// console.log(input);
let N = +input[0]
let nArr = input[1].split(' ').map(x => +x)
let check = Array(N).fill(false);
let tmp = Array(2000000).fill(false)
// console.log(tmp)

let dfs = (cnt, value) => {
    tmp[value] = true;
    if(cnt == N) return ; 
    for(let i =0; i < N; i++){
        if(check[i]) continue ;
        check[i] = true;
        dfs(cnt+1, value + nArr[i])
        check[i] = false;
    }
    return ; 
}
dfs(0, 0)
// console.log(tmp)
let answer = tmp.indexOf(false);
console.log(answer);
// for(let i =1; i <= 2000000; i++){
//     if(!tmp[i]){
//         answer = i
//         break;
//     }
// }