let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split('\n');
input.shift();

let answer = '';
let isPrimeNumber = new Array(1000001).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;

for(let i = 2; i < Math.ceil(Math.sqrt(1000000)); i++){
    if(isPrimeNumber[i]){
        let m = 2;
        while(i * m <= 1000000){
            isPrimeNumber[i * m] = false;
            m++;
        }
    }
}
for (let i = 0; i < input.length; i++){
    let cnt = 0;
    let tmp = [];
    for(let j = 2; j <= input[i]/2; j++){
        if(isPrimeNumber[j])
            if(isPrimeNumber[input[i] - j] && tmp.indexOf(j) == -1){
                cnt += 1;
                tmp.push(j)
                tmp.push(input[i] - j)
            }
    }
    
    answer += cnt + '\n';
}

console.log(answer.trim());