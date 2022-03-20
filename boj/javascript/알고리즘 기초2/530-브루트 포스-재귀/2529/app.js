const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift()
let condition = input[0].split(' ');
let list = [];
let ret = [];
let check = new Array(10).fill(false)
let rc = (cnt) => {
    if(cnt == cases+1){
        ret.push(list.join(''));
        return;
    }
    for(let i=0; i <= 9; i++){
        if(!check[i]){
            if(cnt == 0){
                check[i] = true;
                list[cnt] = i;
                rc(cnt+1);
                check[i] = false;
            } else {
                check[i] = true;
                list[cnt] = i;
                if(condition[cnt-1] == '<' && list[cnt-1] < list[cnt]){
                    rc(cnt+1);
                } else if(condition[cnt-1] == '>' && list[cnt-1] > list[cnt]){
                    rc(cnt+1);
                }
                check[i] = false;    
            }


        }
    }
    return;
}
rc(0);
console.log(ret.pop())
console.log(ret[0]);
