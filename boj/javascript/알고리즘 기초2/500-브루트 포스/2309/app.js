const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(x => +x);
let tmp = []
let result = [];
for(let i = 0; i < 9; i++){
    for(let j = i+1; j < 9; j++){
        tmp = input;
        let a = tmp[i]
        let b = tmp[j]
        tmp[i] = 0;
        tmp[j] = 0;
        if(tmp.reduce((p,c) => p+c) === 100){
            result = tmp;
            break;
        }
        tmp[i] = a;
        tmp[j] = b;
    }
    
}
result.sort((a,b) => a-b);
result.shift();
result.shift();
console.log(result.join('\n').trim());
