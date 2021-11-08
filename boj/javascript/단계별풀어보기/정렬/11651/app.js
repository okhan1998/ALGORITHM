const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const inputC = +input.shift();
let inputArr = [];
input.forEach(x => {
    let newarr = x.trim().split(' ').map(item => +item);
    inputArr.push(newarr);

})

inputArr.sort((a, b) => {
    if (a[1] != b[1]){
        return a[1] - b[1]
    } else
    return a[0] - b[0];
})

let result = '';
inputArr.forEach(x => {
    result += x[0] + ' ' + x[1] + '\n';
})

console.log(result.trim());