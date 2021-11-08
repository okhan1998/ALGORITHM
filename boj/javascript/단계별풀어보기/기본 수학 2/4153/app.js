const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const inputArr = [];

for (let i = 0; i < input.length; i++){
    let newarr = input[i].split(' ').map(item => +item);

    inputArr.push(newarr);
}
for (let i = 0; i < inputArr.length; i++){
    inputArr[i] = inputArr[i].map(x => Math.pow(x, 2));
    let a = inputArr[i][0]
    let b = inputArr[i][1]
    let c = inputArr[i][2]
    if (a == 0 && b == 0 && c == 0)
        break;
    if(a + b == c || a + c == b || c + b == a){
        console.log('right');
    }
    else 
        console.log('wrong');
}