let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('');
let answer = '';

input.forEach((str, i) => {
    const dex = parseInt(str, 8);
    let binary = dex.toString(2);
    while (i != 0 && binary.length < 3){
        binary = '0' + binary;
    }
    answer += binary;
})
console.log(answer);