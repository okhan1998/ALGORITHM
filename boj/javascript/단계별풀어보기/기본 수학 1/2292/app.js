const fs = require('fs');
const line = fs.readFileSync("./input.txt", "utf8");
let input = +line.trim().split(' ');
solution (input)

function solution (input){
    var r = 0;
    var tmp = 1;
    for (let i = 0; i <= 1000000000; i++)
    {
        ++r;
        tmp += (i * 6);
        if(tmp >= input)
            break;
    }
    console.log(r);
}