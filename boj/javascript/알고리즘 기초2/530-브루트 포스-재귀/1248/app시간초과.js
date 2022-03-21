let fs = require('fs');
let filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt' 
let input = fs.readFileSync(filepath).toString().split('\n');
let cases = +input.shift();
let condition = input[0].split('');
// console.log(cases, condition);
let number = [];
for(let i = -10; i <= 10; i++)
    number.push(i);
// console.log(number);
let check = new Array(21).fill(false)
let list1 = [];
let list2 = 0;
let ret2 = [];
let tmp = 0;
let end = false;

let findcondition = (arr) => {
    ret2 = []
    for(let i =0; i<cases; i++){
        list2 = 0;
        for(let j = i; j < cases; j++){
            list2 += arr[j];
            if(list2 > 0)
                ret2.push('+')
            else if(list2 == 0)
                ret2.push('0')
            else
                ret2.push('-')
        }
    }
    if(JSON.stringify(ret2) == JSON.stringify(condition)){
        console.log(arr.join(' '))
        end = true;
    }
    return ;
}




let solution = (cnt, cases) => {
    if(!end){
        if(cnt === cases){
            findcondition(list1)
            return ; 
        }
        for(let i = 0; i < 21; i++){
            if(!check[i]){
                check[i] = true;
                list1[cnt] = number[i]
                tmp += number[i]
                if(condition[cnt] == '+' && tmp > 0)
                    solution(cnt+1, cases)
                else if(condition[cnt] == '-' && tmp < 0)
                    solution(cnt+1, cases)
                else if(condition[cnt] == '0' && tmp == 0)
                    solution(cnt+1, cases)            
                tmp -= number[i]
                check[i] = false;
            }
        }
    }
    return;
}
solution(0, cases);