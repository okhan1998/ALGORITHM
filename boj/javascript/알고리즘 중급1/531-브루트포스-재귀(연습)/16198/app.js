// dfs방식으로 주어진 수중 양끝을빼고 뽑는 경우의수를 찾는 문제 인 거 같다.

const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let N = +input.shift()
let nArr = input[0].split(' ').map(x => +x)
let answer = []
let max = -Infinity
let dfs = (cnt, value, array) => { // 사용한 숫자를 계속 빼줘야해서 굳이 매개변수로 배열을 넣어주었음 
    if(cnt == N-2){
        max = Math.max(max, value)
    }
    for(let i=1; i < array.length-1; i++){ // 다음 깊이로 갈때, tmparr를 통해 사용한 숫자를 뺸 배열을 넘겨주었음
        let tmparr = JSON.parse(JSON.stringify(array))
        tmparr.splice(i, 1)
        dfs(cnt+1, value+(array[i-1] * array[i+1]), tmparr)
    }
}
dfs(0,0,nArr)
console.log(max)