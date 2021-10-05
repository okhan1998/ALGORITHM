const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString();
input = +input;
solution(input);

function solution(i){
    if (i >= 90 && i <= 100)
        console.log('A');
    else if(i >= 80 && i <= 89)
        console.log('B');
    else if(i >= 70 && i <= 79)
        console.log('C');
    else if(i >= 60 && i <= 69)
        console.log('D');
    else if(i < 60)
       console.log('F');        
}