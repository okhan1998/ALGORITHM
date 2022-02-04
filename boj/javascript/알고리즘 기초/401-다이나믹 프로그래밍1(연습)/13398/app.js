const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift();
input = input[0].split(' ').map(x => +x);
let dp = [input[0]]
let dp2 = [input[0]]
for(let i = 1; i < cases; i++){
    dp[i] = input[i] > dp[i-1] + input[i] ? input[i] : dp[i-1] + input[i]
}
for(let i = 1; i < cases; i++){
    dp2[i] = dp[i-1] > dp2[i-1] + input[i] ? dp[i-1] : dp2[i-1] + input[i]
}
let dpMax = Math.max(...dp);
let dp2Max = Math.max(...dp2);
console.log(Math.max(dpMax, dp2Max));