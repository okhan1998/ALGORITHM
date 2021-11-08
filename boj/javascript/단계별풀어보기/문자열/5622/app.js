const fs = require('fs');
const line = fs.readFileSync("/dev/stdin", "utf8");
let input = line.trim().split('');
solution (input);

function solution(arr){
    let cnt = 0;
    for(let i = 0; i < arr.length; i++){
        if( arr[i] == 'A' ||
            arr[i] == 'B' ||
            arr[i] == 'C')
            cnt += 3;
        else if( arr[i] == 'D' ||
        arr[i] == 'E' ||
        arr[i] == 'F')
            cnt += 4;
        else if( arr[i] == 'G' ||
        arr[i] == 'H' ||
        arr[i] == 'I')
            cnt += 5;    
        else if( arr[i] == 'J' ||
        arr[i] == 'K' ||
        arr[i] == 'L')
            cnt += 6;
        else if( arr[i] == 'M' ||
        arr[i] == 'N' ||
        arr[i] == 'O')
            cnt += 7;
        else if( arr[i] == 'P' ||
        arr[i] == 'Q' ||
        arr[i] == 'R' ||
        arr[i] == 'S')
            cnt += 8;
        else if( arr[i] == 'T' ||
        arr[i] == 'U' ||
        arr[i] == 'V')
            cnt += 9;
        else if( arr[i] == 'W' ||
        arr[i] == 'X' ||
        arr[i] == 'Y' ||
        arr[i] == 'Z')
            cnt += 10;    

    }
    console.log(cnt);
}