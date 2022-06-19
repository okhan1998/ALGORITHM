// 내가 푸는 방법이랑 똑같은데 dfs에서 다음 깊이로 넘어갈때 방법이 살짝 달랐다.
// 내가 푼 방법 => for과 check을 이용해 주어진 숫자를 한번씩만사용해서 만들수있는 모든 경우의수 찾기
// 답지 => idx를 이용해 주어진 숫자길이까지 인덱스를 더해주지만 해당 인덱스의 값을 더하기 or 더하지않기로 모든 경우의 수를 찾음 
// 답지가 내가 푼 방법보다 시간면에서 더 좋다고 나오는데 직관적으로 빠를 거 같지만 사실 별 차이 없을 거 같음 ㅡㅡ


const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');

let N = +input[0]
let nArr = input[1].split(' ').map(x => +x)
let check = Array(N).fill(false);
let tmp = Array(2000000).fill(false)

let dfs = (idx, value) => {
    if (idx == N) {
        tmp[value] = true;
        return;
    }
    dfs(idx + 1, value)
    dfs(idx + 1, value + nArr[idx])
}
dfs(0, 0)
let answer = tmp.indexOf(false);
console.log(answer);