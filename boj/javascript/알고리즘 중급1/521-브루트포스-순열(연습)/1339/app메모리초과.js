// 답은 맞지만 메모리초과
// 1.전체적인 아이디어
// 2.모든알파벳을 객체에 키값에 넣어 각 키값에 9부터~9-알파벳 갯수를 벨류값으로 넣어준다.(나는 백트래킹을 의식해 모든 경우의수를 찾는 방법을 택함. 하지만 메모리초과, 답안지를 보니 알파벳에 우선순위를 나누는 작업을 했어야함 )
// 3.모든 경우의 수가 객체로 표현된다
// 4.모든 객체에한 합을 구한다.
// 5.그중 최대값을 찾는다  


const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let check = new Array(10).fill(0);
+input.shift()
input = input.map(x => x.split(''))
let unique = []
input.forEach(x => x.forEach(y => unique.push(y)))
unique = new Set(unique)
unique = Array(...unique)
let endpoint = unique.length
let rangepoint = 10 - endpoint;
let match = {}
let tmp = []


let dfs = (cnt) => {
    if(cnt==endpoint){
        tmp.push(JSON.parse(JSON.stringify(match)))
        return ;
    }
    for(let i = 9; i >= rangepoint; i--){
        if(check[i]) continue;
        check[i] = 1;
        match[unique[cnt]] = i
        dfs(cnt+1)
        check[i] = 0;
    }
}
dfs(0);
let max = 0;

for(let i =0; i<tmp.length;i++){
    let sum = input.map(x => +x.map(y => tmp[i][y]).join('')).reduce((a,c) => a+c, 0)
    if(sum > max) max = sum;
}
console.log(max);

