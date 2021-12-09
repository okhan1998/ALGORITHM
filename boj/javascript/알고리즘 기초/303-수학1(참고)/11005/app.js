let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(' ');
let number = input.shift();
let base = input.shift();
let answer = [];

while(number != 0){
    let reminder = 0;
    if(number % base >= 10)
        reminder = String.fromCharCode(number % base + 55);
    else
        reminder = number % base
    number = Math.floor(number / base);
    answer.push(reminder);
}
console.log(answer.reverse().join(''));