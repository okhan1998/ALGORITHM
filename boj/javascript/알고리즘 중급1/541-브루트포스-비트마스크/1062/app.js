const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let [N, K] = input.shift().split(' ').map(x => +x);
input = input.map(x => x.split(''));
let newalpha = ['b', 'd', 'e','f','g','h','j','k','l','m','o','p','q','r','s','u','w','x','y','z']
let check = new Array(newalpha).fill(0)
let leftalpha = K - 5
let basicalpha = [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
let max = 0;

dfs(0, basicalpha)
console.log(max);

function dfs(cnt, basicalpha){
    if(cnt == leftalpha){
        play(basicalpha)
        return;
    }
    for(let i =0; i < newalpha.length; i++){
        if(check[i]) continue;
        check[i] =1;
        basicalpha[newalpha[i].charCodeAt(0)-97] =1 
        dfs(cnt+1, basicalpha)
        basicalpha[newalpha[i].charCodeAt(0)-97] =0
        check[i] =0;
    }
}

function play(alphacase){
    let readable = 0
    for(let i =0; i<N; i++){
        let flag = 1;
        for(let j=0; j<input[i].length; j++){
            if(!alphacase[input[i][j].charCodeAt(0)-97]){
                flag=0;
                break;
            }
        }
        if(flag) readable++;
    }
    if(max < readable) max = readable;
}
