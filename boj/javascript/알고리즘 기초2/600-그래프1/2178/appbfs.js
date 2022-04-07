let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let [H, W] = input.shift().split(' ').map(x => +x);
input = input.map(x => x.split('').map(y => +y));
let check1 = new Array(H*W+1).fill(false);
let check2 = [];
let adjArr = Array.from(Array(H*W+1), () => Array(0))
let bfsarr = []
for(let i=0; i<H; i++){// 방문가능 여부 1차원 배열로 만들어주기 
    for(let j =0; j<W; j++){
        check2.push(input[i][j])
    }
}
for(let i=1; i<= H*W; i++){ // 인접리스트 만들기
    if(i % W == 0 && H*W-i<W){}
    else if(i % W == 0){
        adjArr[i].push(i+W)
        adjArr[i+W].push(i)
    }else if(H*W-i<W){
        adjArr[i].push(i+1)
        adjArr[i+1].push(i)
    }else{
        adjArr[i].push(i+W)
        adjArr[i+W].push(i)
        adjArr[i].push(i+1)
        adjArr[i+1].push(i)
    }
}
check2.unshift(0);

let bfs = (V) => {
    let queue = [];
    queue.push(V)
    check1[V] = true;
    while(queue.length != 0){
        
        let now = queue.shift()
        bfsarr.push(now)
        for(let i=0; i<adjArr[now].length; i++){
            if(!check1[adjArr[now][i]] && check2[adjArr[now][i]]){
                check1[adjArr[now][i]] = true;
                queue.push(adjArr[now][i])
            }
        }
    }
    return ;
}
bfs(1);
console.log(bfsarr)

