const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let des = input[0];
let numButton = +input[1];
let limitbutton = +input[1] != 0 ? input[2].split(' ') : null;
let rebutton = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
if(limitbutton != null){// 리모콘 버튼 고장내기
    limitbutton.forEach(x => {
        let tmp = rebutton.indexOf(x)
        rebutton.splice(tmp, 1);
    })
}

console.log(Math.min(numOperatorComb(des), onlyOperatorWay(des)));




function numOperatorComb(des){ //고장난 리모콘 버튼 + 연산자로 이동하는 방법
    let N1 = des
    let N2 = des
    let upcloseNum = 500000;
    let downcloseNum = 0;
    let time1 = 500000;
    let time2 = 500000;
    while(N1 != 1000000){ //위로가장 가까운 수 찾기 N1상한값주의 너무 크면 시간초과고 너무 작으면 틀렸다고 나옴 
        N1 = N1 + ''
        let cnt = 0;
        let tmp = N1.split('')
        tmp.forEach(x => {
            if(rebutton.indexOf(x) != -1)
            cnt += 1;
        })
        if(cnt == tmp.length){
            upcloseNum = N1;
            time1 = N1.split('').length
            break;
        }
        else{
            N1++
        }
    }
    while(N2 != -1){ // 아랠 가장 가까운수 찾기 
        N2 = N2 + ''
        let cnt = 0;
        let tmp = N2.split('')
        tmp.forEach(x => {
            if(rebutton.indexOf(x) != -1)
            cnt += 1;
        })
        if(cnt == tmp.length){
            downcloseNum = N2;
            time2 = N2.split('').length
            break;
        }
        else
            N2--
    }
    let mostMinTime = Math.min(upcloseNum - des + time1, des - downcloseNum + time2)
    return mostMinTime
}

function onlyOperatorWay(des){ //오로지 연산자로만 이동하는 방법
    if(+des >= 100){
        return des - 100;
    } else{
        return 100 - des;
    }
}