const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
const ts = +input.shift();
let result = '';

function gcd(a, b) {
    while(b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

const lcm = (a, b) => (a * b) / gcd(a,b);

for (let i = 0; i < ts; i++){
    let num = input[i].split(' ').map((a) => +a);
    let a = num[0];
    let b = num[1];
    result += lcm(a, b) + '\n';
}

console.log(result.trim());
