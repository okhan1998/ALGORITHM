const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');
let inputC = +input[0];
let inputArr = input[1].split(' ').map(item => +item);
solution(inputC, inputArr);

function solution(C , Arr){
    var cnt = 0;
    var check = 1;
    for(var i = 0; i < C; i++){
        if (Arr[i] == 2)
            cnt+= 1;
        else{ 
            for(var j = 2; j < Arr[i]; j++){
            
            if(Arr[i] % j == 0){
                break;
            } 

            if(j == (Arr[i] - 1)){
                cnt += 1;
            }  
        }
    }
    }
    console.log(cnt);
}