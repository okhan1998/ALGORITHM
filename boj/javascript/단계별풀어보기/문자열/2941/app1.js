const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split('');

let croalpa = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let cnt = 0;
for (let i = 0; i < input.length; i++){
    if(input[i] + input[i+1] + input[i+2] == 'dz='){
        cnt += 1;
        i += 2;
    }
    else if(croalpa.indexOf(input[i] + input[i+1]) != -1){
        cnt += 1;
        i += 1;
    }else 
        cnt += 1;
}
console.log(cnt);