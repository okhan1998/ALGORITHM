const fs = require('fs');
const filepath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let inputarr = [];
let dque = [];
let ret = '';
input.shift();

input.forEach(x => {
    inputarr.push(x.split(' '));
})
for(let i = 0; i < inputarr.length; i++){
    if(inputarr[i][0] == 'push'){
        dque.push(inputarr[i][1]);
    }else if(inputarr[i][0] == 'pop'){
        if(dque.length == 0){
            ret += -1 + '\n';
        } else
            ret += dque.shift() + '\n';

    }else if(inputarr[i][0] == 'size'){
            ret += dque.length + '\n';
    }else if(inputarr[i][0] == 'empty'){
        if(dque.length == 0){
            ret += 1 + '\n';
        }else
            ret += 0 + '\n';

    }else if(inputarr[i][0] == 'front'){
        if(dque.length == 0){
            ret += -1 + '\n';
        }else
            ret += dque[0] + '\n';

    }else if(inputarr[i][0] == 'back'){
        if(dque.length == 0){
            ret += -1 + '\n';
        }else
            ret += dque[dque.length - 1] + '\n';
    }

}

console.log(ret.trim());


