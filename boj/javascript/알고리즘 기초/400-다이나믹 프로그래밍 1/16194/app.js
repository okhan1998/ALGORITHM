const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
input.shift();
input = input[0].split(' ').map(item => +item);
let card = [0,...input];
for(let i = 2; i < card.length; i++){
    for(let j = 1; j < i; j++){
        card[i] = Math.min(card[i], (card[i-j] + card[j]));
    }
}
console.log(card[input.length]);