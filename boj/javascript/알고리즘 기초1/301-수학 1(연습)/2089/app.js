let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();
input = +input;
let answer = [];

while(input / -2 != 0){
    let reminder = input % -2;
    if(reminder == 1 || reminder == -1){
        input = Math.floor(input / -2) + 1;
        answer.push(1);
    } else if(reminder == 0){
        input = Math.floor(input/ -2);
        answer.push(0);
    }
}
console.log(answer.length === 0 ? 0 : answer.reverse().join(''));