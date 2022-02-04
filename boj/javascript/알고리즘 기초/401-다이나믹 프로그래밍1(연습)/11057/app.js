const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filepath).toString();
const dp = Array(input).fill().map(x => Array(10).fill(0));

dp[0].forEach((item, index) => dp[0][index] = 1);

for(let i=1; i<input; i++) {
    for(let j =0; j<=9; j++) {
        for(let k = 0; k<=j; k++){
            dp[i][j] += dp[i-1][k];
            dp[i][j] %= 10007;
        }
    }
}

const answer = dp[input-1].reduce((a, c) => a + c) % 10007;
console.log(answer);