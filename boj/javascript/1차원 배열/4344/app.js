const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n');

let inputC = +input[0];
let inputArr = [];
for (let i = 1; i < input.length; i++){
    const arr = input[i].split(' ').map(item => +item)
    const newArr = [];
    for (let i = 1; i < arr.length; i++)
        newArr.push(arr[i]);
    const testCase = {
        num : arr[0],
        arr : newArr
    }
    inputArr.push(testCase);
}
solution(inputC, inputArr);

function solution(ic, ia){
    
    for (let i = 0; i < ic; i++){
        let sum = 0;
        let ave = 0
        let cnt = 0;
        ia[i].arr.forEach(x => {
            sum += x;
        })
        ave = sum / ia[i].num;
        ia[i].arr.forEach(x => {
            if (x > ave)
                cnt += 1;
        })
        console.log((cnt/ia[i].num*100).toFixed(3) + '%');
    }
}