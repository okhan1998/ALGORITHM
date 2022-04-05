let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let length = input.length
let ret = [];

let dfs = (V, check, adjArr, landexist, list) => {
    check[V] =true;
    list.push(V);
    for(let i =0; i < adjArr[V].length; i++){
        let next = adjArr[V][i];
        if(!check[next] && landexist[next] == 1)// 섬이 있지만 가보지 않은곳
            dfs(next,check,adjArr, landexist, list)
        
    }
    return ;
}

let solution = (inputcase) => {
    let dfsarr = 0;
    let list = [];
    let [W, H] = inputcase.shift().split(' ').map(x => +x)
    if(W == 0 || H == 0) // 너비나 높이가 0 일때는 함수종료.
        return ;
    inputcase = inputcase.map(x => x.split(' ').map(y => +y));
    let adjArr = Array.from(Array(W*H+1) , () => Array(0));
    let check = new Array(W*H+1).fill(false);
    let landexist = [];

    for(let i=0; i<H; i++){ // 섬의 유무를 1차원 배열로 만든다
        for(let j=0; j<W; j++){
            landexist.push(inputcase[i][j])
        }
    }
    landexist.unshift(0)
    for(let i=1; i <= W*H; i++){ // 인접리스트를 만들어준다.
        if(i % W == 0 && H*W - i < W){}
        else if(i % W == 0){
            adjArr[i].push(i+W)
            adjArr[i+W].push(i)
            adjArr[i].push(i+W-1)
            adjArr[i+W-1].push(i)
        }else if(H*W-i < W){
            adjArr[i].push(i+1)
            adjArr[i+1].push(i)

        }else if(i % W == 1){
            adjArr[i].push(i+W)
            adjArr[i+W].push(i)
            adjArr[i].push(i+1)
            adjArr[i+1].push(i)
            adjArr[i].push(i+W+1)
            adjArr[i+W+1].push(i)
        } else {
            adjArr[i].push(i+W)
            adjArr[i+W].push(i)
            adjArr[i].push(i+1)
            adjArr[i+1].push(i)
            adjArr[i].push(i+W+1)
            adjArr[i+W+1].push(i)
            adjArr[i].push(i+W-1)
            adjArr[i+W-1].push(i)
        }
    }

    for(let i = 1; i < landexist.length; i++){ // 시작위치를 바꿔주며 섬탐색
        if(!check[i] && landexist[i] == 1){
            dfs(i, check, adjArr, landexist, list)
            if(list.length != 0){
                dfsarr += 1;
                list = []; 
            }
        }
    }
    return dfsarr;
}

for(let i=0; i < length;){// 케이스마다 나눠준다.
    let V = 0;
    V = +input[0].split(' ').map(x => +x)[1];
    let inputcase = input.splice(0, V+1);
    let answer = solution(inputcase);
    ret.push(answer);
    i += V + 1;
}

console.log(ret.join('\n').trim())