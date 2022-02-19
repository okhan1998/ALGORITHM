const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let cases = +input.shift();
input = input.map(x => x.split(' ').map(y => +y));
let ret = [];
// console.log(input);

for(let i = 0; i < cases; i++){
    let find = 0
    let tar = input[i][2];
    while(tar <= lcm(input[i][0], input[i][1])){
        if((tar % input[i][1]) == 0 && input[i][1] == input[i][3]){
            ret.push(tar);
            find = 1;
            break;
        }


        if((tar % input[i][1]) == input[i][3]){
            ret.push(tar);
            find = 1;
            break;
        }
        tar += input[i][0]
    }
    if(find == 0)
        ret.push(-1);
}
console.log(ret.join('\n'));


function gcd(a, b) {
    while(b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function lcm(a, b) {
   return (a * b) / gcd(a,b);
}