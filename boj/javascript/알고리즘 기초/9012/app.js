const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let inputarr = [];
let result = '';
input.shift();
input.forEach(x => {
    let newarr = x.trim().split('');
    inputarr.push(newarr);
})

for(let i = 0; i < inputarr.length; i++){
    cnt = 0;
    for(let j =0; j< inputarr[i].length; j++){
        for(let k =j+1; k < inputarr[i].length; k++){
            if (inputarr[i][j] == '(' && inputarr[i][k] == ')'){
                inputarr[i][k] = 0;
                cnt += 1;
                break;
            }
        }
        
    }
    if (cnt == inputarr[i].length / 2 && inputarr[i].length % 2 == 0)
            result += 'YES' + '\n';
        else 
            result += 'NO' + '\n';
}

console.log(result.trim());