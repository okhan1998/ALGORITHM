const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift();
input = input[0].split(' ').map(x => +x);

let dp = [];

for(let i = 0; i <cases; i++){
    dp[i] = input[i];
    for(let j=0; j < i; j++){
        if(input[j] < input[i] && dp[i] < dp[j] + input[i])
        dp[i] = dp[j] + input[i] 
    }
}
console.log(dp);