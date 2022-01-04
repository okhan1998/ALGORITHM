const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim();
input = +input;
const dp = Array.from(new Array(input + 1), () => new Array(10));


dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];
for (let n = 3; n <= input; n++){
    for (let i = 0; i < 10; i++) {
        if(i === 0) {
            dp[n][i] = dp[n - 1][i + 1] % 1000000000;
        } else if (i >= 1 && i <= 8) {
            dp[n][i] = (dp[n - 1][i - 1] + dp[n - 1][i + 1]) % 1000000000;
        } else {
            dp[n][i] = dp[n - 1][i - 1] % 1000000000;
        }
    }
}
let sum = 0;
for (let j = 0; j < 10; j++){
    sum += dp[input][j];
}

console.log(sum % 1000000000);