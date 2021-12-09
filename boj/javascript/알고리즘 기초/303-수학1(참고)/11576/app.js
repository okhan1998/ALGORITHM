let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');
let tmp = input[0].split(' ');
let Abase = tmp.shift();
let Bbase = tmp.shift();
let en = input[2].split(' ').map(x => +x);

en.forEach((x, i) => {
    if (x >= 10){
        en[i] = x.toString(Abase);
    }
})

let oct = parseInt(en.join(''), Abase);
let answer = oct.toString(Bbase);
console.log(answer.split('').join(' '))

