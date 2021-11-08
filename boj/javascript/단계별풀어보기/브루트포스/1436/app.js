const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
const Arr = [];

for(let i = 666; i < 1000000000; i++){
    let tmp = i.toString().split('').map(item => +item);    
    for(let j = 0; j < tmp.length; j++){
        if(tmp[j] == 6 && tmp[j+1] == 6 && tmp[j+2] == 6){
            Arr.push(tmp.join(''));
            break;
        }
    }

    if(Arr.length == input){
        console.log(Arr[input-1]);
        break;
    } 
}