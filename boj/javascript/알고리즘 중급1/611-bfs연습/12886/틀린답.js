// bfs 문제로 풀 거 같다.
// 1. 숫자 2개를 고른다. ab, bc, ac
// 2. 문제에 나와있는 계산을 한다.
// 3. 그 값을 각각 큐에 넣어준다.
// 4. 2개가 같은 값이 있는지 검증을 한다.
// 5. 1 <= abc <= 500인지 확인한후 넘은애들은 continue
// 6. 방문체크할때 포인트가 2숫자가 정해지면 나머지하나는 알 수 있으니깐 2차원배열로도 충분히 체크할 수 있다. 왜냐하면 합은 동일할 수 밖에 없기 때문에
const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().trim().split(' ').map(x => +x);
let check = Array.from(new Array(1001), () => Array(1001))
let answer = 0;

let abcom = (a, b, c) => {
    return [a+a, b-a, c]
}
let accom = (a, b, c) => {
    return [a+a, b, c-a]
}
let bccom = (a, b, c) => {
    return [a, b+b, c-b]
}

let bfs = (start) => {
    let queue = []
    queue.push(start)
    while(queue.length){
        let [a, b, c] = queue.pop().sort((a, b) => a-b)
        // console.log([a, b, c])
        if(a == b && b == c){// 정답인지 검증
            answer = 1;
            return ;
        }
        if(a < 1 || a > 500 || b < 1 || b > 500 || c < 1 || c > 500) continue; //범위초과하면 넘기기
        if(check[a][b]) continue; // 방문 확인
        check[a][b] = 1
        if(a != b)queue.push(abcom(a,b,c))
        if(b != c)queue.push(bccom(a,b,c))        
        if(a != c)queue.push(accom(a,b,c))
    }
}

bfs(input)
console.log(answer)