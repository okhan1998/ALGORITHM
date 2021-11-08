const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
input.shift();
let inputArr = [];
input.forEach(x => {
    let newarr = x.trim().split(' ');
    inputArr.push(newarr);

})

inputArr.sort((a, b) => a[0] - b[0])

let result = '';
inputArr.forEach(x => {
    result += x[0] + ' ' + x[1] + '\n';
})

console.log(result.trim());