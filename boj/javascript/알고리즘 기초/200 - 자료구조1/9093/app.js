const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let inputarr = [];
let result = '';
input.shift();

input.forEach(x => {
    let newarr = x.trim().split(' ');
    inputarr.push(newarr);
})

for(let i = 0; i < inputarr.length; i++){
    for(let j = 0; j < inputarr[i].length; j++){
        let arr = inputarr[i][j].split('');
        for(let k = arr.length - 1; k >= 0; k--){
            result += arr[k];
        }
        if(j == inputarr[i].length - 1){}
        else
            result += ' ';
    }
    if(i == inputarr.length - 1){}
    else
        result += '\n';
}

console.log(result);