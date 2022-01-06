const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
[n, ...arr] = input;
n = Number(n);
arr = arr[0].split(' ').map(i => Number(i));
solution(n, arr);

function solution(n, dp) {
    let max = dp[0];
    for (let i = 1; i < n; i++) {
        if (dp[i - 1] > 0  && dp[i] + dp[i - 1] > 0) {
            dp[i] += dp[i - 1];
        }

        if (max < dp[i])
            max = dp[i];
    }
    console.log(max);
}