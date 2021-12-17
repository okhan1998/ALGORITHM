const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();
const num = +input;

const DP = new Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
    DP[i] = DP[i - 1] + 1;
    
    if (i % 2 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }
    if (i % 3 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 3] + 1);
    }
    
}
console.log(DP[num]);
