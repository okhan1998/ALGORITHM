let tmparr = [];
let result = [];
for (let i = 1; i <= 10000; i++){
    let arr = i.toString().split('').map(item => +item);
    let sum = arr.reduce((arr, cur) => arr += cur, 0);
    tmparr.push(i + sum);
}
for (let i = 1; i <= 10000; i++){
    if (tmparr.indexOf(i) === -1)
        result.push(i);
}

console.log(result.join('\n'));
