const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift()
let condition = input[0].split(' ');
let list = [];
let ret = [];
let check = new Array(10).fill(0)

let dfs = (cnt) => {
    if(cnt == cases +1){
        ret.push(list.join(''));
        return;
    }
    for(let i=0; i<=9; i++){
        if(!check[i]){
            if(cnt == 0){
                check[i] = 1
                list[cnt] = i
                dfs(cnt+1)
                check[i] = 0
            } else {
                check[i] = 1;
                list[cnt] = i;
                if(condition[cnt-1] == '<' && list[cnt-1] < list[cnt])
                    dfs(cnt+1)
                if(condition[cnt-1] == '>' && list[cnt-1] > list[cnt])
                    dfs(cnt+1)
                check[i] = 0;
            }
        }
    }
    return;
}
dfs(0);
console.log(ret.pop())
console.log(ret[0])