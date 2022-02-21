const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filepath).toString().trim();
let cnt = 0;
for(let i = 1; i <= input; i++){
    if(1 <= i && i <= 9)
        cnt += 1;
    else if(10 <= i && i <= 99)
        cnt += 2;
    else if(100 <= i && i <= 999)
        cnt += 3;
    else if(1000 <= i && i <= 9999)
        cnt += 4;
    else if(10000 <= i && i <= 99999)
        cnt += 5;
    else if(100000 <= i && i <= 999999)
        cnt += 6;
    else if(1000000 <= i && i <= 9999999)
        cnt += 7;
    else if(10000000 <= i && i <= 99999999)
        cnt += 8;
    else if(i == 100000000)
        cnt += 9;
}
console.log(cnt);