const fs = require('fs');
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().trim().split('\n').map(item => +item);
let inputC = input.shift();
let inputArr = input;
let result = [];
solution (inputC, inputArr);

function solution(C, Arr){
    //산술
    result.push(Math.round(Arr.reduce((arr, cur) => arr + cur, 0) / C));

    //중앙값
    Arr.sort((a, b) => a - b);
    result.push(Arr[Math.floor((Arr.length / 2))]);

    //최빈값
    const map = new Map();
    for (let i = 0; i < C; i++){
        if(!map.has(Arr[i])){
            map.set(Arr[i], 1);
        } else {
            map.set(Arr[i], map.get(Arr[i]) + 1);
        }
    }
    let maxValue = 0;
    let answer = [];
    map.forEach((element, key) => {
        // forEach(값, 키, map 객체 자체)
        if (maxValue < element) {
            maxValue = element;
            answer = [];
            answer.push(key);
            //answer = key;
        }  else if (maxValue === map.get(key)) {
            answer.push(key);
        }
    });
    result.push(answer.length !== 1 ? answer[1] : answer[0]);

    //범위
    const maxSubMin = Arr[Arr.length - 1] - Arr[0];
    result.push(maxSubMin);

    console.log(result.join('\n').trim());

}