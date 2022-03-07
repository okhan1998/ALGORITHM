const fs = require('fs')
const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filepath).toString().split('\n');
let N = +input[0];
let arr = input[1].split(' ').map(x => +x);
let arrCopy = JSON.parse(JSON.stringify(arr));
arrCopy.sort((a,b) => b-a);

const nextPermutation = (N, arr) => {
    if(arr.every((v,i) => v === arrCopy[i])){
        console.log(-1);
        return;
    } else {
        let i = N - 2;
        while(arr[i] > arr[i+1]) {
            i--;
        }
        let j = N - 1;
        while(arr[i] > arr[j]){
            j--;
        }
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        console.log([...arr.slice(0,i+1), ...arr.slice(i+1).sort((a,b) => a-b)].join(' ').trim()); 
        return;
    }
}
nextPermutation(N,arr)