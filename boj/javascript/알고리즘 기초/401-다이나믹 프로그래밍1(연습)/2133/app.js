const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filepath).toString();
const dp = new Array(input + 1).fill(0);
dp[2] = 3;

for(let i = 4; i <= input; i +=2){
    dp[i] = dp[i-2] * dp[2] + 2;
    for (let j = 4; j < i; j += 2){
        dp[i] += dp[i-j] * 2;
    }
}
console.log(dp[input])