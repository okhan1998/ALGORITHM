const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n').map(x => +x);
let cases = +input[0];
let dp = [0, input[1], input[1] + input[2]];
for(let i =3; i <= cases; i++){
    dp[i] = Math.max(dp[i-3] + input[i-1] + input[i], dp[i-2] + input[i], dp[i-1])
}
console.log(dp[cases]);
