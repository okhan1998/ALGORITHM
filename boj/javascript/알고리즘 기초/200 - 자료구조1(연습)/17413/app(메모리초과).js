const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('');
let tmparr = [];
let retarr = [];
let tmp = '';

for(let i = 0; i < input.length; i++){
        if (input[i] == '>'){
        tmp += input[i];
        tmparr.push(tmp);
        tmp = '';
       
    } else if (input[i] == '<' && tmp != ''){
        tmparr.push(tmp);
        tmp = '';
        tmp += input[i];
       
    }else if (input[i] == ' ' && tmp.split('').indexOf('<') == -1 &&input.indexOf('<', i) == -1){
        tmparr.push(tmp);
        tmp = '';
    } else if (i == input.length - 1){
        tmp += input[i];
        tmparr.push(tmp);
        tmp = '';
    } else
        tmp += input[i];
}


let ttmp = '';


tmparr.map(x => {
    if (x[0] == '<'){
        retarr.push(x);
    } else if(x.indexOf(' ') != -1){
        x = x.split(' ');
        for (let k = 0; k < x.length; k++){
            ttmp += x[k].split('').reverse().join('') + ' ';
        }
        retarr.push(ttmp.trim());
    } else
    retarr.push(x.split('').reverse().join(''));
})

console.log(retarr.join(''));