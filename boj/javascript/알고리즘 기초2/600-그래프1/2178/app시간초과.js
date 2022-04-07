let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let [H, W] = input.shift().split(' ').map(x => +x);
input = input.map(x => x.split('').map(y => +y));
let check1 = new Array(H*W+1).fill(false);
let check2 = [];
let adjArr = Array.from(Array(H*W+1), () => Array(0))
let min = 1000000000;
let list = [];
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

// console.log(check1)
// console.log(check2)
// console.log(adjArr);

let dfs = (cnt, V) => {
    if(check1[H*W]){
        if(min > list.length)
            min = list.length;
        // dfsarr.push(JSON.parse(JSON.stringify(list)))
        return ; 
    }
    for(let i =0; i<adjArr[V].length; i++){ //조합문제 dfs로 풀듯이 풀었음 단 조합에서는 cnt가 원하는 갯수가 되었을때 종료했는데 여기서는 목적지에 도착하면 종료하듯이 만들었음 
        if(!check1[V] && check2[V]){
        check1[V] = true;
        list[cnt] = V;
        let next = adjArr[V][i]
        if(!check1[next] && check2[next])
            dfs(cnt+1, next);
        check1[V] = false;
        list.pop()
        }
    }
    
}

dfs(0, 1)
console.log(min)
// console.log(dfsarr);