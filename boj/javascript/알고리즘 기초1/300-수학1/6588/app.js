const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
input.pop();
let ret = '';
let cnt = 0;
let isPrimeNumber = new Array(1000001).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;
for(let i = 2; i < Math.ceil(Math.sqrt(1000000)); i++){
    if(isPrimeNumber[i]){
        let m = 2;
        while(i * m <= 1000000){
            isPrimeNumber[i * m] = false;
            m++;
        }
    }
}

function oddNum(c) {
    if(c % 2 == 1) return true;
    else return false;

}

for (let i = 0; i < input.length; i++){
    for(let j = 3; j < input[i]; j++){
        if(isPrimeNumber[j] && oddNum(j)){
            if(isPrimeNumber[input[i] - j] && oddNum(input[i] - j)){
                ret += input[i] + ' '+ '=' + ' ' + j + ' ' + '+' + ' ' + (input[i] - j) + '\n';
                cnt = 1;
                break;
            }
        }
    }
    if(cnt == 0)
        ret += "Goldbach's conjecture is wrong." + '\n';
    cnt = 0;
}

console.log(ret.trim());