const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('');
solution(input);

function solution(Arr){
    let result = '';
    for(let i = 0; i < 26; i++){
        let cchar = String.fromCharCode(i + 97);
        if (i == 25)
            result += (Arr.indexOf(cchar));
        else
            result += (Arr.indexOf(cchar)) + ' ';
    }
    console.log(result);
}

