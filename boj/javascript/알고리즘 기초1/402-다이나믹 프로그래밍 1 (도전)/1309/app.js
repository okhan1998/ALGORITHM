const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filepath).toString();
let dp = [0, 3, 7]

for(let i = 3; i <= input; i++){
    dp[i] = (2*dp[i-1] + dp[i-2]) % 9901;
}
console.log(dp[input]);