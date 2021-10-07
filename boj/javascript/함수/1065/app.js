const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filepath).toString();
solution(input);

function solution(A){
    var cnt = 0;
    for (let i = 1; i <= A; i++){
        if (i < 100)
         ++cnt;
        else if (i >= 100 && i <= 1000)
        {
            let stringnum = String(i);
            if ((stringnum[1] - stringnum[0]) == (stringnum[2] - stringnum[1]))
                ++cnt;
        }
    }
    console.log(cnt);
}