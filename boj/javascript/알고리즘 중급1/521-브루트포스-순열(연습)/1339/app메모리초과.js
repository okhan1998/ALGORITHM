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

