const fs = require('fs');
const line = fs.readFileSync("./input.txt", "utf8");
let input = line.trim().split('\n'); 
let C = input.shift();
let cnt = 0;
let tog = 0;

for (let i = 0; i < C; i++){
    let arr = input[i].split('');
    for (let j = 0; j < arr.length; j++){
        for(let k = j+2; k < arr.length; k++){
            if(arr[j] != arr[j+1] && arr[j] == arr[k] && arr[j+1] != null && arr[k] != null){
                tog = 1;
                break;
            }
        }
    }
    if(tog == 0){
        cnt += 1;
    }
    tog = 0;
}
console.log(cnt);