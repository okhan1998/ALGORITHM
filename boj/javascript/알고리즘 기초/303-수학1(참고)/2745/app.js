let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(' ');
let number = input.shift();
let base = input.shift();
console.log(parseInt(number, base))