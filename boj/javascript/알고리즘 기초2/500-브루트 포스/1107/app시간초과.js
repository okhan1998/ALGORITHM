const fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n');
let des = input[0];
let numButton = +input[1];
let limitbutton = +input[1] != 0 ? input[2].split(' ') : null;
let rebutton = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
if(limitbutton != null){
    limitbutton.forEach(x => {
        let tmp = rebutton.indexOf(x)
        rebutton.splice(tmp, 1);
    })
}

console.log(Math.min(numOperatorComb(des), onlyOperatorWay(des)));




function numOperatorComb(des){
    let N1 = des
    let N2 = des
    let upcloseNum = 500000;
    let downcloseNum = 0;
    let time1 = 500000;
    let time2 = 500000;
    while(N1 != 511112){ //위로가장 가까운 수 찾기 
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
    while(N2 != -1){
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

function onlyOperatorWay(des){
    if(+des >= 100){
        return des - 100;
    } else{
        return 100 - des;
    }
}