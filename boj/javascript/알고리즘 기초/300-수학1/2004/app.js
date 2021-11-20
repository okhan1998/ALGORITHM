let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ').map(x => +x);
input.push(input[0] - input[1]);
let answer2 = [];
let answer5 = [];
for(let i = 0; i<input.length; i++){
    let n5 = input[i];
    let n2 = input[i];

    let answer5n = 0;
    let answer2n = 0;
    while(n5 >= 5){
        answer5n += parseInt(n5/5);
            n5 /= 5;
    }
    answer5.push(answer5n)
    while(n2 >= 2){
        answer2n += parseInt(n2/2);
        n2 /= 2;
    }
    answer2.push(answer2n);
} 

let result2 = answer5[0] - (answer5[1]+answer5[2]);
let result5 = answer2[0] - (answer2[1]+answer2[2]);
console.log(Math.min(result2, result5));