let solution = (input) => {
let S = input; 
let check =  Array.from(new Array(1001), () => Array(1001).fill(0));
// console.log(check)
// const visited = Array.from({
//     length: 1000 + 1
// }, () => Array(1000 + 1).fill(false));
// console.log(visited)
let bfs = (E) => {
    let queue = []
    queue.push([E, [], 0])
    while(queue.length){
        let [cur, board, time] = queue.shift();

        if(check[cur.length][board.length]) continue;
        check[cur.length][board.length] = 1;

        if(cur.length == S) return time;
        

        if(cur.length > 0){ // 화면에 1개 지우기
            let tmp = JSON.parse(JSON.stringify(cur))
            tmp.splice(0,1)
            queue.push([tmp, board, time+1]);
        }
        if(cur.length < 501){ // 클립보드에 현재 화면에 있는 임티 복사
            let tmpboard = JSON.parse(JSON.stringify(cur))
            queue.push([cur, tmpboard, time+1]);
        }
        if(cur.length < 10001){ // 클립보드에 있는 임티 갯수만큼 현재 화면에 붙여넣기
            let newArr = [...cur, ...board];
            queue.push([newArr, board, time+1]);
        }
    }
}
let answer = bfs([1])
return answer;
}

require("readline")
    .createInterface(process.stdin, process.stdout)
    .on("line", (line) => {
        console.log(solution(+line));
    })
    .on("close", () => {
        process.exit();
    });