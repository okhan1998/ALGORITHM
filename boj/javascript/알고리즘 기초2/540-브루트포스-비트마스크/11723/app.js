let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift();
input = input.map(x => x.split(' '));
let tmp = [];
let ret = [];
let all = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']

for(let i =0; i < cases; i++){
    if(input[i][0] == 'add'){
        if(tmp.indexOf(input[i][1]) == -1)
            tmp.push(input[i][1])
    } else if(input[i][0] == 'remove'){
        if(tmp.indexOf(input[i][1]) != -1){
            let idx = tmp.indexOf(input[i][1])
            tmp.splice(idx, 1);
        }  
    } else if(input[i][0] == 'check'){
        if(tmp.indexOf(input[i][1]) == -1) ret.push(0)
        else ret.push(1)
    } else if(input[i][0] == 'toggle'){
        if(tmp.indexOf(input[i][1]) == -1)
            tmp.push(input[i][1])
        else{
            let idx = tmp.indexOf(input[i][1])
            tmp.splice(idx, 1);
        }
    } else if(input[i][0] == 'all'){
        tmp = JSON.parse(JSON.stringify(all));
    }
    else if(input[i][0] == 'empty'){
        tmp = []
    }
}

console.log(ret.join('\n'))