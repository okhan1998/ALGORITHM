const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift();

input = input[0].split(' ').map(x => +x);
let dp = []
for(let i = 0; i < cases; i++){
    let max = 0;
    for(let j = 0; j < i; j++){
        if(input[i] < input[j] && dp[j] > max){
            max = dp[j]
        }
    }
    dp[i] = max + 1;
}
console.log(Math.max(...dp));