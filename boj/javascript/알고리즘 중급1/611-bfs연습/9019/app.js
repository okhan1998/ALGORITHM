const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let N = +input.shift()
input = input.map(x => x.split(' '))
let answer = [];


let convert = (cn, i) =>{
    if(i == 0){
        cn *= 2
        if(cn > 9999) cn %= 10000
        return [cn, 'D']
    }else if(i == 1){
        cn -= 1
        if(cn < 1) cn = 9999
        return [cn, 'S']
    }else if(i == 2){
        cn = (cn % 1000) * 10 + parseInt((cn / 1000))
        return [cn, 'L']
    }else if(i == 3){
        cn = (cn % 10) * 1000 + parseInt((cn / 10))
        return [cn, 'R']
    }
    
}

let bfs = (start) => {
    let check = []
    for(let i=0; i<=10000; ++i) check[i] = 0;
    let queue = []
    queue.push(start)
    while(queue.length){
        let [cn, goal, path] = queue.shift();
        if(check[cn]) continue;
        check[cn] = 1;
        if(cn == goal){
            answer.push(path)
            return ;
        }

        for(let i =0; i<4; i++){
        let [nextnum, method] = convert(cn, i)
        queue.push([nextnum, goal, path+method])
        }
        
    }
}

for(let i =0; i<N; i++){
    bfs([input[i][0], input[i][1], ''])
}
console.log(answer.join('\n'))
