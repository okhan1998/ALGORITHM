const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift();
for(let num=0; num<cases; num++){
    let count = Number(input[3*num]);
    let up = input[3*num+1].split(' ').map(v => +v);
    let down = input[3*num+2].split(' ').map(v => +v);
    let dp = [[0, up[0], down[0]]];
    for(let i = 1; i < count; i++){
        dp[i] = [
            Math.max(...dp[i-1]),
            Math.max(dp[i-1][0], dp[i-1][2]) + up[i],
            Math.max(dp[i-1][0], dp[i-1][1]) + down[i]
        ]
    }
    console.log(Math.max(...dp[count-1]));
}