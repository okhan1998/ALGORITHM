const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');

let solution = (N, counseling) => {
    const dp = new Array(N).fill(0);

    for(let i = 0; i < N; i++) {
        const [cost, profit] = counseling[i];
        if(i+cost > N) continue;
        dp[i] = dp[i] + profit;
        for(let j = i+cost; j < N; j++){
            console.log(dp)
            dp[j] = Math.max(dp[j], dp[i]);
        }
    }
    
    return Math.max(...dp);
}
const N = +input[0];
const counseling = input.slice(1).map((v) => v.split(' ').map((v) => Number(v)));
console.log(solution(N, counseling));