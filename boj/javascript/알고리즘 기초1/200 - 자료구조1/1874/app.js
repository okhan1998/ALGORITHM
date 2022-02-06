const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => +item);
input.shift();
let check = 0;
let arr = [];
let result = '';
let ret = '';
let ret1 = '';
for (let i = 0; i < input.length; i++){
    let tmp = check;
    if (input[i] > check){
        for(j = 0; j < (input[i] - tmp); j++){
            arr.push(check+1);
            ret += '+' + '\n';
            check += 1;
        }
        result += arr.pop() + '\n';
        ret += '-' + '\n';

    }else if(arr[arr.length - 1] > input[i]){
        ret1 = 'NO';
    }else{
        result += arr.pop() + '\n';
        ret += '-' + '\n';
    }
}
if(ret1 == 'NO'){
console.log(ret1.trim());
}
else{
console.log(ret.trim());
}