let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift();
let condition = input[0].split('');
let check = new Array(22).fill(false);
let stats = [[], [], [], [], [], [], [], [], [], [], []];
let ret = [];
let list = [];
let number = [];
for(let i = -10; i <= 10; i++)
    number.push(i);
for(let i=0; i<cases; i++){
    for(let j=i; j<cases; j++){
        stats[i][j] = condition.shift();
    }
}
let check_result = (list, cnt) => {
    let result = true;
    let sum = 0;
    let check2;
    for(let i=cnt; i >= 0; i--){
        sum += list[i]*1;
        if(sum<0)check2='-'
        else if(sum>0)check2='+';
        else check2='0';
        if(check2 == stats[i][cnt])continue;
        else{
            result = false;
            break;
        }
    }
    return result;
}





let re = (cnt, n) => {
    if(cnt == n){
        ret.push(list.join(' '));
        return ;
    }
    for(let i=0; i<21; i++){
            if(ret.length > 0) return ;
            list[cnt] = number[i];
            if(check_result(list,cnt)){
                re(cnt+1, n)
            }

    }
    return ;
}

re(0, cases)

console.log(ret.join(' '));