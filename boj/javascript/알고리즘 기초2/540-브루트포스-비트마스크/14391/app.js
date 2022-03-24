let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let [s, g] = input.shift().split(' ').map(x => +x);
input = input.map(x => x.split('').map(y => +y));
let check = Array.from(Array(s), () => new Array(g).fill(false));
let max = 0;
let sum_puzzle = (s,g) => {
    let sum_v = 0, sum_h = 0;
    let tmp_v = '', tmp_h = '';
    for(let i=0; i<s; i++){
        for(let j=0;j<=g; j++){
            if(j<g&&!check[i][j]){
                sum_v += +tmp_v;
                tmp_v = '';
            }else if(j<g&&check[i][j]){
                tmp_v = tmp_v + input[i][j];
            }else{
                sum_v += +tmp_v;
                tmp_v = '';
            }
        }
    }
    for(let j=0; j<g; j++){
        for(let i=0; i<=s; i++){
            if(i<s&&check[i][j]){
                sum_h += +tmp_h;
                tmp_h = '';
            }else if(i<s&&!check[i][j]){
                tmp_h = tmp_h + input[i][j];
            }else{
                sum_h += +tmp_h;
                tmp_h = '';
            }
        }
    }
    return sum_v+sum_h;
}




let rc = (s, g, i, j) => {
    if(j<g && i<s){
        check[i][j] = true;
        rc(s,g,i,j+1)
        check[i][j] = false;
        rc(s,g,i,j+1);
    }else if(i<s-1){
        check[i+1][0] = true;
        rc(s,g,i+1,1);
        check[i+1][0] = false;
        rc(s,g,i+1,1);
    } else {
        max = Math.max(max, sum_puzzle(s,g));
    }
}

rc(s,g, 0, 0);
console.log(max)