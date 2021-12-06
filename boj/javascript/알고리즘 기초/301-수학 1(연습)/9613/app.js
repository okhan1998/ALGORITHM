const fs = require('fs');
const readfilepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(readfilepath).toString().trim().split('\n');
input.shift();
let inputarr = [];
let answer =[];
input.forEach(x => {
    inputarr.push(x.split(' '))
})
for(let i = 0; i < inputarr.length; i++){
    let result = 0;
    for(let j = 1; j < inputarr[i].length; j++){
        for(let k = j+1; k < inputarr[i].length; k++){
            let common = gcd(+inputarr[i][j], +inputarr[i][k])
            result += common;
        }
    }
    answer.push(result);
}
console.log(answer.join('\n'));

function gcd(a, b){
    while(b != 0){
        let tmp = a % b;
        a = b;
        b = tmp; 
    }
    return a;
}