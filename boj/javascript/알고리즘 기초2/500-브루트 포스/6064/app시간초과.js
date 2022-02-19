const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let cases = +input.shift();
input = input.map(x => x.split(' ').map(y => +y));
let ret = [];


for(let i = 0; i < cases; i++){
    let x = 0;
    let y = 0;
    let cnt = 0; // 날짜 체크해주기
    let find = 0; // k번째 해가 존재 유무 판단해주는 스위치 

    while(!(x == input[i][0] && y == input[i][1])){// x,y 가 동시에  M N 일 때, 종료
        if(x == input[i][0]) // x 가 M일 때 다시 0 으로 돌리기
            x = 0;
        if(y == input[i][1]) // y 가 N일 때 다시 0 으로 돌리기
            y = 0;
        ++x;
        ++y;
        ++cnt;
        if(x == input[i][2] && y == input[i][3]){// k번째 해 찾았을때, 
            ret.push(cnt)
            find = 1;
            break;
        }

        
    }
    
    if(find == 0)
        ret.push(-1);
}

console.log(ret.join('\n'));