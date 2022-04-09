let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let [W, H] = input.shift().split(' ').map(x => +x);
// console.log(W, H)
input = input.map(x => x.split(' ').map(y => +y));
// console.log(input);
let check2 = [];
let adjArr = Array.from(Array(H*W+1), () => Array(0))
for(let i=0; i<H; i++){
    for(let j=0; j<W; j++){
        check2.push(input[i][j])
    }
}
check2.unshift(0);
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
let rt = []; //익은토마토 위치배열
while(check2.indexOf(1) != -1){ //익은 토마토 위치 찾기 
    let rtp = check2.indexOf(1)
    rt.push(rtp)
    check2[rtp] = '1'
}

let queue = [];
while(rt.length != 0){
    let V = rt.shift()
    check2[V] = 1
    queue.push(V);
}

while(queue.length != 0){
    // console.log(queue)
    let now = queue.shift()
    for(let i=0; i<adjArr[now].length; i++){
        if(check2[adjArr[now][i]] == 0){
            check2[adjArr[now][i]] = check2[now] + 1
            queue.push(adjArr[now][i])
        }
    }
}

check2.splice(0, 1)
if(check2.includes(0)){
    console.log(-1)
} else{
    console.log(Math.max(...check2)-1);
}   

