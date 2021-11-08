const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().toUpperCase().split(''); 
solution(input);

function solution(Arr){
    var ap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var cnt = 0;
    var maxindex;
    Arr.forEach(x => {
        ap[x.charCodeAt()-65] += 1;
    })
    for(let i = 0; i < 26; i++){
        if(Math.max(...ap) == ap[i]){
            cnt += 1;
            maxindex = i;
        }     
    }
    if(cnt > 1)
        console.log('?');
    else
        console.log(String.fromCharCode(maxindex + 65));
}