let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let tc = +input.shift();
let VEArr = [];
// console.log(input);
for(let i =0; i <input.length;){
    let [V, E] = input.splice(i, 1)[0].split(' ').map(x => +x);
    VEArr.push([V,E]);
    i += E;
}
input = input.map(x => x.split(' ').map(y => +y));

console.log(input)
console.log(VEArr)
let bfs = (start, adjArr, check, color) => {
    let queue = [];
    queue.push(start)
    check[start] = true;
    color[start] = 1;
    while(queue.length != 0){
        let now = queue.shift()
        for(let i =0; i < adjArr[now].length; i++){
            if(!check[adjArr[now][i]]){
                check[adjArr[now][i]] = true;
                color[adjArr[now][i]] = color[now] * -1
                queue.push(adjArr[now][i]);
            } else {
                if(color[adjArr[now][i]] == color[now]){
                    return 'NO';
                }
            }
        }
    }
    return 'YES';
}


let solution = (V, E) => {
    let adjArr = Array.from(new Array(V+1), () => Array(0))
    let check = new Array(V+1).fill(false);
    let color = new Array(V+1).fill(null);
    let ret = [];
    for(let i=0; i < E; i++){
        let [a, b] = input.shift()
        adjArr[a].push(b)
        adjArr[b].push(a)
    }
    ret += bfs(1, adjArr, check, color)
    console.log(ret);
}
for(let i =0; i < VEArr.length; i++){
    let [V, E] = VEArr[i];
    solution(V, E);
}

