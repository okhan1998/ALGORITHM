const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift();
input = input.map(x => x.split(' ').map(j => +j));
let dp = Array.from(Array(cases), () => new Array(3));
let tmp = [];
for(let i = 0; i < 3; i++){
    dp[0].fill(1000001);
    dp[0][i] = input[0][i];
    for(let j = 1; j < cases; j++){
        if(j == cases - 1){
        dp[j][0] = input[j][0] + Math.min(dp[j-1][1], dp[j-1][2])
        dp[j][1] = input[j][1] + Math.min(dp[j-1][0], dp[j-1][2])
        dp[j][2] = input[j][2] + Math.min(dp[j-1][0], dp[j-1][1])
        dp[j][i] = 1000001;    
        }
        else{
        dp[j][0] = input[j][0] + Math.min(dp[j-1][1], dp[j-1][2])
        dp[j][1] = input[j][1] + Math.min(dp[j-1][0], dp[j-1][2])
        dp[j][2] = input[j][2] + Math.min(dp[j-1][0], dp[j-1][1])
        }
        
    }
    tmp.push(Math.min(...dp[cases-1]));
}
console.log(Math.min(...tmp));