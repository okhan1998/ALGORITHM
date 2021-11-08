const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split('');

solution (input);

function solution(arr){
    var nc = '';
    var nnc = '';
    let cnt = 0;
    const cap = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
    for(let i = 0; i < arr.length; i++){
        nc = arr[i] + arr[i+1];
        nnc = arr[i] + arr[i+1] + arr[i+2];
        if (cap.indexOf(nc) != -1){
            cnt += 1;
            nc = '';
            nnc = '';
            ++i;
            
        } else if (cap.indexOf(nnc) != -1){
            cnt += 1;
            nc = '';
            nnc = '';
            i += 2;
        } else {
            cnt += 1;
            nc = '';
            nnc = '';
        }      
    }
    console.log(cnt);
}