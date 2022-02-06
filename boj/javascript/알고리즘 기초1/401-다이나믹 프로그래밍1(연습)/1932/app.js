const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n').map(x => x.split(' ').map(y => +y));
let cases = input.shift()[0];
let dp = Array.from(Array(cases), () => new Array(cases));
dp[0] = [input[0][0]];
for(let i = 1; i < cases; i++){
    for(let j = 0; j < input[i].length; j++){
        if(j == 0)
            dp[i][j] = (dp[i-1][j] + input[i][j])
        else if(j == input[i].length - 1)
            dp[i][j] = dp[i-1][j-1] + input[i][j]
        else{
            dp[i][j] = Math.max(dp[i-1][j-1] + input[i][j], dp[i-1][j] + input[i][j])
        }
    }
}
console.log(Math.max(...dp[cases-1]));
