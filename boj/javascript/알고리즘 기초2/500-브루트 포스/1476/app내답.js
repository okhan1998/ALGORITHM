const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split(' ').map(x => +x);
// console.log(input);
let E = input[0];
let S = input[1];
let M = input[2];
let ret = 0;
let i = 1;
while(i){
 if((i % 15 == E || (i % 15 == 0 && E == 15))
 &&(i % 28 == S || (i % 28 == 0 && S == 28))
 &&(i % 19 == M || (i % 19 == 0 && M == 19))){
     ret = i;
     break;
 }
 i++
}
console.log(ret);