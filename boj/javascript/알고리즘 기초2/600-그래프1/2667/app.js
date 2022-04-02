let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let size = +input.shift();
input = input.map(x => x.split('').map(y => +y))
let inputarr = [];
let check = new Array(size**2+1).fill(false);
let adjArr = Array.from(Array(size**2 +1), () => Array(0))
let dfsarr = []
for(let i =1; i <= size**2; i++){ //인접리스트를 만들어준다.
    if(i % size == 0 && size**2 - i < size){       
    } else if(i % size == 0){
        adjArr[i].push(i+size)
        adjArr[i+size].push(i)
    } else if(size**2 - i < size){
        adjArr[i].push(i+1)
        adjArr[i+1].push(i)
    } else {
        adjArr[i].push(i+size)
        adjArr[i+size].push(i)
        adjArr[i].push(i+1)
        adjArr[i+1].push(i)
    }
}
for(let i=0; i < input.length; i++){ // 집의 유무를 1차원배열로 바꿔주고 check2 라고 생각한다. 
    for(let j=0; j < input[i].length; j++){
        inputarr.push(input[i][j]);
    }
}
inputarr.unshift(0);
// console.log(inputarr, check, adjArr);
// check 1(방문유무) check2(집의 유무) 2개를 가지고 dfs 방법을 돌려 찾을 것이다.

let dfs = (V) => {
    check[V] = true;
    dfsarr.push(V)
    for(let i=0; i < adjArr[V].length; i++){
        if(!check[adjArr[V][i]] && inputarr[adjArr[V][i]] == 1){
            let next = adjArr[V][i];
            dfs(next);
        }
    }
    return ;
}


let housecase = []
for(let i =1; i <= size**2; i++){
    if(inputarr[i] == 1 && !check[i]){
        dfs(i)
        housecase.push(dfsarr.length)
        dfsarr = [];
    }
}
housecase.sort((a,b) => a-b)
housecase.unshift(housecase.length)
console.log(housecase.join('\n'))

