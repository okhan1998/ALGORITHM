let fs = require('fs');
let filepath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let N = +input.shift();
let answer = input.pop().split(' ')
let ret = [];
let adjArr = Array.from(new Array(N+1), () => Array())
let check = new Array(N+1).fill(0);
for(let i =0; i < input.length; i++){
    let [from, to] = input[i].split(' ')
    adjArr[from].push(to);
    adjArr[to].push(from);
}


let bfs = (V) => {
    let queue = [];
    queue.push(V);
    check[V] = 1
    while(queue.length != 0){
        let newThing =  JSON.parse(JSON.stringify(queue));
        ret.push(newThing)
        for(let i =0; i <adjArr[newThing].length; i++){
            if(!check[adjArr[newThing][i]]){
                queue.push(adjArr[newThing][i])
                check[adjArr[newThing][i]] = 1;   
            }
        }
    }
}
let sol = () => {
    bfs('1');
    // console.log(ret);
    for(let i=0; i < ret.length; i++){
        if(ret[i] != answer[i]){
            return 0;
        }
    }
    return 1;
}
console.log(sol());