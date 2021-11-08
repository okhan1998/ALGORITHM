const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = +line.trim().split(' ');
solution(input);

function solution(input){
    var A = 1;
    var B = 1;
    var tmp = 0;
    
    var line = 1;
    for (let i = 1; i <= 10000000; ++i){
        tmp += i;
        if(tmp >= input){
            line = i;
            break;
        }
    }
    if (line % 2 != 0){
        A = 1 + (tmp - input);
        B = line + 1 - A;
    } else {
        A = line - (tmp - input);
        B = line + 1 - A;
    }
    
    var ret = A + '/' + B;
    console.log(ret);
}