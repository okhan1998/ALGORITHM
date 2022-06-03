const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let S = Number(input); 
let check =  Array.from(Array(5000), () => Array(5000).fill(0));
// console.log(check)
let bfs = (E) => {
    let queue = []
    queue.push([E, 0, 0])
    while(queue.length){
        let [cur, board, time] = queue.shift();

        if(check[cur][board]) continue;
        check[cur][board] = 1;

        if(cur == S) return time;
        

        if(cur >= 1){ // 화면에 1개 지우기
            let tmp = cur
            --tmp
            queue.push([tmp, board, time+1]);
        }
        if(cur < 1001){ // 클립보드에 현재 화면에 있는 임티 복사
            let tmpboard = cur
            queue.push([cur, tmpboard, time+1]);
        }
        if(cur < 1001){ // 클립보드에 있는 임티 갯수만큼 현재 화면에 붙여넣기
            let newArr = cur+board 
            queue.push([newArr, board, time+1]);
        }
    }
}
let answer = bfs(1)
console.log(answer)