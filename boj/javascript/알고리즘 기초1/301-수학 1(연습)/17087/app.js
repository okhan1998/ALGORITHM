const fs = require('fs');
const readfilepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(readfilepath).toString().trim().split('\n');

let inputarr = [];
input.forEach(x => {
    inputarr.push(x.split(' ').map(x => +x));
})

let tmparr = inputarr[1].map(x => {
    if(x > inputarr[0][1])
        return x - inputarr[0][1];
    else
        return inputarr[0][1] - x;
})


let num = tmparr[0];
for (let i = 1; i < tmparr.length; i++){
    num = gcd(num, tmparr[i])

}
console.log(num);



function gcd(a, b){
    while(b){
    let tmp = a % b;
    a = b;
    b = tmp;
    }
    return a;
}