const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift();
input = input[0].split(' ').map(x => +x);

solution(cases, input);

function solution(n, arr) {
    const upDP = new Array(n).fill(1);
    const downDP = new Array(n).fill(1);

    for(let i = 1; i < n; i++){
        const current = arr[i];
        let count = 1;
        for (let j = 0; j < i; j++){
            const before = arr[j];
            if (current > before)
                count = Math.max(count, upDP[j] + 1)
        }
        upDP[i] = count;
    }

    for(let i = n - 2; i >= 0; i--) {
        const current = arr[i];
        let count = 1;
        for (let j = i + 1; j < n; j++){
            const before = arr[j];
            if (current > before) 
                count = Math.max(count, downDP[j] + 1)
        }
        downDP[i] = count;
    }
    
    const answer = upDP.map((val, idx) => val + downDP[idx]);
    console.log(Math.max(...answer) - 1);
}