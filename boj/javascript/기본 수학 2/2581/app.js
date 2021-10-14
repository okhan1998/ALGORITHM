const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n').map(item => +item);
solution(input[0], input[1])

function solution(A, B){ 
    var arr = [];
    for(A; A <= B; ++A){
            if (A == 2)
                arr.push(A)
            else{ 
                for(var j = 2; j < A; j++){
                
                if(A % j == 0){
                   break;
                } 

                if(j == (A - 1)){
                   arr.push(A);
                }  
                }    
            }
        }
    const reducer = (accumulator, curr) => accumulator + curr;
    let min = Math.min(...arr);
    if (arr[0] == null)
        console.log(-1);
    else {
        console.log(arr.reduce(reducer));
        console.log(min);
    }
}