let fs = require('fs');
let filepath = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filepath).toString().split('\n').map((item) => +item);
solution(input);
// console.log(input);

function solution(input){
    let tmp = [];
    input.forEach(x => {
        const num = x % 42
        if (tmp.indexOf(num) === -1)
            tmp.push(num);
    })
    console.log(tmp.length);
}

// function solution(input){
//     let tmp = [];
//     let recn = [];
//     let swc = 1;

//     for (let i = 0; i < 10; i++){
//         tmp.push(input[i] % 42);
//     }   
//     for (let i = 0; i < 10; i++){
//         for (let j = 0; j < 10; j++){
//             if(recn[j] == tmp[i])
//                 swc += 1;
//         }
//         if (swc == 1)
//             recn.push(tmp[i]);
//         swc = 1;
//     }
//     console.log(recn.length);
// } 