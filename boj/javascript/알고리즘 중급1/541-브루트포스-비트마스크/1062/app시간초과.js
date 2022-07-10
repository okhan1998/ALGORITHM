const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let [N, K] = input.shift().split(' ').map(x => +x);
input = input.map(x => x.split(''));
let newalpha = []
let check;
let leftalpha = K - 5
let basicalpha = {'a':1, 'b':0, 'c':1, 'd':0, 'e':0, 'f':0, 'g':0, 'h':0, 'i':1, 'j':0, 'k':0, 'l':0, 'm':0, 'n':1, 'o':0, 'p':0, 'q':0, 'r':0, 's':0, 't':1, 'u':0, 'v':0, 'w':0,'x':0, 'y':0, 'z':0}
let max = 0;

function solve () {
    if(K < 5){
        console.log(0)
        return ; 
    }
    if(K == 26){
        console.log(N)
        return ;
    }
    tolearn()
    newalpha = new Set(newalpha)
    newalpha = Array.from(newalpha)
    check = new Array(newalpha).fill(0)
    // console.log(newalpha)
    dfs(0, basicalpha)

    console.log(max);
    return ;
}
function tolearn () {
    let tmpinput = JSON.parse(JSON.stringify(input))
    tmpinput.forEach((x) => {
        x.splice(0,4)
        x.splice(-4,4)
        x.forEach((y, j) => {
            newalpha.push(y);
        })
    })
}

function dfs(cnt, basicalpha){
    if(cnt == leftalpha){
        play(basicalpha)
        return;
    }
    for(let i =0; i < newalpha.length; i++){
        if(check[i]) continue;
        check[i] =1;
        basicalpha[newalpha[i]] = 1;
        dfs(cnt+1, basicalpha)
        basicalpha[newalpha[i]] = 0;
        check[i] =0;
    }

}

function play(basicalpha){
    let readable = 0
    for(let i =0; i<N; i++){
        let flag = 1;
        for(let j=0; j<input[i].length; j++){
            if(basicalpha[input[i][j]] != 1){
                flag=0;
                break;
            }
        }
        if(flag) readable++;
    }
    if(max < readable) max = readable;
}


solve()